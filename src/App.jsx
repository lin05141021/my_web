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
      {/* 頂部導覽列 Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#top"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="logo-initials-badge">LIN</div>
            <div className="logo-text-group">
              <span className="logo-name">林恩汝 (Lin)</span>
              <span className="logo-sub">Product & Transformation</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#capabilities" onClick={(e) => { e.preventDefault(); handleNavClick('capabilities'); }}>核心能力</a>
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>代表專案</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>職涯歷練</a>
            <a
              href="#footer"
              className="nav-contact-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('footer'); }}
            >
              聯絡交流
            </a>
          </div>
        </div>
      </nav>

      {/* 主要頁面內容 */}
      <main>
        {/* ======================================================== */}
        {/* 區塊 01｜首頁主視覺 (Hero Section)                         */}
        {/* ======================================================== */}
        <header id="top" className="hero-section hero-compact">
          <div className="hero-content">
            {/* 頂部關鍵字標籤 (Role Eyebrow) */}
            <div className="hero-badge-row">
              <span className="executive-badge">
                <span className="status-indicator-dot"></span>
                產品經理 ｜ 數位轉型與流程優化 ｜ AI 應用規劃
              </span>
            </div>

            {/* 主標題 (H1) */}
            <h1 className="hero-name-title">
              從問題到解方：將複雜業務需求轉化為可落地的數位解方
            </h1>

            {/* 副標題 (P) */}
            <p className="hero-name-subtitle">
              具備 9+ 年跨教育、公共制度、科技法人與國際展會歷練。擅長深入第一線業務現場釐清痛點，連結商業、設計與工程團隊，推動 AI 應用、流程自動化與產品功能實際交付。
            </p>

            {/* 關鍵成效指標 (Stats Row - 水平三欄緊湊排版) */}
            <div className="hero-stats-compact-row">
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">1,000+ 小時</span>
                <span className="stat-compact-label">流程自動化年省工時</span>
              </div>
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">20+ 位</span>
                <span className="stat-compact-label">深度質性需求訪談</span>
              </div>
              <div className="hero-stat-compact-item">
                <span className="stat-compact-number">70%+</span>
                <span className="stat-compact-label">團隊新客業務貢獻率</span>
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
                <ArrowRight className="w-4 h-4 ml-1.5 inline" />
              </a>
              <a
                href="./files/林恩汝_履歷.pdf"
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
            <span className="section-tag">CORE COMPETENCIES</span>
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
            <span className="section-tag">FEATURED CASE STUDIES</span>
            <h2 className="section-title">代表專案與落地成果</h2>
            <p className="section-desc">
              以 0→1 產品交付、AI 應用導入與業務流程重構為核心的代表性實踐。
            </p>
          </div>

          <div className="cases-list-compact">
            {flagshipCases.map((caseItem) => {
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
                    <p className="case-compact-summary">{caseItem.summary}</p>

                    <button
                      type="button"
                      className="btn-toggle-compact"
                      onClick={() => toggleCase(caseItem.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? '收合解方細節 ↑' : '展開解方細節與規格 ↓'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
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
                            <p className="breakdown-item-content">{item.content}</p>
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
            <h2 className="section-title">職涯歷練與專業認證</h2>
            <p className="section-desc">
              跨公共制度、科技法人與國際展會的實戰推進歷練。
            </p>
          </div>

          <div className="experience-credentials-container">
            {/* 左側：職涯歷練主線 */}
            <div className="career-timeline-panel">
              <h3 className="panel-subhead-title">
                <Building2 className="w-5 h-5 mr-2 text-sky-600 inline" />
                職涯歷練主線
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
                重點進修與認證
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
      {/* 區塊 06｜聯絡資訊與頁尾整併 (Compact All-in-One Footer)     */}
      {/* ======================================================== */}
      <footer id="footer" className="footer-all-in-one">
        <div className="footer-compact-banner">
          {/* 左側區塊 (Text) */}
          <div className="footer-banner-left">
            <h3 className="footer-main-lead">期待與優秀團隊一同創造改變</h3>
            <p className="footer-sub-lead">歡迎洽談產品管理、數位轉型或跨職能協作機會</p>
          </div>

          {/* 右側區塊 (Action Buttons - 水平排列) */}
          <div className="footer-banner-actions">
            <a
              href="mailto:kim05141021@gmail.com"
              className="footer-act-btn email-btn"
              title="寄信給我"
            >
              <Mail className="w-4 h-4 mr-1.5" />
              <span>kim05141021@gmail.com</span>
            </a>

            <a
              href="./files/林恩汝_履歷.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-act-btn resume-btn"
              title="下載履歷"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span>下載完整履歷 (PDF)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/enju-lin-a16601244"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-act-btn linkedin-btn"
              title="LinkedIn 檔案"
            >
              <Linkedin className="w-4 h-4 mr-1.5 text-sky-400" />
              <span>LinkedIn 個人檔案</span>
            </a>

            <a
              href="https://lin05141021.github.io/my_trail/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-act-btn trail-btn"
              title="探索個人思考筆記 MY TRAIL"
            >
              <span>🌿 探索個人思考筆記 MY TRAIL →</span>
            </a>
          </div>
        </div>

        {/* 底部微型版權列 (Sub-footer) */}
        <div className="sub-footer-bar">
          <p className="sub-footer-copy">© 2026 Linda Lin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
