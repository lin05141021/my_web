import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Layers, 
  Workflow, 
  Palette, 
  Cpu, 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Wrench,
  FileText,
  Compass,
  TrendingUp
} from 'lucide-react';
import { portfolioCategories } from '../data/portfolioCategories';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState(portfolioCategories[0].id);
  const [selectedCase, setSelectedCase] = useState(null);

  const activeCategory = portfolioCategories.find((cat) => cat.id === activeTab) || portfolioCategories[0];

  const handleCategoryMore = (categoryId) => {
    setActiveTab(categoryId);
    requestAnimationFrame(() => {
      document.getElementById(`portfolio-category-${categoryId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  // 鍵盤 ESC 關閉彈窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ai-solutions':
        return <Cpu className="w-4 h-4" />;
      case 'business-operations':
        return <Workflow className="w-4 h-4" />;
      case 'product-design':
        return <Layers className="w-4 h-4" />;
      case 'graphic-design':
        return <Palette className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const renderCapsuleBadge = (codeStr) => {
    const parts = (codeStr || '').trim().split(' ');
    const lbl = parts.length > 1 ? parts[0] : 'CASE';
    const num = parts.length > 1 ? parts[1] : codeStr;
    return (
      <span className="case-code-badge capsule-pill">
        <span className="case-badge-lbl">{lbl}</span>
        <span className="case-badge-num">{num}</span>
      </span>
    );
  };

  return (
    <div className="portfolio-showcase">
      {/* 四大類別切換卡片：大圖 16:9 完整呈現無裁切 */}
      <div className="category-selector-grid">
        {portfolioCategories.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <div
              key={cat.id}
              className={`category-selector-card cat-${cat.id} ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {/* 卡片上半部：16:9 比例完整呈現海報圖片 */}
              <div className="selector-card-cover-wrap">
                <img 
                  src={cat.coverImage} 
                  alt={cat.title} 
                  className="selector-card-cover-img"
                  loading="lazy"
                />
              </div>

              {/* 卡片下半部：精緻標題列 */}
              <div className="selector-card-body">
                <div className="selector-title-row">
                  <div className="cat-icon-bubble-sm">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h4 className="selector-title-sm">{cat.title}</h4>
                </div>
                <div className="selector-card-footer-line">
                  <span className="selector-subtitle-sm">{cat.englishTitle}</span>
                  <div className="selector-card-actions">
                    <span className="selector-cases-count-tag">{cat.cases.length} 案例</span>
                    <button
                      type="button"
                      className="selector-more-link"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleCategoryMore(cat.id);
                      }}
                      aria-label={`查看${cat.title}更多作品`}
                    >
                      更多 <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 緊湊型分類標頭與理念 */}
      <div 
        className={`category-compact-header-bar cat-${activeCategory.id}`}
        style={{ borderLeft: `4px solid ${activeCategory.themeColor}` }}
      >
        <div className="cat-header-left">
          <div className="cat-header-meta">
            <span 
              className="cat-code-badge-sm"
              style={{ color: activeCategory.themeColor }}
            >
              {activeCategory.categoryCode}
            </span>
            <span className="cat-eng-title-sm">{activeCategory.englishTitle}</span>
          </div>
          <h3 className="cat-header-title-sm">{activeCategory.title}</h3>
          <p className="cat-header-slogan-sm">「{activeCategory.slogan}」</p>
        </div>

        <div className="cat-header-tags-compact">
          {activeCategory.tags.map((tag, i) => (
            <span key={i} className="cat-tag-chip-sm">{tag}</span>
          ))}
        </div>
      </div>

      {/* 該類別底下的代表案例列表 (可點擊彈出深度專案詳情視窗) */}
      <div id={`portfolio-category-${activeCategory.id}`} className="cases-section-compact">
        <div className="cases-grid">
          {activeCategory.cases.map((cs) => (
            <div 
              key={cs.id} 
              className="case-card is-interactive"
              onClick={() => setSelectedCase({ 
                ...cs, 
                categoryName: activeCategory.title, 
                categoryCode: activeCategory.categoryCode,
                themeColor: activeCategory.themeColor,
                bgPill: activeCategory.bgPill
              })}
              title="點擊檢視專案深度解析"
            >
              <div className="case-card-header">
                {renderCapsuleBadge(cs.code)}
                <span className="case-tagline-text">{cs.tagline}</span>
              </div>

              <h4 className="case-title">{cs.name}</h4>
              <p className="case-desc">{cs.desc}</p>

              <div className="case-tools-wrapper">
                <span className="tools-label">實務工具與方法論：</span>
                <div className="tools-pills">
                  {cs.tools.map((t, idx) => (
                    <span key={idx} className="tool-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="case-card-click-hint">
                <span style={{ color: activeCategory.themeColor, fontWeight: 700 }}>點擊檢視專案詳情</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 inline" style={{ color: activeCategory.themeColor }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 專案詳情彈出視窗 (Project Detail Modal) */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* 彈窗頂部 */}
            <div className="modal-header">
              <div className="modal-header-meta">
                <span 
                  className="modal-cat-badge"
                  style={{
                    color: selectedCase.themeColor || '#12C0FF',
                    background: selectedCase.bgPill || '#e6f8ff',
                    borderColor: (selectedCase.themeColor || '#12C0FF') + '40'
                  }}
                >
                  {selectedCase.categoryCode}
                </span>
                {renderCapsuleBadge(selectedCase.code)}
              </div>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedCase(null)}
                title="關閉視窗 (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 彈窗內容主體 */}
            <div className="modal-body">
              <div className="modal-title-group">
                <h2 className="modal-title">{selectedCase.name}</h2>
                <p className="modal-tagline">副標題：{selectedCase.tagline}</p>
              </div>

              {/* 1. 專案背景與痛點拆解 (Context & Challenge) */}
              {selectedCase.context && selectedCase.context.length > 0 && (
                <div className="modal-section-block">
                  <h4 className="modal-section-heading">
                    <FileText className="w-4 h-4 mr-1.5 inline text-blue-600" />
                    專案背景與痛點拆解 (Context & Challenge)
                  </h4>
                  <ul className="modal-detail-list">
                    {selectedCase.context.map((item, idx) => (
                      <li key={idx} className="modal-detail-item">
                        <span className="detail-item-dot"></span>
                        <span className="detail-item-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 2. PM 關鍵決策與技術轉譯 (My Role & Decisions) */}
              {selectedCase.decisions && selectedCase.decisions.length > 0 && (
                <div className="modal-section-block">
                  <h4 className="modal-section-heading">
                    <Compass className="w-4 h-4 mr-1.5 inline text-blue-600" />
                    PM 關鍵決策與技術轉譯 (My Role & Decisions)
                  </h4>
                  <ul className="modal-detail-list">
                    {selectedCase.decisions.map((item, idx) => (
                      <li key={idx} className="modal-detail-item">
                        <span className="detail-item-dot blue"></span>
                        <span className="detail-item-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. 核心成果與量化價值 (Measurable Impact) */}
              {selectedCase.impact && selectedCase.impact.length > 0 && (
                <div className="modal-section-block">
                  <h4 className="modal-section-heading">
                    <TrendingUp className="w-4 h-4 mr-1.5 inline text-emerald-600" />
                    核心成果與量化價值 (Measurable Impact)
                  </h4>
                  <ul className="modal-detail-list">
                    {selectedCase.impact.map((item, idx) => (
                      <li key={idx} className="modal-detail-item">
                        <span className="detail-item-dot green"></span>
                        <span className="detail-item-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. PM 實務工具、交付規格與方法論 */}
              <div className="modal-section-block">
                <h4 className="modal-section-heading">
                  <Wrench className="w-4 h-4 mr-1.5 inline text-amber-600" />
                  PM 實務工具、交付規格與方法論
                </h4>
                <div className="modal-tools-pills">
                  {selectedCase.tools.map((t, idx) => (
                    <span key={idx} className="modal-tool-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 彈窗底部 */}
            <div className="modal-footer">
              <span className="modal-footnote">提示：可按鍵盤 Esc 或點擊外側背景關閉視窗</span>
              <button 
                className="btn-modal-close"
                onClick={() => setSelectedCase(null)}
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
