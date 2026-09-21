import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, Sparkles } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleList({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['全部', 'RAG 架構', 'Prompt 工程', 'AI 趨勢', '自動化革新', '代理人架構', '模型部署'];

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === '全部' || article.category === selectedCategory;
    const matchSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        article.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="articles-container">
      {/* 搜尋與分類選單 */}
      <div className="articles-controls">
        <div className="search-box">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜尋 AI 文章、技術標籤（如 RAG, Prompt, RPA...）"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 文章卡片列表 */}
      {filteredArticles.length === 0 ? (
        <div className="empty-articles">
          <p>找不到符合條件的技術文章，請嘗試不同的關鍵字。</p>
        </div>
      ) : (
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="article-card"
              onClick={() => onSelectArticle(article.id)}
            >
              <div className="article-card-header">
                <span className="article-category-badge">{article.category}</span>
                <div className="article-meta">
                  <span className="meta-item">
                    <Calendar className="w-3.5 h-3.5 mr-1 inline" />
                    {article.date}
                  </span>
                  <span className="meta-item">
                    <Clock className="w-3.5 h-3.5 mr-1 inline" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h3 className="article-card-title">{article.title}</h3>
              <p className="article-card-summary">{article.summary}</p>

              <div className="article-card-footer">
                <div className="article-tags">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="article-tag">
                      <Tag className="w-3 h-3 mr-0.5 inline" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="article-tag-more">+{article.tags.length - 3}</span>
                  )}
                </div>

                <button
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(article.id);
                  }}
                >
                  閱讀全文
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}