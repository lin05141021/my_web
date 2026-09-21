import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Workflow,
  Cpu,
  CheckCircle2,
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
  Linkedin
} from 'lucide-react';
import {
  flagshipCases,
  auxiliaryCases,
  capabilities,
  careerExperiences,
  credentialBadges
} from './data/portfolioCategories';

export default function App() {
  // 記錄展開的專案 ID (Set 或 Object)
  const [expandedCases, setExpandedCases] = useState({});
  // 記錄是否展開更多輔助專案
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
    <div className="portfolio-app modern-executive-theme">
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
              <span className="logo-name">林恩汝 Lin</span>
              <span className="logo-sub">Product & Transformation</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#capabilities" onClick={(e) => { e.preventDefault(); handleNavClick('capabilities'); }}>核心能力</a>
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>精選專案</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>經歷與認證</a>
            <a
              href="#contact"
              className="nav-contact-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              聯絡洽談
            </a>
          </div>
        </div>
      </nav>

      {/* 主要頁面內容 */}
      <main>
        {/* ======================================================== */}
        {/* 區塊 01｜首頁主視覺 (Hero)                                */}
        {/* ======================================================== */}
        <header id="top" className="hero-section">
          <div className="hero-content">
            {/* 個人定位標籤 */}
            <div className="hero-badge-row">
              <span className="executive-badge">
                <span className="status-indicator-dot"></span>
                產品與數位轉型專案經理 (Product & Transformation)
              </span>
              <span className="executive-location-tag">
                <MapPin className="w-3.5 h-3.5 mr-1 inline text-slate-500" />
                台北市 (可遠端 / 混合辦公)
              </span>
            </div>

            {/* 主標題 (H1) */}
            <h1 className="hero-name-title">
              從問題到解方：將複雜業務需求轉化為可落地的數位解方
            </h1>

            {/* 核心論述 */}
            <p className="hero-name-subtitle">
              我擅長從第一線業務痛點與使用者需求出發，梳理複雜流程，連結商業、產品與技術團隊，推動 AI 應用、流程自動化與產品功能實際落地。
            </p>

            {/* 三大實績數據 (Stats Counter) */}
            <div className="hero-metric-bar">
              <div className="hero-metric-item">
                <span className="hero-metric-num">9+ <small className="metric-unit-sm">年</small></span>
                <span className="hero-metric-label">跨領域推進與利害關係人管理經驗</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">1,000+ <small className="metric-unit-sm">小時</small></span>
                <span className="hero-metric-label">流程重構年省重複工時</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">20+ <small className="metric-unit-sm">場</small></span>
                <span className="hero-metric-label">深度使用者與第一線訪談</span>
              </div>
            </div>

            {/* 行動按鈕 (CTA) */}
            <div className="hero-cta-group">
              <a
                href="#cases"
                className="btn-primary-hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('cases');
                }}
              >
                查看精選專案
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a
                href="./files/林恩汝_履歷.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-hero"
              >
                <Download className="w-4 h-4 mr-2 inline" />
                下載完整簡歷 (PDF)
              </a>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 區塊 02｜核心能力矩陣 (What I Can Do)                     */}
        {/* ======================================================== */}
        <section id="capabilities" className="section-container">
          <div className="section-header">
            <span className="section-tag">WHAT I CAN DO</span>
            <h2 className="section-title">核心能力矩陣</h2>
            <p className="section-desc">以四步驟工作方法論呈現，從需求洞察到系統化交付的完整路徑</p>
          </div>

          <div className="capabilities-grid-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="capability-card">
                <div className="capability-card-header">
                  <span className="capability-step-num">{cap.step}</span>
                  <div className={`capability-icon-bubble cap-step-${cap.step}`}>
                    {cap.step === '01' && <Search className="w-4 h-4 text-sky-600" />}
                    {cap.step === '02' && <FileText className="w-4 h-4 text-indigo-600" />}
                    {cap.step === '03' && <Network className="w-4 h-4 text-emerald-600" />}
                    {cap.step === '04' && <Rocket className="w-4 h-4 text-amber-600" />}
                  </div>
                </div>

                <h3 className="capability-title">{cap.phase}</h3>
                <p className="capability-lead">{cap.lead}</p>

                <ul className="capability-list">
                  {cap.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 區塊 03｜精選專案 (Selected Cases)                        */}
        {/* ======================================================== */}
        <section id="cases" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">SELECTED CASES</span>
            <h2 className="section-title">精選專案</h2>
            <p className="section-desc">
              預設只呈現核心摘要，點擊即可平滑展開 <strong>8 項結構化專案拆解</strong>
            </p>
          </div>

          {/* 4 大旗艦專案列表 */}
          <div className="cases-stack-list">
            {flagshipCases.map((cs, index) => {
              const isExpanded = !!expandedCases[cs.id];
              return (
                <article key={cs.id} className={`case-accordion-card ${isExpanded ? 'is-expanded' : ''}`}>
                  {/* 卡片外層 (預設顯示) */}
                  <div className="case-outer-box" onClick={() => toggleCase(cs.id)}>
                    <div className="case-outer-top">
                      <div className="case-outer-badges">
                        <span className="case-category-pill" style={{ color: cs.themeColor, backgroundColor: cs.bgPill }}>
                          {cs.subtitle}
                        </span>
                        {cs.badges.map((b, bIdx) => (
                          <span key={bIdx} className="case-tag-pill">
                            {b}
                          </span>
                        ))}
                      </div>
                      <span className="case-number-badge">CASE 0{index + 1}</span>
                    </div>

                    <h3 className="case-outer-title">{cs.title}</h3>
                    <p className="case-outer-summary">{cs.summary}</p>

                    <div className="case-outer-footer">
                      <button
                        type="button"
                        className="btn-toggle-breakdown"
                        style={{ color: cs.themeColor }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCase(cs.id);
                        }}
                      >
                        {isExpanded ? (
                          <>
                            收起 8 項專案拆解 <ChevronUp className="w-4 h-4 ml-1 inline" />
                          </>
                        ) : (
                          <>
                            查看 8 項專案拆解 <ChevronDown className="w-4 h-4 ml-1 inline" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* 卡片展開內容 (8 格結構化網格) */}
                  {isExpanded && (
                    <div className="case-breakdown-expand animate-fadeIn">
                      <div className="breakdown-grid-8">
                        {cs.breakdown.map((item, bIdx) => (
                          <div key={bIdx} className="breakdown-grid-item">
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

          {/* 更多輔助專案 (預設收合 / 輕量標籤列表) */}
          <div className="auxiliary-section-wrap">
            <button
              type="button"
              className="btn-toggle-auxiliary"
              onClick={() => setShowAuxiliary(!showAuxiliary)}
            >
              {showAuxiliary ? (
                <>
                  收起更多輔助專案 <ChevronUp className="w-4 h-4 ml-1.5 inline" />
                </>
              ) : (
                <>
                  展開更多輔助專案 (4 個專案) <ChevronDown className="w-4 h-4 ml-1.5 inline" />
                </>
              )}
            </button>

            {showAuxiliary && (
              <div className="auxiliary-cards-grid animate-fadeIn">
                {auxiliaryCases.map((aux, aIdx) => (
                  <div key={aIdx} className="auxiliary-card">
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
        {/* 區塊 04｜核心背景與重點進修 (Experience & Credentials)      */}
        {/* ======================================================== */}
        <section id="experience" className="section-container">
          <div className="section-header">
            <span className="section-tag">EXPERIENCE & CREDENTIALS</span>
            <h2 className="section-title">核心背景與重點進修</h2>
            <p className="section-desc">實戰歷練主線與持續深化的商管 / AI 專業認證</p>
          </div>

          <div className="experience-credentials-container">
            {/* 職涯歷練主線 */}
            <div className="career-timeline-panel">
              <h3 className="panel-subhead-title">
                <Building2 className="w-4 h-4 mr-2 inline text-slate-700" />
                職涯歷練主線
              </h3>
              <div className="career-timeline-list">
                {careerExperiences.map((exp, eIdx) => (
                  <div key={eIdx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header-row">
                        <div className="timeline-role-group">
                          <strong className="timeline-role">{exp.role}</strong>
                          <span className="timeline-company">｜ {exp.company}</span>
                        </div>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <p className="timeline-highlights">{exp.highlights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 重點進修與認證 (高階膠囊標籤) */}
            <div className="credentials-badges-panel">
              <h3 className="panel-subhead-title">
                <Award className="w-4 h-4 mr-2 inline text-slate-700" />
                重點進修與專業認證
              </h3>
              <div className="badges-flex-wrap">
                {credentialBadges.map((badge, bIdx) => (
                  <span key={bIdx} className="credential-capsule-badge">
                    <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600 inline" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 區塊 05｜聯絡洽談與個人探索入口 (Contact & Connect)         */}
        {/* ======================================================== */}
        <section id="contact" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">LET'S CONNECT</span>
            <h2 className="section-title">聯絡洽談</h2>
            <p className="section-desc">
              期待將問題結構化、跨界溝通與 AI / 自動化落地經驗投入團隊，歡迎隨時交流討論！
            </p>
          </div>

          <div className="contact-centered-wrapper">
            <div className="contact-info-panel-centered">
              <div className="contact-personal-card">
                <div className="contact-avatar-badge">林</div>
                <div>
                  <h3 className="contact-name">林恩汝 (Lin)</h3>
                  <p className="contact-title">Product & Transformation PM</p>
                </div>
              </div>

              <p className="contact-welcome-statement">
                歡迎就 AI 產品規劃、數位轉型推進、流程自動化重構或各項專案合作機會進行交流討論！
              </p>

              {/* 履歷下載 Banner */}
              <a
                href="./files/林恩汝_履歷.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-download-banner"
              >
                <div className="banner-icon-box">
                  <Download className="w-5 h-5 text-sky-600" />
                </div>
                <div className="banner-text-box">
                  <span className="banner-title">下載完整履歷 (Download Resume)</span>
                  <span className="banner-sub">PDF 格式 • 包含完整專案與經歷細節</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </a>

              <div className="contact-details">
                {/* Email 項目 */}
                <div className="contact-detail-item">
                  <div className="detail-icon"><Mail className="w-4 h-4 text-sky-600" /></div>
                  <div className="detail-content-wrap">
                    <span className="detail-label">電子郵件 E-mail</span>
                    <a href="mailto:kim05141021@gmail.com" className="detail-value-link">
                      kim05141021@gmail.com
                    </a>
                  </div>
                  <button
                    className="copy-mini-btn"
                    onClick={() => handleCopy('kim05141021@gmail.com', 'email-box')}
                    title="複製信箱"
                  >
                    {copiedType === 'email-box' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* 電話項目 */}
                <div className="contact-detail-item">
                  <div className="detail-icon"><Phone className="w-4 h-4 text-sky-600" /></div>
                  <div className="detail-content-wrap">
                    <span className="detail-label">聯絡電話</span>
                    <a href="tel:0989236756" className="detail-value-link">
                      0989-236-756
                    </a>
                  </div>
                  <button
                    className="copy-mini-btn"
                    onClick={() => handleCopy('0989236756', 'phone-box')}
                    title="複製電話"
                  >
                    {copiedType === 'phone-box' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn 項目 */}
                <div className="contact-detail-item">
                  <div className="detail-icon"><Linkedin className="w-4 h-4 text-sky-600" /></div>
                  <div className="detail-content-wrap">
                    <span className="detail-label">LinkedIn 個人檔案</span>
                    <a
                      href="https://www.linkedin.com/in/enju-lin-a16601244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value-link"
                    >
                      linkedin.com/in/enju-lin-a16601244
                    </a>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/enju-lin-a16601244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="copy-mini-btn"
                    title="開啟 LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================== */}
      {/* 區塊 05｜頁尾 (Footer)                                    */}
      {/* ======================================================== */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">林恩汝 (Lin)</span>
            <span className="footer-title">Product & Transformation</span>
          </div>

          <div className="footer-links">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>回到頂部</a>
            <span className="footer-sep">•</span>
            <a href="#capabilities" onClick={(e) => { e.preventDefault(); handleNavClick('capabilities'); }}>核心能力</a>
            <span className="footer-sep">•</span>
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>精選專案</a>
            <span className="footer-sep">•</span>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>經歷與認證</a>
            <span className="footer-sep">•</span>
            <a href="./files/林恩汝_履歷.pdf" target="_blank" rel="noopener noreferrer">下載履歷 (PDF)</a>
            <span className="footer-sep">•</span>
            <a href="https://www.linkedin.com/in/enju-lin-a16601244" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <p className="footer-copy">© {new Date().getFullYear()} 林恩汝 (Lin). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
