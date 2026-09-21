import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Workflow,
  Cpu,
  Send,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Check,
  ShieldCheck,
  Copy,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Download,
  Building2,
  Landmark,
  GraduationCap,
  Target,
  Compass,
  FileText,
  X,
  Clock,
  BookOpen,
  Award,
  Users,
  Search,
  CheckSquare,
  Network,
  Rocket,
  Github
} from 'lucide-react';
import { flagshipCases, portfolioCategories } from './data/portfolioCategories';
import PortfolioShowcase from './components/PortfolioShowcase';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [showAllProjects, setShowAllProjects] = useState(false);

  // 鍵盤 ESC 關閉所有彈窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
        setSelectedBookId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="portfolio-app modern-executive-theme">
      {/* 頂部狀態橫幅 (Status Bar) */}
      <div className="vibe-banner">
        <div className="vibe-banner-inner">
          <span className="vibe-status-dot"></span>
          <span className="vibe-banner-tag">AI & OPERATIONS PM</span>
          <span className="vibe-banner-divider">/</span>
          <span className="vibe-banner-text">
            Business × User × Technology ｜ 專注 AI 應用導入、流程自動化與數位解方落地
          </span>
        </div>
      </div>

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
              <span className="logo-sub">AI & Operations PM</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>精選專案</a>
            <a href="#methodology" onClick={(e) => { e.preventDefault(); handleNavClick('methodology'); }}>核心方法</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>跨域經驗</a>
            <a href="#certifications" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>專業鑑定</a>
            <a href="#books" onClick={(e) => { e.preventDefault(); handleNavClick('books'); }}>思維筆記</a>
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

      {/* 主要內容區塊 */}
      <main>
        {/* ======================================================== */}
        {/* SECTION 01: Hero Section                                 */}
        {/* ======================================================== */}
        <header id="top" className="hero-section">
          <div className="hero-content">
            {/* 頂部身分徽章 */}
            <div className="hero-badge-row">
              <span className="executive-badge">
                <span className="status-indicator-dot"></span>
                AI & Operations Product Manager
              </span>
              <span className="executive-location-tag">
                <MapPin className="w-3.5 h-3.5 mr-1 inline text-slate-500" />
                台北市 (可遠端 / 混合辦公)
              </span>
            </div>

            {/* 主標題 (H1) 與副標題 */}
            <h1 className="hero-name-title">
              Turning Complex Business Needs into Scalable Digital Solutions
            </h1>
            <p className="hero-name-subtitle">
              從第一線業務與痛點出發，連結 <strong>Business × User × Technology</strong>，推動 AI 應用、流程自動化與數位解方實際落地。
            </p>

            {/* 核心價值量化指標條 (Metric Callouts) */}
            <div className="hero-metric-bar">
              <div className="hero-metric-item">
                <span className="hero-metric-num">1,000+ <small className="metric-unit-sm">hrs/年</small></span>
                <span className="hero-metric-label">流程自動化節省重複工時</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">70%</span>
                <span className="hero-metric-label">商業提案新客轉化貢獻</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">9+ <small className="metric-unit-sm">年</small></span>
                <span className="hero-metric-label">跨域轉譯、政策法規與專案落地</span>
              </div>
            </div>

            {/* 核心行動呼籲 (CTAs) */}
            <div className="hero-cta-group">
              <a
                href="#cases"
                className="btn-primary-hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('cases');
                }}
              >
                探索精選專案 (View Projects)
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a
                href="/files/林恩汝_履歷.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-hero"
              >
                <Download className="w-4 h-4 mr-2 inline" />
                完整簡歷 (Resume)
              </a>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* SECTION 02: Selected Case Studies (ID: cases)            */}
        {/* ======================================================== */}
        <section id="cases" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">FLAGSHIP CASE STUDIES</span>
            <h2 className="section-title">精選實戰專案</h2>
            <p className="section-desc">
              聚焦於 <strong>AI 產品落地</strong>、<strong>營運自動化 (BPR)</strong>、<strong>數據產品探索</strong> 與 <strong>高頻體驗優化</strong>
            </p>
          </div>

          {/* 4 大精選代表案例卡片網格 */}
          <div className="flagship-cases-grid">
            {flagshipCases.map((cs) => (
              <article
                key={cs.id}
                className="flagship-case-card"
                onClick={() => setSelectedCase(cs)}
                title="點擊查看專案深度解析"
              >
                <div className="flagship-card-top">
                  <div className="flagship-badge-group">
                    <span className="flagship-cat-badge" style={{ color: cs.themeColor, backgroundColor: cs.bgPill }}>
                      {cs.categoryBadge}
                    </span>
                    <span className="flagship-case-index">CASE {cs.caseNumber}</span>
                  </div>
                  <span className="flagship-metric-pill">{cs.metricHighlight}</span>
                </div>

                <h3 className="flagship-case-title">{cs.title}</h3>
                <p className="flagship-case-summary">{cs.oneLineSummary}</p>

                {/* 核心標籤 */}
                <div className="flagship-tags-wrap">
                  {cs.tags.map((tag, idx) => (
                    <span key={idx} className="flagship-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flagship-card-footer">
                  <button type="button" className="flagship-action-link" style={{ color: cs.themeColor }}>
                    查看專案詳情 <ArrowUpRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* 完整專案庫展開/收合開關 */}
          <div className="all-projects-toggle-wrap">
            <button
              type="button"
              className="btn-toggle-projects"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? '收起完整作品庫 ▲' : '探索所有分類作品集 (All Categories) ▼'}
            </button>
          </div>

          {/* 完整作品庫 (可展開) */}
          {showAllProjects && (
            <div className="all-projects-wrapper animate-fadeIn">
              <PortfolioShowcase />
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* SECTION 03: How I Drive Value (ID: methodology)          */}
        {/* ======================================================== */}
        <section id="methodology" className="section-container">
          <div className="section-header">
            <span className="section-tag">PM FRAMEWORK & VALUE DELIVERY</span>
            <h2 className="section-title">How I Drive Value</h2>
            <p className="section-desc">以業務目標為導向，從痛點探索到系統化交付的完整路徑</p>
          </div>

          <div className="methodology-grid-4">
            {/* 01 Discover */}
            <div className="methodology-card">
              <div className="methodology-card-header">
                <div className="methodology-step-badge">
                  <span className="step-number">01</span>
                </div>
                <div className="methodology-icon-wrap discover">
                  <Search className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <h3 className="methodology-title">
                <span className="methodology-phase">01 Discover</span>
                <span className="methodology-name">業務洞察與需求探索</span>
              </h3>
              <p className="methodology-desc-lead">深入第一線場域挖掘真問題，梳理跨角色認知差距。</p>
              <ul className="methodology-list">
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-sky-600 flex-shrink-0" />
                  <span>使用者深度訪談與田野觀察</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-sky-600 flex-shrink-0" />
                  <span>利害關係人痛點梳理</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-sky-600 flex-shrink-0" />
                  <span>業務流程斷點診斷</span>
                </li>
              </ul>
            </div>

            {/* 02 Define */}
            <div className="methodology-card">
              <div className="methodology-card-header">
                <div className="methodology-step-badge">
                  <span className="step-number">02</span>
                </div>
                <div className="methodology-icon-wrap define">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <h3 className="methodology-title">
                <span className="methodology-phase">02 Define</span>
                <span className="methodology-name">問題結構化與產品規格</span>
              </h3>
              <p className="methodology-desc-lead">將模糊需求轉化為結構化規格與直覺互動路徑。</p>
              <ul className="methodology-list">
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-indigo-600 flex-shrink-0" />
                  <span>撰寫 PRD / User Story</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-indigo-600 flex-shrink-0" />
                  <span>系統資訊架構 (IA) 與 User Flow</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-indigo-600 flex-shrink-0" />
                  <span>指標設定 (KPI / 驗收條件)</span>
                </li>
              </ul>
            </div>

            {/* 03 Connect */}
            <div className="methodology-card">
              <div className="methodology-card-header">
                <div className="methodology-step-badge">
                  <span className="step-number">03</span>
                </div>
                <div className="methodology-icon-wrap connect">
                  <Network className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <h3 className="methodology-title">
                <span className="methodology-phase">03 Connect</span>
                <span className="methodology-name">跨界轉譯與合規推進</span>
              </h3>
              <p className="methodology-desc-lead">對齊商務、技術與合規邊界，建立團隊高信任共識。</p>
              <ul className="methodology-list">
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                  <span>商業需求轉譯為技術規格</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                  <span>資安與規範制度推進 (ISO 27001 經驗)</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                  <span>跨部門共識整合與變更管理</span>
                </li>
              </ul>
            </div>

            {/* 04 Deliver */}
            <div className="methodology-card">
              <div className="methodology-card-header">
                <div className="methodology-step-badge">
                  <span className="step-number">04</span>
                </div>
                <div className="methodology-icon-wrap deliver">
                  <Rocket className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <h3 className="methodology-title">
                <span className="methodology-phase">04 Deliver</span>
                <span className="methodology-name">技術驗證與流程落地</span>
              </h3>
              <p className="methodology-desc-lead">以敏捷驗證迅速試錯，固化為標準作業產出實際人效。</p>
              <ul className="methodology-list">
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" />
                  <span>PoC 概念驗證與敏捷對接</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" />
                  <span>自動化工具與 AI 工具鏈導入</span>
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" />
                  <span>系統驗收測試 (UAT) 與 SOP 固化</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 04: Multidisciplinary Experience (ID: experience) */}
        {/* ======================================================== */}
        <section id="experience" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">MULTIDISCIPLINARY BACKGROUND</span>
            <h2 className="section-title">Experience & Background</h2>
            <p className="section-highlight-lead">
              9+ 年跨領域積累：教育轉譯 × 公共政策與制度 × 科技法人 × 國際 B2B 展會
            </p>
          </div>

          {/* 4 大核心跨域支柱 */}
          <div className="pillars-grid-4">
            {/* 支柱 1: Education */}
            <div className="pillar-feature-card pillar-edu">
              <div className="pillar-card-badge">
                <GraduationCap className="w-4 h-4 mr-1 inline" />
                EDUCATION
              </div>
              <h3 className="pillar-card-title">教育轉譯</h3>
              <p className="pillar-card-desc">
                <strong>轉譯力：</strong>擅長將複雜深奧的技術架構或繁複政策，轉譯為人人能懂的語言、直覺範例與使用者共識，大幅降低溝通成本。
              </p>
              <div className="pillar-card-meta">
                <span>臺北市金華國小 / 遠哲科學教育</span>
                <span className="pillar-period-tag">50+ 節科學課程設計</span>
              </div>
            </div>

            {/* 支柱 2: Public Sector */}
            <div className="pillar-feature-card pillar-gov">
              <div className="pillar-card-badge">
                <Landmark className="w-4 h-4 mr-1 inline" />
                PUBLIC SECTOR
              </div>
              <h3 className="pillar-card-title">制度與風控</h3>
              <p className="pillar-card-desc">
                <strong>治理力：</strong>歷經中央部會高壓利害關係人管理、預算編列、法規要點制定與 ISO 27001 資安/個資規範推進，具備嚴謹的風險意識。
              </p>
              <div className="pillar-card-meta">
                <span>教育部國民及學前教育署</span>
                <span className="pillar-period-tag">近 5 年核心幕僚與制度推動</span>
              </div>
            </div>

            {/* 支柱 3: Technology & Exhibition */}
            <div className="pillar-feature-card pillar-tech">
              <div className="pillar-card-badge">
                <Building2 className="w-4 h-4 mr-1 inline" />
                TECH & B2B
              </div>
              <h3 className="pillar-card-title">商業敏銳度</h3>
              <p className="pillar-card-desc">
                <strong>商業力：</strong>第一線 B2B 商業開發（<strong>貢獻組內 70% 新客戶</strong>）與展會平台營運，精準將產業痛點包裝為高轉換率提案。
              </p>
              <div className="pillar-card-meta">
                <span>台北市電腦商業同業公會 / 資策會</span>
                <span className="pillar-period-tag">3,000+ 貴賓接待 • 70% 新案</span>
              </div>
            </div>

            {/* 支柱 4: Continuous Learning */}
            <div className="pillar-feature-card pillar-learning">
              <div className="pillar-card-badge">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                LIFELONG GROWTH
              </div>
              <h3 className="pillar-card-title">持續精進</h3>
              <p className="pillar-card-desc">
                <strong>學習力：</strong>臺大 PMBA 管碩學分班結業、經濟部 iPAS AI 應用規劃師獲證、Python 自動化腳本與 Figma UI/UX 實作驗證。
              </p>
              <div className="pillar-card-meta">
                <span>臺大 PMBA • iPAS AI 規劃師</span>
                <span className="pillar-period-tag">商管視野 × AI 技術雙軌</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 專業證照與能力鑑定 (Certifications & Accreditations)       */}
        {/* ======================================================== */}
        <section id="certifications" className="section-container">
          <div className="section-header">
            <span className="section-tag">CERTIFICATIONS & ACCREDITATIONS</span>
            <h2 className="section-title">專業證照與能力鑑定</h2>
            <p className="section-desc">國家級專業鑑定與頂尖商管 / AI 實務培訓背書</p>
          </div>

          <div className="cert-grid-4">
            {/* 卡片 1: iPAS AI 應用規劃師 */}
            <div className="card cert-card">
              <div className="card-header">
                <span className="tag tag-cert">國家級能力鑑定 • 已獲證</span>
                <div className="cert-logo-box" title="經濟部 iPAS 國家能力鑑定">
                  <img src="/images/logos/ipas-logo.png" alt="iPAS Logo" className="cert-logo-img" />
                </div>
              </div>
              <h3 className="cert-title">
                <span className="cert-org">經濟部 iPAS</span>
                <span className="cert-name">AI 應用規劃師</span>
              </h3>
              <div className="cert-divider"></div>
              <p className="cert-value">
                <strong className="value-label">實質業務價值：</strong>
                具備 AI 應用導入規劃及評估能力，能協助企業釐清業務需求並規劃 AI 導入路線、制定驗收標準。
              </p>
            </div>

            {/* 卡片 2: AIA AI PM 課程 */}
            <div className="card cert-card">
              <div className="card-header">
                <span className="tag tag-cert">專業 AI 實務 • 9月取證</span>
                <div className="cert-logo-box" title="台灣人工智慧學校 Taiwan AI Academy">
                  <img src="/images/logos/aia-logo.svg" alt="AIA Logo" className="cert-logo-img circular-cert-logo" />
                </div>
              </div>
              <h3 className="cert-title">
                <span className="cert-org">台灣人工智慧學校 AIA</span>
                <span className="cert-name">AI PM 經理人班</span>
              </h3>
              <div className="cert-divider"></div>
              <p className="cert-value">
                <strong className="value-label">實質業務價值：</strong>
                系統化掌握 AI 應用與產品規劃全流程，精確評估技術可行性，優化模型各階段應用效能並推進前後端落地。
              </p>
            </div>

            {/* 卡片 3: 臺大 PMBA */}
            <div className="card cert-card">
              <div className="card-header">
                <span className="tag tag-mgmt">高階商管培訓 • 學分修畢</span>
                <div className="cert-logo-box" title="國立臺灣大學 NTU">
                  <img src="/images/logos/ntu-logo.png" alt="NTU Logo" className="cert-logo-img" />
                </div>
              </div>
              <h3 className="cert-title">
                <span className="cert-org">臺大 PMBA</span>
                <span className="cert-name">管理碩士學分班</span>
              </h3>
              <div className="cert-divider"></div>
              <p className="cert-value">
                <strong className="value-label">實質業務價值：</strong>
                修習策略管理、組織行為與談判領導 (2022/9 ~ 2025/1)，能以主管視野評估專案營運效益並符合組織策略。
              </p>
            </div>

            {/* 卡片 4: iPAS 淨零碳規劃管理師 */}
            <div className="card cert-card">
              <div className="card-header">
                <span className="tag tag-cert">國家級能力鑑定 • 已獲證</span>
                <div className="cert-logo-box" title="經濟部 iPAS 國家能力鑑定">
                  <img src="/images/logos/ipas-logo.png" alt="iPAS Logo" className="cert-logo-img" />
                </div>
              </div>
              <h3 className="cert-title">
                <span className="cert-org">經濟部 iPAS</span>
                <span className="cert-name">淨零碳規劃管理師</span>
              </h3>
              <div className="cert-divider"></div>
              <p className="cert-value">
                <strong className="value-label">實質業務價值：</strong>
                具備 ISO 14064-1 溫室氣體盤查與企業永續轉型基礎，能將綠色數位轉型思維融入專案規劃。
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 思考筆記 (Reading & Strategic Insights)                    */}
        {/* ======================================================== */}
        <section id="books" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">STRATEGIC READING INSIGHTS</span>
            <h2 className="section-title">思考筆記</h2>
            <p className="section-desc">「閱讀是建構多元思維模型與敏銳洞察的基石。」</p>
          </div>

          <BookList onSelectBook={(id) => setSelectedBookId(id)} />
        </section>

        {/* ======================================================== */}
        {/* SECTION 05: Resume & Contact (ID: contact)               */}
        {/* ======================================================== */}
        <section id="contact" className="section-container">
          <div className="section-header">
            <span className="section-tag">LET'S CONNECT</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc">
              期待能將需求梳理、跨界溝通與數位/AI 落地經驗投入企業團隊，一同發現問題、創造改變。
            </p>
          </div>

          <div className="contact-container">
            {/* 左側個人名片與快速聯絡方式 */}
            <div className="contact-info-panel">
              <div className="contact-personal-card">
                <div className="contact-avatar-badge">林</div>
                <div>
                  <h3 className="contact-name">林恩汝 (Lin)</h3>
                  <p className="contact-title">AI & Operations Product Manager</p>
                </div>
              </div>

              <p className="contact-subtext">
                歡迎就 AI 產品規劃、數位轉型推進、流程自動化重構或各項專案合作機會進行交流討論！
              </p>

              <div className="contact-details">
                {/* 履歷下載 CTA */}
                <a
                  href="/files/林恩汝_履歷.pdf"
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
                    <p className="detail-value">0989-236-756</p>
                  </div>
                  <button
                    className="copy-mini-btn"
                    onClick={() => handleCopy('0989236756', 'phone-box')}
                    title="複製電話"
                  >
                    {copiedType === 'phone-box' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* GitHub Profile */}
                <div className="contact-detail-item">
                  <div className="detail-icon"><Github className="w-4 h-4 text-sky-600" /></div>
                  <div className="detail-content-wrap">
                    <span className="detail-label">GitHub Profile</span>
                    <a
                      href="https://github.com/lin05141021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value-link"
                    >
                      github.com/lin05141021
                    </a>
                  </div>
                  <a
                    href="https://github.com/lin05141021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="copy-mini-btn"
                    title="開啟 GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 右側聯絡表單 */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-3" />
                  <h3>訊息已成功送出！</h3>
                  <p>感謝您的來信，我將於 24 小時內與您聯繫交流 :)</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-header-title">發送洽談訊息</h3>
                  <div className="form-group">
                    <label htmlFor="name">您的姓名 / 企業單位 <span className="required-star">*</span></label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="例如：王總監 / 某某股份有限公司"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">您的聯絡信箱 <span className="required-star">*</span></label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="yourname@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">洽談主旨或專案合作需求 <span className="required-star">*</span></label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="請簡述您的職缺機會、AI 產品規劃或營運自動化需求..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn-executive">
                    <Send className="w-4 h-4 mr-2 inline" />
                    發送聯絡訊息
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 專案詳情彈窗 (Flagship Case Study Modal) */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-meta">
                <span
                  className="modal-cat-tag"
                  style={{ color: selectedCase.themeColor, backgroundColor: selectedCase.bgPill }}
                >
                  {selectedCase.categoryBadge}
                </span>
                <span className="modal-code-tag">CASE {selectedCase.caseNumber}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedCase(null)}
                aria-label="關閉視窗"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-scrollable">
              <h2 className="modal-title">{selectedCase.title}</h2>
              <p className="modal-tagline">{selectedCase.oneLineSummary}</p>

              {/* 核心指標與標籤 */}
              <div className="modal-stats-bar">
                <div className="modal-stat-box">
                  <span className="stat-label">關鍵成效 Highlight</span>
                  <span className="stat-val" style={{ color: selectedCase.themeColor }}>
                    {selectedCase.metricHighlight}
                  </span>
                </div>
              </div>

              {/* 1. 專案背景與痛點 */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Target className="w-4 h-4 mr-1.5 inline text-slate-700" />
                  專案背景與業務痛點 (Context & Problem)
                </h4>
                <ul className="modal-bullet-list">
                  {selectedCase.context?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 2. PM 關鍵決策與實踐 */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Workflow className="w-4 h-4 mr-1.5 inline text-slate-700" />
                  PM 關鍵決策與推進路徑 (Decisions & Action)
                </h4>
                <ul className="modal-bullet-list">
                  {selectedCase.decisions?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 3. 實質業務成果 */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 inline text-emerald-600" />
                  量化成效與業務價值 (Impact & Measurable Value)
                </h4>
                <ul className="modal-bullet-list highlight-bullets">
                  {selectedCase.impact?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 4. 實務工具與交付物 */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Cpu className="w-4 h-4 mr-1.5 inline text-slate-700" />
                  實務方法與工具鏈 (Tools & Methods)
                </h4>
                <div className="modal-tools-pills">
                  {selectedCase.tools?.map((tool, i) => (
                    <span key={i} className="modal-tool-chip">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-footer-close-btn"
                onClick={() => setSelectedCase(null)}
              >
                關閉專案詳情
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 思考筆記彈出視窗 (Book Detail Modal) */}
      {selectedBookId && (
        <BookDetail
          bookId={selectedBookId}
          onClose={() => setSelectedBookId(null)}
          onSelectBook={(id) => setSelectedBookId(id)}
        />
      )}

      {/* 頁尾 Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">林恩汝 (Lin)</span>
            <span className="footer-title">AI & Operations Product Manager</span>
          </div>
          <p className="footer-desc">
            Business × User × Technology ｜ 商業策略 • 使用者體驗 • 流程自動化 • 政策法規協調
          </p>
          <div className="footer-links">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>回到頂部</a>
            <span className="footer-sep">•</span>
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>精選專案</a>
            <span className="footer-sep">•</span>
            <a href="#methodology" onClick={(e) => { e.preventDefault(); handleNavClick('methodology'); }}>核心方法</a>
            <span className="footer-sep">•</span>
            <a href="/files/林恩汝_履歷.pdf" target="_blank" rel="noopener noreferrer">履歷 PDF</a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} 林恩汝 (Lin). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
