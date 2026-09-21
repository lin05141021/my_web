// 4 大旗艦精選專案 (8 項結構化深度拆解)
export const flagshipCases = [
  {
    id: "case-01-mvp",
    title: "新 MVP 專案：從想法到跨端驗證",
    subtitle: "旗艦專案",
    badges: ["0→1 產品交付", "LINE LIFF", "敏捷協作"],
    summary: "與後端工程師緊密協作，在有限資源下聚焦核心需求，將使用者痛點快速轉化為可驗證的產品雛形。",
    themeColor: "#0284c7",
    bgPill: "#e0f2fe",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "針對特定場景使用者需求，啟動 0 到 1 的輕量化產品驗證專案。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "開發資源有限下，如何精準切分需求範圍，避免功能過度膨脹？"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "盤點使用者最頻繁的痛點步驟，確認第一版僅解決單一核心任務。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "負責需求定義、User Flow、LINE LIFF 前端介面規格與設計。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "產出具備明確例外狀態 (Edge Cases) 的原型規格，明確定義 API 傳輸欄位。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與工程夥伴對齊，工程端負責 Server/API/DB，我主導 UX 與前端規格驗收。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "順利交付產品雛形並完成內部封測，驗證跨職能產品交付閉環。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "產品交付的關鍵在於主動做好範疇管理 (Scope Management)，先做對比做多更重要。"
      }
    ]
  },
  {
    id: "case-02-bizsonar",
    title: "BizsonarAI 展會智慧媒合系統",
    subtitle: "AI 落地",
    badges: ["AI 媒合", "B2B 平台", "異業廠商合作"],
    summary: "發掘展會資訊不對稱痛點，主動洽談外部廠商導入 AI 媒合模型，重新梳理雙邊使用體驗並順利上線。",
    themeColor: "#6366f1",
    bgPill: "#e0e7ff",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "國際大型展會中，參展商與買家難以在短時間內精準找到匹配夥伴。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "人工比對耗時且成效低，如何以自動化機制提升媒合效率？"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "訪談現場工作人員與展商，發現標籤維度混亂是導致配對失準的主因。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "發掘痛點、主動推進異業洽談，負責需求定義與 UX 流程梳理。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "拆解雙方需求屬性，定義推薦特徵邏輯，重新設計雙向確認的配對流程。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "居中協調外部 AI 演算法團隊與內部展務營運人員。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "AI 媒合系統成功上線並實際應用於展會，顯著提升媒合互動轉換率。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "AI 專案成敗不在於演算法有多炫，而在於是否精準契合真實商業作業流程。"
      }
    ]
  },
  {
    id: "case-03-bpr-sop",
    title: "展務營運自動化與流程 SOP 重構",
    subtitle: "流程轉型",
    badges: ["流程重構 (BPR)", "自動化工具", "年省 1,000+ 小時"],
    summary: "診斷跨部門行政與展務作業斷點，導入自動化資料流與重建 SOP，釋放團隊大量重複性工時。",
    themeColor: "#059669",
    bgPill: "#d1fae5",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "大型展會籌備期涉及海量報名、資格審查與名冊整理，長期高度依賴人工操作。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "跨部門手動重複輸入資料，容易產生錯誤且造成嚴重加班斷點。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "完整盤點行政動線，發現高達 60% 的工時消耗在跨系統搬移資料。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "主導流程盤點、規劃自動化工具導入，主筆重構標準作業流程 (SOP)。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "建立自動化資料串接機制，設置自動校驗與通知規則，取代人工反覆核對。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與第一線營運成員召開對齊會議，進行變更管理培訓，確保制度落地。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "每年為團隊節省逾 1,000 小時高重複工時，大幅降低資料錯誤率。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "數位轉型不需要一開始就花大錢買巨型系統，先理順流程才是自動化的基石。"
      }
    ]
  },
  {
    id: "case-04-pos-dashboard",
    title: "餐飲 AI 銷量預測 POS 決策儀表板",
    subtitle: "數據產品",
    badges: ["20+ 場訪談", "數據特徵化", "Dashboard 設計"],
    summary: "執行逾 20 場深度訪談，將門市第一線直覺轉譯為資料特徵，打造多角色營運決策儀表板。",
    themeColor: "#d97706",
    bgPill: "#fef3c7",
    breakdown: [
      {
        step: "01",
        label: "背景 (Context)",
        content: "餐飲零售業導入 AI 備料與銷量預測模型，需將演算法轉化為門市可用工具。"
      },
      {
        step: "02",
        label: "問題 (Problem)",
        content: "第一線店長看不懂複雜統計模型，無法將預測數據落實為每日備料行動。"
      },
      {
        step: "03",
        label: "發現 (Discovery)",
        content: "主導 20+ 場訪談，發現店長最需要的是「明確的叫貨建議」而非「統計圖表」。"
      },
      {
        step: "04",
        label: "我的角色 (My Role)",
        content: "負責訪綱設計、需求深度訪談、指標拆解與 Dashboard 資訊架構。"
      },
      {
        step: "05",
        label: "解法 (Solution)",
        content: "區分「總部策略層」與「門市執行層」，分別設計直覺的視覺化決策介面。"
      },
      {
        step: "06",
        label: "跨端協作 (Collaboration)",
        content: "與資料科學家及軟體工程師討論指標算法，確保介面反映真實數據。"
      },
      {
        step: "07",
        label: "成果 (Outcome)",
        content: "完成 2 套角色儀表板規劃與驗證，建立使用者需求到資料產品的完整邏輯。"
      },
      {
        step: "08",
        label: "反思 (Reflection)",
        content: "好的資料產品重點在於「降低理解成本」，先問使用者要決定什麼，再給資料。"
      }
    ]
  }
];

// 更多輔助專案 (輕量標籤列表)
export const auxiliaryCases = [
  {
    title: "工商時報 APP 閱讀體驗重構",
    category: "資訊架構 (IA) • 排版規範",
    description: "以資訊架構優化改善大量新聞閱讀情境，重塑要聞與深度專題層級，提升行動端閱讀流暢度。"
  },
  {
    title: "台北捷運 GO APP 體驗優化",
    category: "黑客松敏捷提案 • 流程原型",
    description: "聚焦特殊族群轉乘痛點與日常搭乘情境，以 Figma 快速繪製 Wireframe 與可點擊 Prototype 驗證概念。"
  },
  {
    title: "Bean There 跑咖趣 APP",
    category: "需求規劃 • Figma Design System",
    description: "產品功能定義與 UI/UX 原型設計，建立整組 Figma Component 元件庫與工作友善篩選模型。"
  },
  {
    title: "美而美品牌形象重塑",
    category: "商業視覺溝通 • CIS 規範",
    description: "梳理品牌核心特徵與視覺規範，製作標準 CI 規範文件與包裝實體 Mockup。"
  }
];

// 核心能力矩陣 (What I Can Do - 四步驟工作方法論)
export const capabilities = [
  {
    step: "01",
    phase: "探索 (Discover)",
    lead: "深入第一線場域挖掘真問題，梳理跨角色認知差距。",
    points: [
      "深度訪談與使用者田野觀察",
      "跨角色痛點梳理與需求收斂",
      "業務流程斷點診斷與卡點識別"
    ]
  },
  {
    step: "02",
    phase: "定義 (Define)",
    lead: "將模糊需求轉化為結構化規格與直覺互動路徑。",
    points: [
      "撰寫 PRD / User Story 規格",
      "規劃系統資訊架構 (IA) 與 User Flow",
      "設定驗收指標 (KPI / 驗收條件)"
    ]
  },
  {
    step: "03",
    phase: "連結 (Connect)",
    lead: "對齊商務、技術與合規邊界，建立團隊高信任共識。",
    points: [
      "將商業需求轉譯為技術規格",
      "跨部門共識對齊與變更管理",
      "資安合規制度推進 (ISO 27001 經驗)"
    ]
  },
  {
    step: "04",
    phase: "交付 (Deliver)",
    lead: "以敏捷驗證迅速試錯，固化為標準作業產出實際人效。",
    points: [
      "MVP 概念驗證與敏捷對接",
      "自動化腳本與 AI 工具導入",
      "驗收測試 (UAT) 與 SOP 固化"
    ]
  }
];

// 職涯歷練主線
export const careerExperiences = [
  {
    role: "展會營運企劃",
    company: "台北市電腦商業同業公會 (TCA)",
    period: "2023 - 迄今",
    tag: "策展營運 • 流程重構",
    highlights: "B2B 商業開發 (貢獻組內 70% 新客戶)、導入 Python 自動化資料流省時千小時、主導 BizsonarAI 展會智慧媒合系統落地。"
  },
  {
    role: "專案管理師",
    company: "教育部國民及學前教育署",
    period: "2020 - 2023",
    tag: "制度風控 • 政策推進",
    highlights: "跨部會新政策推進與預算編列、立法院答詢決策幕僚、資安 ISO 27001 與個資合規制度導入、帶領 15 位同仁熟悉政務。"
  },
  {
    role: "專案實習",
    company: "資策會 (財團法人資訊工業策進會)",
    period: "2019",
    tag: "需求訪談 • 數據產品",
    highlights: "執行 20+ 場第一線深度訪談、餐飲銷量預測 POS Dashboard 規劃、AI 人臉辨識與智慧觀光 APP 功能測試。"
  }
];

// 重點進修與認證
export const credentialBadges = [
  "國立臺灣大學 管理碩士學分班 (管理/行銷/平台策略)",
  "經濟部 iPAS AI 應用規劃師",
  "台灣人工智慧學校 AIPM 經理人班",
  "UI/UX 實作與資訊架構工作坊",
  "Python 程式設計基礎"
];
