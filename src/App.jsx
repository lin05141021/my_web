import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  Workflow,
  Cpu,
  Send,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Award,
  Users,
  Target,
  Clock,
  Zap,
  TrendingUp,
  FileCheck,
  Check,
  ShieldCheck,
  Leaf,
  Copy,
  ArrowRight,
  ExternalLink,
  Download,
  Building2,
  Landmark
} from 'lucide-react';
import PortfolioShowcase from './components/PortfolioShowcase';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null

  const handleOpenBook = (id) => {
    setSelectedBookId(id);
  };

  const handleCloseBook = () => {
    setSelectedBookId(null);
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
      {/* 頂部 Vibe Coding 原型宣告橫幅 */}
      <div className="vibe-banner">
        <div className="vibe-banner-inner">
          <span className="vibe-status-dot"></span>
          <span className="vibe-banner-tag">VIBE CODING POC</span>
          <span className="vibe-banner-divider">/</span>
          <span className="vibe-banner-text">
            本網站為 Vibe Coding 三天快速實作 • 練習 AI 協同開發能力
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
              <span className="logo-sub">AI Product Manager</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#about" onClick={() => handleNavClick('about')}>關於定位</a>
            <a href="#metrics" onClick={() => handleNavClick('metrics')}>量化戰績</a>
            <a href="#certifications" onClick={() => handleNavClick('certifications')}>專業證照</a>
            <a href="#portfolio" onClick={() => handleNavClick('portfolio')}>精選實績</a>
            <a href="#experience" onClick={() => handleNavClick('experience')}>經歷軌跡</a>
            <a href="#books" onClick={() => handleNavClick('books')}>思維啟發</a>
            <a
              href="#contact"
              className="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
            >
              聯絡洽談
            </a>
          </div>
        </div>
      </nav>

      {/* 首頁主要內容 */}
      <main>
        {/* ======================================================== */}
        {/* 1. Hero 區塊與核心定位 (Executive Hero)                   */}
        {/* ======================================================== */}
        <header id="top" className="hero-section">
          <div className="hero-content">
            {/* 頂部身分徽章 */}
            <div className="hero-badge-row">
              <span className="executive-badge">
                <span className="status-indicator-dot"></span>
                期待合作方向 - AI 產品經理 / 數位轉型 PM
              </span>
              <span className="executive-location-tag">
                <MapPin className="w-3.5 h-3.5 mr-1 inline text-slate-500" />
                台北市 (可遠端 / 混合辦公)
              </span>
            </div>

            {/* 專業主標題與副標 */}
            <h1 className="hero-name-title">
              跨領域整合者 <span className="title-sep">•</span> 數位轉型與 AI 產品經理
            </h1>
            <p className="hero-name-subtitle">
              林恩汝 (Lin) ｜ Cross-Functional Integrator & Product Manager
            </p>

            {/* 核心定位宣言 Box */}
            <div className="hero-manifesto-box" id="about">
              <p className="manifesto-lead">
                穿梭於<strong>「商業需求 × 設計思維 × 技術可行性 × 組織協作」</strong>的跨界交會點。
              </p>
              <p className="manifesto-desc">
                跨域背景更能了解跨角色認知落差，有效降低溝通成本，將模糊痛點轉譯為明確團隊共識。
              </p>


            </div>

            {/* ======================================================== */}
            {/* 核心實務能力 (Core Competencies & Capabilities)            */}
            {/* ======================================================== */}
            <div className="cross-domain-section">
              <div className="cross-domain-header">
                <span className="cross-domain-section-title">核心實務能力</span>
              </div>
              <div className="cross-domain-grid">
                <div className="cross-domain-card">
                  <div className="cross-card-header">
                    <div className="cross-icon-wrap biz">
                      <TrendingUp className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="cross-tag biz">業務流程重組</span>
                  </div>
                  <p className="cross-card-text">
                    盤點工作流斷點，依業務需求重塑 SOP，並導入自動化工具，大幅提升效率並降低人為誤差的組織風險。
                  </p>
                </div>

                <div className="cross-domain-card">
                  <div className="cross-card-header">
                    <div className="cross-icon-wrap design">
                      <Layers className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="cross-tag design">需求收斂與規格</span>
                  </div>
                  <p className="cross-card-text">
                    擅長梳理邏輯、設計表單欄位與資訊架構，將直覺經驗轉化為結構清晰的規劃。
                  </p>
                </div>

                <div className="cross-domain-card">
                  <div className="cross-card-header">
                    <div className="cross-icon-wrap tech">
                      <Cpu className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="cross-tag tech">敏捷原型驗證</span>
                  </div>
                  <p className="cross-card-text">
                    具備前端基礎概念，能運用 AI 工具快速產出可操作的原型，協助團隊在開發過程中有明確共識。
                  </p>
                </div>

                <div className="cross-domain-card">
                  <div className="cross-card-header">
                    <div className="cross-icon-wrap gov">
                      <Landmark className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="cross-tag gov">跨部門共識協調</span>
                  </div>
                  <p className="cross-card-text">
                    具備跨體系專案與高壓幕僚經驗，能站在不同角度溝通，收斂共識，兼顧專案推進與資安規範基本概念。
                  </p>
                </div>
              </div>
            </div>

            {/* 跨職能協作原則 */}
            <div className="engineer-collaboration-box">
              <div className="collaboration-badge-row">
                <span className="mono-badge">CROSS-DISCIPLINARY INTEGRATOR</span>
              </div>
              <p className="engineer-collaboration-text">
                「兼容以需求出發的設計思維；兼顧組織管理及商業思維的專案規畫；並以技術語言與工程團隊溝通落地。」
              </p>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 2. 核心量化戰績與指標 (Key Measurable Metrics)           */}
        {/* ======================================================== */}
        <section id="metrics" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">MEASURABLE IMPACT</span>
            <h2 className="section-title">核心量化戰績與指標</h2>
          </div>

          <div className="metrics-summary-grid">
            {/* 卡片 1：流程重組與工時節省 */}
            <div className="metric-stat-card">
              <div className="metric-top-row">
                <span className="metric-number">1,000+</span>
                <span className="metric-unit">小時 / 年</span>
              </div>
              <div className="metric-title">數位轉型工作流重構</div>
              <p className="metric-detail">
                重構資料流並導入 Python 自動化腳本，單次作業時間由 3 天縮短為 30 分鐘，年省逾千小時重複作業，大幅降低人工作業錯誤率。
              </p>
            </div>

            {/* 卡片 2：痛點挖掘與客製化提案 */}
            <div className="metric-stat-card">
              <div className="metric-top-row">
                <span className="metric-number">70%</span>
                <span className="metric-unit">新案簽約佔比</span>
              </div>
              <div className="metric-title">挖掘需求與商業提案</div>
              <p className="metric-detail">
                深入解析產業痛點並主導客製化專案提案，在 7 人團隊中貢獻 70% 之新客戶簽約轉化，展現清晰的商業價值轉譯力。
              </p>
            </div>

            {/* 卡片 3：大型專案動線與跨域調度 */}
            <div className="metric-stat-card">
              <div className="metric-top-row">
                <span className="metric-number">170+ / 3k+</span>
                <span className="metric-unit">團次 / 貴賓</span>
              </div>
              <div className="metric-title">大型活動即時調度</div>
              <p className="metric-detail">
                於智慧城市展 4 天展期內建立跨組室即時調度機制，帶領團隊服務逾 170 團、3,000 + 位國際貴賓，零衝突零失誤。
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. 專業背書與證照 (Certifications & Accreditations)        */}
        {/* ======================================================== */}
        <section id="certifications" className="section-container">
          <div className="section-header">
            <span className="section-tag">CERTIFICATIONS & ACCREDITATIONS</span>
            <h2 className="section-title">專業證照與能力鑑定</h2>
          </div>

          {/* 4 張核心正式證照與結業卡片 */}
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
                具備 AI 應用導入規劃及評估基本知識，能協助企業釐清需求並規劃 AI 導入、制定驗收標準等數位轉型專案。
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
                系統化掌握 AI 應用與 AI 產品規劃流程，能精確評估技術可行性、優化AI模型各階段應用效能，並實踐產品前後端落地。
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
                修習策略管理、組織行為與談判領導 (2022/9 ~ 2025/1)，能以高階主管視野評估專案營運效益並符合組織執行及管理。
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
                具備 ISO 14064-1 溫室氣體盤查與企業 ESG 永續轉型基礎，能將減碳行動方案融入企業數位轉型規劃。
              </p>
            </div>
          </div>

          {/* 持續進修標註 */}
          <div className="cert-continuous-learning">
            <span className="mono-badge">CONTINUOUS LEARNING</span>
            <span className="learning-text">
              持續深化：iPAS AI 應用規劃師（中級）備考中 ｜ AI 素養級認證（AIATCL™）預計9月取證
            </span>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. 精選實績 (Featured Projects Showcase)                  */}
        {/* ======================================================== */}
        <section id="portfolio" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">FEATURED PROJECTS</span>
            <h2 className="section-title">精選實績與個人專案</h2>
            <p className="section-desc">涵蓋 AI 應用、數位轉型、產品設計及視覺設計四大專業領域</p>
          </div>

          <PortfolioShowcase />
        </section>

        {/* ======================================================== */}
        {/* 5. 工作經歷與實戰成績 (Experience & Career Track)        */}
        {/* ======================================================== */}
        <section id="experience" className="section-container">
          <div className="section-header">
            <span className="section-tag">WORK HISTORY</span>
            <h2 className="section-title">工作經歷與業務軌跡</h2>
            <p className="section-desc">跨大型公會數位轉型、中央公部門法規幕僚、資策會敏捷產品開發與科學教育轉譯</p>
          </div>

          <div className="experience-pillars-list">
            {/* 軌跡 1：策展-數位轉型與營運管理 */}
            <div className="pillar-card border-yellow">
              <div className="pillar-header">
                <div className="pillar-title-group">
                  <span className="pillar-pill pill-yellow">策展－數位轉型與營運管理</span>
                  <span className="pillar-period">近 3 年 (2023/9 ~ 至今)</span>
                </div>
                <span className="pillar-company">台北市電腦商業同業公會 (TCA)</span>
              </div>

              <ul className="pillar-bullets">
                <li>
                  <strong className="bullet-highlight">流程重構 (BPR)：</strong>
                  識別跨部門資訊流痛點重建 SOP，導入 Python 自動化腳本與資料流治理，<strong>為團隊一年節省逾千小時工時，作業時間由 3 天大幅縮短為 30 分鐘，減少 3 位人力開支</strong>。
                </li>
                <li>
                  <strong className="bullet-highlight">AI 應用與平台經營：</strong>
                  主導 <strong>AI 媒合專案 (BizsonarAI)</strong>，梳理平台雙邊使用者痛點，規劃 PRD、User Story、UX 優化建議與研發時程控管。
                </li>
                <li>
                  <strong className="bullet-highlight">招商商務拓展：</strong>
                  深入剖析產業痛點，主導提案簡報，在 7 人團隊中<strong>貢獻全組 70% 新客戶</strong>。
                </li>
                <li>
                  <strong className="bullet-highlight">高規格活動策劃：</strong>
                  負責智慧城市展團體導覽，建立高效調度機制，<strong>4 天內帶領團隊服務逾 170 團、超過 3,000 位國際貴賓</strong>。
                </li>
              </ul>
            </div>

            {/* 軌跡 2：政策-兼容宏觀視野與可行性 */}
            <div className="pillar-card border-blue">
              <div className="pillar-header">
                <div className="pillar-title-group">
                  <span className="pillar-pill pill-blue">政策－兼容宏觀視野與可行性</span>
                  <span className="pillar-period">近 5 年 (2020/5 ~ 2023/9)</span>
                </div>
                <span className="pillar-company">教育部國民及學前教育署</span>
              </div>

              <ul className="pillar-bullets">
                <li>
                  <strong className="bullet-highlight">規劃執行新政策：</strong>
                  跨部會與跨縣市資源整合、預算編列規劃、擬定新法規、執行要點與函釋公文。
                </li>
                <li>
                  <strong className="bullet-highlight">高壓核心幕僚：</strong>
                  負責立法院立法委員答詢案件及監察院審查報告，提供主管即時統計決策數據與風險處置建議。
                </li>
                <li>
                  <strong className="bullet-highlight">新規範導入與推動：</strong>
                  擔任專案推動窗口，協調業務營運與資安個資規範導入。
                </li>
                <li>
                  <strong className="bullet-highlight">團隊領導與提攜後進：</strong>
                  快速上手新業務，<strong>擔任小老師帶領 15 位新同仁熟悉政務，並管理 3 位工讀生</strong>協同完成高壓政務。
                </li>
              </ul>
            </div>

            {/* 軌跡 3：專案-專案管理與產品開發 */}
            <div className="pillar-card border-indigo">
              <div className="pillar-header">
                <div className="pillar-title-group">
                  <span className="pillar-pill pill-indigo">專案－專案管理與產品開發</span>
                  <span className="pillar-period">10 個月 (2019/3 ~ 2019/12)</span>
                </div>
                <span className="pillar-company">資策會 (財團法人資訊工業策進會)</span>
              </div>

              <ul className="pillar-bullets">
                <li>
                  <strong className="bullet-highlight">專案管理 (PM)：</strong>
                  擔任 PM，負責新功能（LINE Chatbot 智能對話及 AR 影像辨識）資料梳理、APP 功能測試、時程進度控管與後台數據監控。
                </li>
                <li>
                  <strong className="bullet-highlight">產品開發 (UI/UX)：</strong>
                  負責 2 項專案訪綱規劃、<strong>進行逾 7 場次深度需求訪談</strong>，分析使用者體驗痛點並設計數據儀表板 (Dashboard)，實際參與敏捷開發流程。
                </li>
              </ul>
            </div>

            {/* 軌跡 4：教育-針對受眾溝通轉譯 */}
            <div className="pillar-card border-green">
              <div className="pillar-header">
                <div className="pillar-title-group">
                  <span className="pillar-pill pill-green">教育－針對受眾溝通轉譯</span>
                  <span className="pillar-period">7 個月 (2017/8 ~ 2018/1)</span>
                </div>
                <span className="pillar-company">臺北市大安區金華國小 / 遠哲科學教育基金會</span>
              </div>

              <ul className="pillar-bullets">
                <li>
                  <strong className="bullet-highlight">教學與轉譯：</strong>
                  設計超過 50 節自然科學課程並實際教學，將抽象科學邏輯轉化為生動易懂的趣味實驗。
                </li>
                <li>
                  <strong className="bullet-highlight">核心溝通本質：</strong>
                  淬鍊出深入淺出的同理心溝通、以受眾為中心的需求探索、以及結構化內容規劃能力。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. 思考筆記 (Reading & Strategic Insights)                */}
        {/* ======================================================== */}
        <section id="books" className="section-container bg-slate-subtle">
          <div className="section-header">
            <span className="section-tag">STRATEGIC READING INSIGHTS</span>
            <h2 className="section-title">思考筆記</h2>
            <p className="section-desc">「閱讀是建構多元思維的基石。」</p>
          </div>

          <BookList onSelectBook={handleOpenBook} />
        </section>

        {/* ======================================================== */}
        {/* 7. 聯絡洽談 (Contact Center)                             */}
        {/* ======================================================== */}
        <section id="contact" className="section-container">
          <div className="section-header">
            <span className="section-tag">LET'S CONNECT</span>
            <h2 className="section-title">期待與您展開對話！</h2>
            <p className="section-desc">如貴司有尋找 AI 產品經理、數位轉型規劃等角色，或其他合作機會，都歡迎與我聯繫</p>
          </div>

          <div className="contact-container">
            <div className="contact-info-panel">
              <div className="contact-personal-card">
                <div className="contact-avatar-badge">林</div>
                <div>
                  <h3 className="contact-name">林恩汝 (Lin)</h3>
                  <p className="contact-title">AI & BPR Product Manager</p>
                </div>
              </div>

              <p className="contact-subtext">
                專精營運流程重構、AI 原型敏捷驗證與跨部門利害關係人協調。期待推動貴組織數位解方高效落地！
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon"><Mail className="w-4 h-4 text-blue-600" /></div>
                  <div className="detail-content-wrap">
                    <span className="detail-label">電子郵件 E-mail</span>
                    <p className="detail-value">kim05141021@gmail.com</p>
                  </div>
                  <button
                    className="copy-mini-btn"
                    onClick={() => handleCopy('kim05141021@gmail.com', 'email-box')}
                    title="複製信箱"
                  >
                    {copiedType === 'email-box' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon"><Phone className="w-4 h-4 text-blue-600" /></div>
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

              </div>
            </div>

            <div className="contact-form-panel">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-3" />
                  <h3>訊息已成功送出！</h3>
                  <p>感謝您的來信，我們保持聯繫 :) </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
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
                    <label htmlFor="message">洽談主旨或專案需求 <span className="required-star">*</span></label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="請簡述您的職缺機會、數位轉型或 AI 專案合作需求..."
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

      {/* 思考筆記彈出視窗 (Book Detail Modal) */}
      {selectedBookId && (
        <BookDetail
          bookId={selectedBookId}
          onClose={handleCloseBook}
          onSelectBook={handleOpenBook}
        />
      )}

      {/* 頁尾 Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">林恩汝 (Lin)</span>
            <span className="footer-title">AI & BPR Product Manager</span>
          </div>
          <p className="footer-desc">
            商業策略 × 使用者體驗 × 工程落地 × 政策協調
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} 林恩汝 (Lin). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
