import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Workflow,
  Cpu,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  TrendingUp,
  Check,
  Copy,
  ArrowRight,
  ExternalLink,
  Download,
  Building2,
  Landmark,
  GraduationCap,
  Target,
  FileText,
  Clock,
  Award,
  Users,
  Search,
  Network,
  Rocket,
  Compass,
  ArrowUpRight,
  Linkedin,
  BookOpen
} from 'lucide-react';
import {
  flagshipCases,
  auxiliaryCases,
  capabilities,
  careerExperiences,
  credentialBadges
} from './data/portfolioCategories';

const flagshipCaseOrder = [
  'case-01-bpr-sop',
  'case-02-bizsonar',
  'case-03-musimate',
  'case-04-my-trail',
  'case-05-ai-demand-forecasting'
];

export default function App() {
  // 記錄展開的專案 ID
  const [expandedCases, setExpandedCases] = useState({});
  // 記錄是否展開更多輔助專案 (預設折疊)
  const [showAuxiliary, setShowAuxiliary] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const toggleCase = (id) => {
    setExpandedCases((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="portfolio-app modern-executive-theme compact-layout">
      {/* 頂部導覽列 */}
      <header className="site-header">
        <div className="header-container">
          <a
            href="#top"
            className="nav-brand-group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="brand-badge">LIN</div>
            <div className="nav-status-pill">
              <span className="status-dot"></span>
              <span className="status-text">Currently Available</span>
            </div>
          </a>

          <nav className="nav-menu">
            <a href="#capabilities" className="nav-item" onClick={(e) => { e.preventDefault(); handleNavClick('capabilities'); }}>工作方法</a>
            <a href="#cases" className="nav-item" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>代表專案</a>
            <a href="#experience" className="nav-item" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>經歷認證</a>
            <a
              href="#footer"
              className="nav-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('footer'); }}
            >
              聯絡交流
            </a>
          </nav>
        </div>
      </header>

      {/* 主要頁面內容 */}
      <main>
        {/* ======================================================== */}
        {/* 區塊 01｜首頁主視覺 (Hero Section)                         */}
        {/* ======================================================== */}
        <header id="top" className="hero-section hero-compact">
          <div className="hero-content">


            {/* 主標題 (H1) */}
            <h1 className="hero-name-title">
              從需求出發，理解問題、定義解方，串連不同角色把想法推進落地。
            </h1>

            {/* 副標題 (P) */}
            <p className="hero-name-subtitle">
              具備 9+ 年跨教育、公共制度、科技法人與國際展會歷練。擅長深入第一線業務現場釐清痛點，連結商業、設計與工程團隊，推動 AI 應用、流程自動化與產品功能實際交付。
            </p>

            <p className="section-desc">
              Open to roles where I can connect business needs, people and technology to make things work better.
            </p>

            {/* 三大核心能力 */}
            <div className="hero-stats-compact-row">
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">業務流程重組</span>
                <span className="stat-compact-label">跨部門資訊流整合 · 化解重複行政耗損</span>
              </div>
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">AI 與產品驗證</span>
                <span className="stat-compact-label">從現場痛點出發 · 輕量化規格與 PoC 實踐</span>
              </div>
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">複雜利害關係人</span>
                <span className="stat-compact-label">穿梭體制與技術 · 轉譯需求推進跨界合作</span>
              </div>
            </div>

            {/* 行動按鈕列 (CTAs) */}
            <div className="hero-actions-row">
              <a
                href="#cases"
                className="hero-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('cases');
                }}
              >
                瀏覽代表專案
                <ChevronDown className="hero-arrow-down-icon" />
              </a>
              <a
                href="https://raw.githubusercontent.com/lin05141021/my_web/main/files/%E6%9E%97%E6%81%A9%E6%B1%9D_%E5%B1%A5%E6%AD%B7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary"
              >
                <Download className="w-4 h-4 mr-1.5 inline text-slate-600" />
                下載完整履歷 (PDF)
              </a>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 區塊 02｜核心能力與工作方法 (Core Competencies)             */}
        {/* ======================================================== */}
        <section id="capabilities" className="section-container section-compact bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">HOW I WORK</span>
            <h2 className="section-title">核心能力與工作方法</h2>
            <p className="section-desc">
              跨領域不是切換跑道，而是在不同場域淬鍊同一套方法：從現場探索真實痛點，梳理為系統規格，協同跨職能團隊如期落地。
            </p>
          </div>

          <div className="capabilities-grid-4">
            {capabilities.map((cap) => (
              <div key={cap.step} className="capability-card-compact">
                <div className="cap-card-header">
                  <span className="cap-step-badge">{cap.step}</span>
                  <h3 className="cap-phase-title">{cap.phase}</h3>
                </div>
                <p className="cap-card-lead">{cap.lead}</p>
                <ul className="cap-points-list">
                  {cap.points.map((pt, idx) => (
                    <li key={idx}>
                      <span className="cap-check-icon">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 區塊 03｜代表專案與落地成果 (Featured Case Studies)        */}
        {/* ======================================================== */}
        <section id="cases" className="section-container section-compact">
          <div className="section-header">
            <span className="section-tag">IN PRACTICE</span>
            <h2 className="section-title">從問題到實踐</h2>
            <p className="section-desc">
              以 0→1 產品交付、AI 應用導入與業務流程重構為核心的代表性實踐。
            </p>
          </div>

          <div className="cases-list-compact">
            {flagshipCaseOrder.map((caseId) => flagshipCases.find((caseItem) => caseItem.id === caseId)).map((caseItem) => {
              const isExpanded = !!expandedCases[caseItem.id];
              return (
                <article key={caseItem.id} className={`case-card-compact ${isExpanded ? 'is-open' : ''}`}>
                  {/* 卡片主體 (扁平精簡：標籤、標題、1 句摘要、展開按鈕) */}
                  <div className="case-compact-main">
                    <div className="case-header-row">
                      <div className="case-badges-wrap">
                        {caseItem.badges.map((b, i) => (
                          <span key={i} className="case-mini-badge">{b}</span>
                        ))}
                      </div>
                    </div>

                    <h3 className="case-compact-title">{caseItem.title}</h3>
                    <p className="case-compact-subtitle">{caseItem.subtitle}</p>
                    <p className="case-compact-summary">{caseItem.summary}</p>

                    <button
                      type="button"
                      className="btn-toggle-compact"
                      onClick={() => toggleCase(caseItem.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? '收合解方細節' : '展開解方細節與規格'}</span>
                    </button>
                  </div>

                  {/* 展開內容 (8 格結構拆解) */}
                  {isExpanded && (
                    <div className="case-breakdown-expand">
                      <div className="breakdown-grid-8">
                        {caseItem.breakdown.map((item) => (
                          <div key={item.step} className="breakdown-grid-item">
                            <div className="breakdown-item-header">
                              <span className="breakdown-step-badge">{item.step}</span>
                              <span className="breakdown-item-label">{item.label}</span>
                            </div>
                            {Array.isArray(item.content) ? (
                              <ul className="breakdown-item-content breakdown-item-content-list">
                                {item.content.map((detail) => <li key={detail}>{detail}</li>)}
                              </ul>
                            ) : (
                              <p className="breakdown-item-content">{item.content}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* 區塊 04｜更多專案與探索 (Additional Projects)              */}
          {/* ======================================================== */}
          <div className="auxiliary-accordion-wrap">
            <button
              type="button"
              className="auxiliary-accordion-header"
              onClick={() => setShowAuxiliary(!showAuxiliary)}
            >
              <span className="accordion-title-text">
                {showAuxiliary ? '[-] 收合其他產品設計與概念驗證專案' : '[+] 查看更多產品設計與概念驗證專案 (點擊展開)'}
              </span>
              {showAuxiliary ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {showAuxiliary && (
              <div className="auxiliary-cards-grid">
                {auxiliaryCases.map((aux, idx) => (
                  <div key={idx} className="auxiliary-card">
                    <span className="auxiliary-category-tag">{aux.category}</span>
                    <h4 className="auxiliary-title">{aux.title}</h4>
                    <p className="auxiliary-desc">{aux.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 區塊 05｜職涯歷練與專業認證 (Experience & Credentials)     */}
        {/* ======================================================== */}
        <section id="experience" className="section-container section-compact bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">EXPERIENCE & CREDENTIALS</span>
            <h2 className="section-title">職涯經歷與專業認證</h2>
            <p className="section-desc">
              跨公共制度、科技法人與國際展會的實戰推進歷練。
            </p>
          </div>

          <div className="experience-credentials-container">
            {/* 左側：職涯經歷主線 */}
            <div className="career-timeline-panel">
              <h3 className="panel-subhead-title">
                <Building2 className="w-5 h-5 mr-2 text-sky-600 inline" />
                職涯經歷
              </h3>
              <div className="career-timeline-list">
                {careerExperiences.map((exp, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-header-row">
                      <div>
                        <span className="timeline-company font-bold">{exp.company}</span>
                        <span className="timeline-sep"> ｜ </span>
                        <span className="timeline-role">{exp.role}</span>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-highlights">{exp.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：重點進修與認證 */}
            <div className="credentials-badges-panel">
              <h3 className="panel-subhead-title">
                <Award className="w-5 h-5 mr-2 text-emerald-600 inline" />
                進修與認證
              </h3>
              <div className="badges-flex-wrap">
                {credentialBadges.map((badge, idx) => (
                  <div key={idx} className="credential-capsule-badge">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================== */}
      {/* 區塊 06｜下一步與聯絡資訊 */}
      {/* ======================================================== */}
      <footer id="footer" className="site-footer footer-all-in-one">
        <div className="footer-compact-banner">
          <div className="footer-banner-left">
            <span className="footer-eyebrow">NEXT STEP</span>
            <h3 className="footer-main-lead">期待與您展開交流</h3>
            <p className="footer-sub-lead">期待有機會與您共同推動發掘需求落地解決的過程。</p>
          </div>

          <div className="footer-banner-actions">
            <a
              href="https://raw.githubusercontent.com/lin05141021/my_web/main/files/%E6%9E%97%E6%81%A9%E6%B1%9D_%E5%B1%A5%E6%AD%B7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-act-btn resume-btn"
              title="下載履歷"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span>下載完整履歷 (PDF)</span>
            </a>

            <div className="footer-email-copy">
              <Mail className="footer-email-icon" />
              <a href="mailto:kim05141021@gmail.com">kim05141021@gmail.com</a>
              <span className="footer-action-divider"></span>
              <button type="button" onClick={() => handleCopy('kim05141021@gmail.com', 'footer-email')}>
                <Copy />
                {copiedType === 'footer-email' ? '已複製' : '複製'}
              </button>
            </div>
          </div>
        </div>

        <div className="sub-footer-bar">
          <div className="footer-secondary-links">
            <a href="https://www.linkedin.com/in/enju-lin-a16601244" target="_blank" rel="noopener noreferrer">LinkedIn 個人檔案 ↗</a>
            <a href="https://lin05141021.github.io/my_trail/" target="_blank" rel="noopener noreferrer">🌿 MY TRAIL 思考展間 ↗</a>
          </div>
          <p className="sub-footer-copy">© 2026 Linda Lin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
