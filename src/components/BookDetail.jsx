import React, { useEffect } from 'react';
import { 
  X, 
  Quote, 
  BookOpen, 
  Building2, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { books } from '../data/books';

export default function BookDetail({ bookId, onClose, onSelectBook }) {
  const currentIndex = books.findIndex((b) => b.id === bookId);
  const book = books[currentIndex] || books[0];

  const prevBook = currentIndex > 0 ? books[currentIndex - 1] : null;
  const nextBook = currentIndex < books.length - 1 ? books[currentIndex + 1] : null;

  // ESC 鍵關閉彈窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // 鎖定背景滾動
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!bookId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container book-detail-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* 彈窗頂部 Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-cat-badge">{book.category}</span>
            <span className="modal-sub-badge">
              <BookOpen className="w-3.5 h-3.5 mr-1 inline" />
              思維啟發筆記
            </span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            title="關閉視窗 (Esc)"
            aria-label="關閉視窗"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 彈窗內容主體 */}
        <div className="modal-body book-detail-modal-body">
          {/* 書籍標頭與封面 */}
          <header className="book-modal-hero">
            <div className="book-modal-poster-wrap">
              <img 
                src={book.coverImg} 
                alt={book.title} 
                className="book-modal-poster-img"
              />
            </div>

            <div className="book-modal-hero-info">
              <div className="header-badge-row">
                <span className="book-category-badge">{book.category}</span>
                <span className="book-tag-pill">
                  <Building2 className="w-3.5 h-3.5 mr-1 inline" />
                  {book.publisher}
                </span>
              </div>

              <h2 className="book-modal-title">{book.title}</h2>
              {book.originalTitle && (
                <p className="book-modal-original-title">{book.originalTitle}</p>
              )}

              <div className="book-modal-author-meta">
                <div className="author-name-box">
                  <User className="w-4 h-4 mr-1.5 text-blue-600 inline" />
                  <span>作者：{book.author}</span>
                </div>
                <span className="meta-divider">•</span>
                <div className="reader-info">
                  <span>讀者：林恩汝 (Lin)</span>
                </div>
              </div>

              {/* 核心思辨金句 (Quote Box) */}
              <div className="book-modal-quote-box">
                <Quote className="w-5 h-5 text-blue-600 mb-1 opacity-80" />
                <p className="book-modal-quote-text">{book.quote}</p>
              </div>
            </div>
          </header>

          {/* 若有核心支柱標籤 (Pillars) */}
          {book.pillars && book.pillars.length > 0 && (
            <div className="book-modal-pillars-row">
              <span className="pillars-label">核心關鍵維度：</span>
              <div className="pillars-chips-list">
                {book.pillars.map((pill, pIdx) => (
                  <span key={pIdx} className="pillar-chip-item">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 我的心得摘要 (Takeaways & Key Insights) */}
          <div className="book-modal-takeaways-section">
            <div className="takeaways-section-header">
              <div className="takeaways-header-icon">
                <Lightbulb className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="takeaways-section-title">我的心得摘要</h3>
            </div>

            <div className="takeaways-card-list">
              {book.takeaways && book.takeaways.map((item, idx) => (
                <div key={idx} className="takeaway-item-card">
                  <div className="takeaway-num-badge">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="takeaway-text-content">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 關聯標籤 */}
          <div className="book-modal-tags-row">
            <span className="modal-tags-label">關聯主題：</span>
            <div className="modal-tags-list">
              {book.tags.map((t, i) => (
                <span key={i} className="modal-tag-chip">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* 前後書籍導覽切換 */}
          <div className="book-modal-nav-row">
            {prevBook ? (
              <button
                onClick={() => onSelectBook(prevBook.id)}
                className="modal-nav-btn prev"
                title={`切換上一本：${prevBook.title}`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <div className="nav-btn-text">
                  <span className="nav-btn-hint">上一本</span>
                  <span className="nav-btn-name">{prevBook.title}</span>
                </div>
              </button>
            ) : (
              <div className="modal-nav-placeholder"></div>
            )}

            {nextBook && (
              <button
                onClick={() => onSelectBook(nextBook.id)}
                className="modal-nav-btn next"
                title={`切換下一本：${nextBook.title}`}
              >
                <div className="nav-btn-text text-right">
                  <span className="nav-btn-hint">下一本</span>
                  <span className="nav-btn-name">{nextBook.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>

        {/* 彈窗底部 Footer */}
        <div className="modal-footer">
          <span className="modal-footnote">提示：可按鍵盤 Esc 或點擊外側背景關閉視窗</span>
          <button 
            className="btn-modal-close"
            onClick={onClose}
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
}