// =========================================================
// 代表專案與落地成果 (Featured Case Studies - 8 項結構化拆解)
// =========================================================
export const flagshipCases = [
  {
    id: "case-01-musimate",
    title: "MusiMate：獨立音樂教師私域營運作業系統 (Studio OS)",
    subtitle: "0→1 AI 產品",
    badges: ["0→1 AI 產品交付", "LINE LIFF 全流程", "雙軌 B2B2C 架構", "實機可操作"],
    summary: "調研 55 位資深教師痛點，協同資深技術團隊打造結合雙 RAG 語音聯絡簿、GPT-4o 截圖對帳與 100% LINE LIFF 體驗的輕量營運系統。",
    themeColor: "#0284c7",
    bgPill: "#e0f2fe",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "獨立音樂教師多依賴個人 LINE 處理課務，每週背負 4.5 小時無給行政，且常因人情壓力不敢收取臨時請假費用。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "現有工具功能無法整合，且家長抗拒額外App，都靠LINE無結構化的訊息人工整理。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "深度調研 55 位資深樂器教師，確認核心訴求為「減輕行政負擔」與「系統中立代當黑臉」。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "擔任 UX Product Manager，主導痛點研究、B端Web與C端LIFF雙軌架構、User Flow 與 LINE 全流程規格設計。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "設計 LINE LIFF 完整體驗（課表/調課/繳費/打卡），並串接 GPT-4o 截圖 OCR 自動對帳與 30 秒語音生成雙 RAG 教材聯絡簿。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與英業達軟體主管、和碩PM緊密協作，實際架設伺服器資料庫與API，並完成前端操作介面串接。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "完成部署與 LINE LIFF 實機驗證，於台灣人工智慧學校 AI PM 專題獲得肯定。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "AI 產品的設計理念在於「將複雜算力隱藏在使用者最熟悉的日常後」，以最低摩擦力解決人性與業務痛點，讓 AI 真正融入生活。」"
      }
    ]
  },
  {
    id: "case-02-bizsonar",
    title: "BizsonarAI 展會智慧媒合系統",
    subtitle: "AI 推薦模型",
    badges: ["AI 媒合模型", "B2B 平台", "跨廠商技術協作"],
    summary: "發掘展會資訊不對稱痛點，主動洽談外部廠商導入 AI 推薦模型，重新梳理雙邊配對流程並促成系統正式上線。",
    themeColor: "#6366f1",
    bgPill: "#e0e7ff",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "大型國際 B2B 展會中，參展商與買家難以在海量名單中快速找到真正精準的合作夥伴。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "傳統人工比對耗時費力且配對命中率低，缺乏即時動態推薦機制。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "從第一線營運觀察發現，供需雙方的標籤維度定義不一，是導致配對失準的根本原因。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "發掘問題、主導異業廠商洽談，負責需求規格定義與雙邊使用者的 UX 互動流程規劃。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "梳理買賣雙方需求屬性，定義推薦特徵權重邏輯，重新設計直覺的雙向確認配對流程。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "居中協調外部工程團隊與內部展務營運同仁，對齊系統功能與商業上線時程。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "AI 媒合系統正式上線並導入實際展會，有效提升買賣雙方預約媒合的互動轉換率。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "AI 專案落地的核心在於商業流程的重構，技術演算法必須精準服務現場使用場景。"
      }
    ]
  },
  {
    id: "case-03-bpr-sop",
    title: "展務營運自動化與流程 SOP 重構",
    subtitle: "流程轉型 BPR",
    badges: ["流程重構 (BPR)", "自動化資料流", "年省 1,000+ 小時"],
    summary: "診斷跨部門展務行政作業斷點，導入自動化工具重構資料流與標準作業機制，年省逾千小時高重複工時。",
    themeColor: "#059669",
    bgPill: "#d1fae5",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "展會籌備期涉及大量參展商資格審核、繳件追蹤與名冊整理，長期重度依賴人工登打。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "跨組別反覆搬移資料導致錯誤率高，行政流程成為展務推動的最大產能瓶頸。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "盤點端到端作業節點，發現 60% 人力耗損在手動跨平台比對與重複通知。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "主導行政流程盤點，評估並導入自動化資料流工具，重建跨組標準作業程序 (SOP)。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "建立跨表單自動同步機制，設置例外自動警示與排程通知規則，取代人工反覆核算。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與第一線團隊密切溝通作業習慣，主持內部操作培訓，順利推動組織變更管理。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "每年為團隊節省超過 1,000 小時重複行政時數，顯著消弭資料手動疏漏。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "數位轉型不盲目追求大型系統，先理順作業動線、消弭斷點，才是自動化創造真實價值的關鍵。"
      }
    ]
  },
  {
    id: "case-04-pos-dashboard",
    title: "餐飲 AI 銷量預測 POS 決策儀表板",
    subtitle: "數據產品轉譯",
    badges: ["20+ 場需求訪談", "數據特徵化", "多角色 Dashboard"],
    summary: "深入執行 20+ 場第一線訪談，將門市營運經驗轉化為數據特徵，規劃總部與門市雙層決策儀表板。",
    themeColor: "#d97706",
    bgPill: "#fef3c7",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "參與餐飲零售業 AI 銷量預測研究專案，需將預測模型轉化為店長每日可執行的備料指引。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "複雜的統計圖表與演算法數值對門市人員門檻過高，無法有效輔助即時決策。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "執行 20+ 場門市深度訪談，發現店長真正需要的是「具體訂貨建議量」而非「統計機率分佈」。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "負責訪綱設計、現場深度訪談、將業務直覺轉譯為資料特徵，並規劃介面資訊架構。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "切分「總部宏觀策略」與「門市每日操作」兩種視圖，設計直覺視覺化的決策儀表板。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與資料科學家及軟體開發團隊對齊指標演算法，確保前端呈現精準反映模型輸出。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "完成兩套角色的介面原型與驗收驗證，建立從使用者真實需求到資料產品設計的標準方法。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "資料產品的重點在於「決策轉譯」，先釐清使用者在特定情境要做出什麼決定，再給予精確資訊。"
      }
    ]
  },
  {
    id: "case-05-my-trail",
    title: "MY TRAIL：數位個人知識庫與自建實驗站",
    subtitle: "系統建構與自驅探索",
    badges: ["自建個人系統", "前端網頁架構", "AI 協同開發", "知識管理"],
    summary: "從知識管理與數位沈澱痛點出發，自主以 HTML/CSS/JS 與現代工具鏈架設數位花園，實踐由下而上的自驅交付。",
    themeColor: "#4f46e5",
    bgPill: "#e0e7ff",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "跨領域學習希望自己能實踐從設計端跨域工程端，並以個人數位空間為題紀錄各專案實踐過程。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "純自然語言AI架站工具技術尚難以靈活客製呈現與更加感性的內容。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "梳理個人閱讀與整理習慣，確認核心需求為「極簡載入體驗」、「清晰的模組化資訊架構」與「完全由自己掌握的程式碼底層」。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "全端獨立負責：涵蓋站點資訊架構、UI/UX 介面設計、前端程式撰寫與 GitHub Pages 雲端部署。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "採用語意化 HTML5、現代 CSS Grid 與純 JavaScript，並善用 AI 協同開發（Vibe Coding）快速除錯與迭代，搭建響應式 (RWD) 版本。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "實踐「人機協同」開發工作流，將 AI 工具作為個人專屬技術顧問，主導規格定義、邊界測試與程式碼審查。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "成功完成獨立站點部署，建立可長期維護的數位展間，並實證非工程背景亦能透過自驅學習完成系統性交付。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "自己動手寫程式不是為了成為純工程師，而是為了深刻理解技術邊界與開發邏輯，進而在產品專案中與工程團隊更有效率地對話。"
      }
    ]
  }
];

// =========================================================
// 區塊 04｜更多專案與探索 (Additional Projects & Explorations)
// =========================================================
export const auxiliaryCases = [
  {
    title: "工商時報 APP 閱讀體驗與資訊架構重構",
    category: "資訊架構 (IA) • 排版規範",
    description: "以資訊架構優化改善大量財經新聞閱讀與導覽流程，重塑要聞與深度專題層級，提升行動端閱讀流暢度。"
  },
  {
    title: "台北捷運 GO APP 體驗優化",
    category: "黑客松敏捷提案 • 流程原型",
    description: "聚焦大眾運輸即時動態與特定情境優化操作路徑，以 Figma 快速繪製 Wireframe 與可點擊 Prototype 驗證概念。"
  },
  {
    title: "Bean There 跑咖趣 APP",
    category: "需求規劃 • Figma Design System",
    description: "風格咖啡廳探索產品概念規劃與 UI/UX 原型設計，建立整組 Figma Component 元件庫與工作友善篩選模型。"
  },
  {
    title: "美而美品牌形象重塑",
    category: "商業視覺溝通 • CIS 規範",
    description: "老字號商業品牌視覺識別與現代溝通系統設計，製作標準 CI 規範手冊與包裝實體 Mockup。"
  }
];

// =========================================================
// 區塊 02｜核心能力與工作方法 (Core Competencies)
// =========================================================
export const capabilities = [
  {
    step: "01",
    phase: "需求探索 (Discover)",
    lead: "深入現場探索真實痛點，梳理跨角色認知差距。",
    points: [
      "使用者深度訪談",
      "跨角色痛點梳理",
      "業務作業斷點診斷"
    ]
  },
  {
    step: "02",
    phase: "規格定義 (Define)",
    lead: "將模糊需求轉化為結構化規格與直覺互動路徑。",
    points: [
      "撰寫 PRD / User Story",
      "規劃資訊架構 (IA) 與 User Flow",
      "定義驗收標準"
    ]
  },
  {
    step: "03",
    phase: "跨界連結 (Connect)",
    lead: "對齊商務、技術與合規邊界，建立團隊高信任共識。",
    points: [
      "商業語言轉譯技術規格",
      "資安制度推進 (ISO 27001)",
      "跨部門共識對齊"
    ]
  },
  {
    step: "04",
    phase: "交付落地 (Deliver)",
    lead: "以敏捷驗證迅速試錯，固化為標準作業產出實際人效。",
    points: [
      "MVP 輕量驗證",
      "自動化腳本與 AI 工具導入",
      "驗收測試 (UAT) 與 SOP 固化"
    ]
  }
];

// =========================================================
// 區塊 05｜職涯歷練主線 (Experience)
// =========================================================
export const careerExperiences = [
  {
    role: "展會營運企劃專員",
    company: "台北市電腦商業同業公會",
    period: "2023 - 迄今",
    tag: "策展營運 • 流程重構",
    highlights: "B2B 商業開發 (貢獻 70% 新客)、流程自動化重構 (年省千小時)、推動 AI 媒合專案上線。"
  },
  {
    role: "專案管理師",
    company: "教育部國民及學前教育署",
    period: "2020 - 2023",
    tag: "制度風控 • 政策推進",
    highlights: "主導新政策可行性評估與預算編列、高壓利害關係人與決策幕僚、推進 ISO 27001 資安制度合規。"
  },
  {
    role: "專案管理與使用者研究",
    company: "財團法人資訊工業策進會 (資策會)",
    period: "2019",
    tag: "需求訪談 • 數據產品",
    highlights: "執行 20+ 場第一線深度需求訪談、AI 銷量預測 Dashboard 與智慧觀光 APP 功能測試。"
  }
];

// =========================================================
// 重點進修與認證 (緊湊膠囊標籤)
// =========================================================
export const credentialBadges = [
  "國立臺灣大學 管理碩士學分班",
  "經濟部 iPAS AI 應用規劃師",
  "台灣人工智慧學校 AIPM 經理人班",
  "UI/UX 實作與資訊架構工作坊",
  "Python 程式設計基礎"
];
