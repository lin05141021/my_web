import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { books } from '../data/books';

export default function BookList({ onSelectBook }) {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const categories = [
    { name: '全部', count: books.length },
    { name: '商業策略與決策', count: books.filter(b => b.category === '商業策略與決策').length },
    { name: '組織心理與團隊協作', count: books.filter(b => b.category === '組織心理與團隊協作').length },
    { name: '前瞻科技與用戶洞察', count: books.filter(b => b.category === '前瞻科技與用戶洞察').length }
  ];

  const filteredBooks = books.filter((book) => {
    return selectedCategory === '全部' || book.category === selectedCategory;
  });

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth = 420; // 卡片寬度加間距
      const idx = Math.min(
        Math.round(scrollLeft / cardWidth),
        filteredBooks.length - 1
      );
      setActiveIndex(Math.max(0, idx));
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollPosition, { passive: true });
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        el.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [filteredBooks]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 440;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="books-showcase-container">
      {/* 類別篩選按鈕與狀態指示 */}
      <div className="books-controls-bar">
        <div className="books-category-pills">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`cat-pill-btn ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.name);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
            >
              <span>{cat.name}</span>
              <span className="cat-pill-count">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="books-count-meta">
          <span className="carousel-nav-indicator">
            共 {filteredBooks.length} 篇思維啟發筆記
          </span>
        </div>
      </div>

      {/* 書籍橫式滑動軌道 (帶左右淡化遮罩與浮動按鈕) */}
      {filteredBooks.length === 0 ? (
        <div className="empty-books-state">
          <BookOpen className="w-8 h-8 text-slate-300 mb-2 inline" />
          <p>暫無此分類書籍。</p>
        </div>
      ) : (
        <div className="books-carousel-wrapper">
          {/* 左側浮動箭頭按鈕 */}
          <button
            onClick={() => handleScroll('left')}
            className={`carousel-float-btn prev ${canScrollLeft ? 'is-active' : 'is-disabled'}`}
            title="向左切換上一本"
            aria-label="向左切換上一本"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 右側浮動箭頭按鈕 */}
          <button
            onClick={() => handleScroll('right')}
            className={`carousel-float-btn next ${canScrollRight ? 'is-active' : 'is-disabled'}`}
            title="向右切換下一本"
            aria-label="向右切換下一本"
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 左右邊緣淡化漸層遮罩 (Edge Vignette Masks) */}
          <div className={`carousel-edge-fade fade-left ${canScrollLeft ? 'is-visible' : ''}`} />
          <div className={`carousel-edge-fade fade-right ${canScrollRight ? 'is-visible' : ''}`} />

          {/* 卡片滑動軌道 (隱藏原生拉霸) */}
          <div className="books-horizontal-track" ref={scrollRef}>
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-horizontal-card"
                onClick={() => onSelectBook(book.id)}
                title={`點擊查看《${book.title}》思維啟發筆記`}
              >
                {/* 左側：書籍海報封面 */}
                <div className="book-card-left-poster">
                  <img
                    src={book.coverImg}
                    alt={book.title}
                    className="book-poster-thumb"
                    loading="lazy"
                  />
                  <span className="book-publisher-tiny">{book.publisher}</span>
                </div>

                {/* 右側：書籍核心資訊與金句 */}
                <div className="book-card-right-info">
                  <div className="book-card-top-line">
                    <span className="book-cat-badge">{book.category}</span>
                  </div>

                  <h4 className="book-compact-title" title={book.title}>
                    {book.title}
                  </h4>

                  <p className="book-compact-author">
                    {book.author}
                  </p>

                  <div className="book-compact-quote-box">
                    <Quote className="w-3.5 h-3.5 text-blue-600 mr-1 inline flex-shrink-0" />
                    <span className="book-compact-quote-text">{book.quote}</span>
                  </div>

                  <div className="book-compact-footer">
                    <div className="book-compact-tags">
                      {book.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="compact-tag-item">
                          {tag}
                        </span>
                      ))}
                      {book.tags.length > 2 && (
                        <span className="compact-tag-more">+{book.tags.length - 2}</span>
                      )}
                    </div>

                    <button
                      className="book-compact-read-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectBook(book.id);
                      }}
                      title="查看思維啟發筆記"
                    >
                      <span>思維啟發</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 底部滑動指示導引與進度點 */}
      <div className="books-scroll-hint-bar">
        {filteredBooks.length > 1 && (
          <div className="books-pagination-dots">
            {filteredBooks.map((_, i) => (
              <button
                key={i}
                className={`pagination-dot ${activeIndex === i ? 'is-active' : ''}`}
                onClick={() => handleScrollToIndex(i)}
                title={`前往第 ${i + 1} 本`}
                aria-label={`前往第 ${i + 1} 本`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
