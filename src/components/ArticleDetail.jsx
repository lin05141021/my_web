import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Sparkles,
  Award
} from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail({ articleId, onBack, onSelectArticle }) {
  const [copied, setCopied] = React.useState(false);

  const currentIndex = articles.findIndex((a) => a.id === articleId);
  const article = articles[currentIndex] || articles[0];

  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="article-detail-page">
      {/* 頂部導航列 */}
      <div className="detail-top-nav">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft className="w-4 h-4 mr-2 inline" />
          返回文章列表
        </button>

        <div className="detail-top-actions">
          <button onClick={handleShare} className="action-icon-btn" title="複製連結">
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? '已複製連結' : '分享文章'}</span>
          </button>
        </div>
      </div>

      <article className="article-content-wrapper">
        {/* 文章標頭 Header */}
        <header className="article-detail-header">
          <div className="header-badge-row">
            <span className="article-category-badge">{article.category}</span>
            <span className="article-read-badge">
              <BookOpen className="w-3.5 h-3.5 mr-1 inline" />
              AI 與流程優化專欄
            </span>
          </div>

          <h1 className="article-detail-title">{article.title}</h1>

          <div className="article-author-row">
            <div className="author-info">
              <div className="author-avatar">林</div>
              <div>
                <span className="author-name">林恩汝 (Lin)</span>
                <span className="author-role">UI/UX 設計師 & 產品經理 | iPAS AI 應用規劃師</span>
              </div>
            </div>

            <div className="article-detail-meta">
              <span className="meta-item">
                <Calendar className="w-4 h-4 mr-1 inline" />
                {article.date}
              </span>
              <span className="meta-item">
                <Clock className="w-4 h-4 mr-1 inline" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* 核心重點導讀 (Key Takeaway Box) */}
        <div className="article-summary-box">
          <div className="summary-title">
            <Sparkles className="w-4 h-4 text-indigo-600 mr-1.5" />
            <span>核心導讀摘要</span>
          </div>
          <p>{article.summary}</p>
        </div>

        {/* 正文內容 Sections */}
        <div className="article-body">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="content-section">
              {sec.heading && <h2 className="section-h2">{sec.heading}</h2>}

              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="content-p">{p}</p>
              ))}

              {sec.listItems && (
                <ul className="content-list">
                  {sec.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="content-li">{item}</li>
                  ))}
                </ul>
              )}

              {sec.codeSnippet && (
                <div className="code-block-wrapper">
                  <div className="code-block-header">
                    <span>架構與規格範例</span>
                    <span className="code-lang">JavaScript / Markdown</span>
                  </div>
                  <pre className="code-pre">
                    <code>{sec.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 文章標籤 Tags */}
        <div className="detail-tags-section">
          <span className="tags-label">技術關鍵字：</span>
          <div className="detail-tags-list">
            {article.tags.map((t, i) => (
              <span key={i} className="detail-tag">
                <Tag className="w-3.5 h-3.5 mr-1 inline" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 前後文章導航 */}
        <nav className="article-pagination">
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle.id)}
              className="pagination-btn prev-btn"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <div className="pagination-text">
                <span className="pagination-dir">上一篇專欄</span>
                <span className="pagination-title">{prevArticle.title}</span>
              </div>
            </button>
          ) : (
            <div className="pagination-placeholder"></div>
          )}

          {nextArticle && (
            <button
              onClick={() => onSelectArticle(nextArticle.id)}
              className="pagination-btn next-btn"
            >
              <div className="pagination-text text-right">
                <span className="pagination-dir">下一篇專欄</span>
                <span className="pagination-title">{nextArticle.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          )}
        </nav>

        {/* 底部返回按鈕 */}
        <div className="bottom-back-wrapper">
          <button onClick={onBack} className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回全部文章列表
          </button>
        </div>
      </article>
    </div>
  );
}