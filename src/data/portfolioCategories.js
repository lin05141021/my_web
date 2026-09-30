// =========================================================
// 代表專案與落地成果 (Featured Case Studies - 5 項結構化拆解)
// =========================================================
export const flagshipCases = [
  {
    id: "case-03-musimate",
    title: "MusiMate 音樂教學管理（Low-Friction Studio OS）",
    subtitle: "以 LINE LIFF 為載體的低摩擦營運系統，化解教學者的行政摩擦與人情卡點",
    badges: ["0到1產品規劃", "需求規格 PRD", "Human-in-the-loop"],
    documentLabel: "查看完整規格簡報 (PDF)",
    pdfUrl: "https://drive.google.com/file/d/10Nfr4lOSpch7CxEVjJAjA8EbaiHoIln2/preview",
    summary: "以降低三方摩擦為核心，將音樂教師的排課、通知、課後紀錄與收帳流程收斂在熟悉的 LINE LIFF 生態圈。",
    themeColor: "#0284c7",
    bgPill: "#e0f2fe",
    breakdown: [
      {
        step: "01",
        label: "01 CONTEXT",
        content: "音樂教師多以 LINE 與家長聯繫；調查顯示，98.2% 的受訪者仰賴 LINE 溝通排課。教師必須在零碎課後時間處理調課、行事曆與收款等行政工作。"
      },
      {
        step: "02",
        label: "02 PROBLEM",
        content: "排課與課務資訊散落在對話中，容易增加確認與追蹤成本；家長無法掌握課堂進度而反覆詢問，教師也常因人情壓力難以清楚執行請假與取消規則。"
      },
      {
        step: "03",
        label: "03 DISCOVERY",
        content: "核心問題不是再增加一個管理工具，而是降低教師、家長與學生之間的溝通摩擦。產品應沿用使用者熟悉的 LINE 入口，讓課務管理自然融入既有互動。"
      },
      {
        step: "04",
        label: "04 MY ROLE",
        content: "主導問題定義與產品規劃，執行 55 份問卷與訪談、整理 PRD，並參與 C 端 LINE LIFF 介面實作；及 B 端的 UI 設計優化。"
      },
      {
        step: "05",
        label: "05 SOLUTION",
        content: [
          "以訪談統點收斂 MVP：優先針對智慧排課、通知、對帳、課後週報與防放鳥機制；社群及AI辨識技術上卡關的打卡先排除於首版範圍。",
          "收款流程採家長上傳轉帳截圖， GPT-4o 辨識，並HITL讓家長核對，取代承擔高成本金流串接。"
        ]
      },
      {
        step: "06",
        label: "06 COLLABORATION",
        content: "共8週協作過程，透過 GitHub 分支管理共同開發；與工程夥伴對齊 API 規範，讓介面由前端展示逐步接上真實資料庫與服務流程。"
      },
      {
        step: "07",
        label: "07 OUTCOME",
        content: "在 8 週內完成可實際操作的 MVP，串接 B 端與 C 端主要流程，涵蓋 LIFF 排程、資料庫通知及 GPT-4o 課後摘要，並邀請音樂教師參與測試驗證。目前產品仍處於 MVP 適用性測試階段，尚未正式行銷對外上線。"
      },
      {
        step: "08",
        label: "08 REFLECTION",
        content: "好的產品不必要求使用者改變習慣，而是把必要的管理流程放進熟悉的使用情境；清楚的規則與適度自動化，能減少溝通耗損，也守住彼此的信任。"
      }
    ]
  },
  {
    id: "case-02-bizsonar",
    title: "BizsonarAI 智慧媒合系統（AI Matchmaking MVP）",
    subtitle: "從展會雙邊資訊落差出發，定義演算法媒合機制並催生首版商用產品。",
    badges: ["商業痛點定義", "AI 規格規劃", "商用產品 0 到 1"],
    documentLabel: "查看專案簡報 (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1i5iomNDtF3eVgYloXpbfBkOs060tKUNL/preview",
    summary: "從展會現場的雙邊資訊斷層出發，定義 AI 媒合規格並協同外部工程團隊落地驗證。",
    themeColor: "#6366f1",
    bgPill: "#e0e7ff",
    breakdown: [
      {
        step: "01",
        label: "01 CONTEXT",
        content: "大型展會匯聚 550+ 家廠商與 14 萬人次參觀者，傳統依靠 7 人大會團隊人工引導或買主隨機盲尋，媒合效益極低。"
      },
      {
        step: "02",
        label: "02 PROBLEM",
        content: "雙邊資訊嚴重斷層——大會不夠了解廠商方案，買主走馬看花，展商找不到對口，大會失去媒合價值。"
      },
      {
        step: "03",
        label: "03 DISCOVERY",
        content: "借鑒平台策略思維，意識到客製化解決方案無法靠固定表單過濾，唯有透過語意理解（AI）才能彈性比對需求。"
      },
      {
        step: "04",
        label: "04 MY ROLE",
        content: "主動發起專案並提出 AI 媒合構想；擔任大會與外部工程團隊轉譯者，定義功能規格與現場 UX 流程；協調展商參與測試。"
      },
      {
        step: "05",
        label: "05 SOLUTION",
        content: "建立「語意化需求輸入 → AI 關聯性權重計算 → 雙向推薦」機制，將龐雜的人工作業轉為系統輔助推薦。"
      },
      {
        step: "06",
        label: "06 COLLABORATION",
        content: "向工程團隊精確同步大會現場的動線與法規限制；協調參展商配合資料建檔，確保系統能在展期前順利驗證。"
      },
      {
        step: "07",
        label: "07 OUTCOME",
        content: "於 2026 年 3 月智慧城市展 AI 專區正式落地驗證；大幅縮短精準合作夥伴的搜尋時間（由參展工程團隊第一手驗證），展後該系統由技術方持續迭代至其他活動中。"
      },
      {
        step: "08",
        label: "08 REFLECTION",
        content: "AI 的起點不是演算法有多炫，而是現場有沒有一個「因為太複雜、太依賴人力而長期被放棄」的真實問題。"
      }
    ]
  },
  {
    id: "case-01-bpr-sop",
    title: "展務流程重構與自動化（Exhibition Operations BPR）",
    subtitle: "重新梳理跨部門資訊流，以自動化工具取代高耗損人工作業",
    badges: ["BPR 業務流程重組", "內部流程自動化", "年省千小時工時"],
    documentLabel: "查看重組架構簡報 (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Xw5d-Ey5Ej8hPjAvn4CwwvmGLSGOJhnC/preview",
    summary: "以單一真實數據源重整展務資訊流，降低跨部門溝通耗損，年節省 1,000+ 小時行政工時。",
    themeColor: "#059669",
    bgPill: "#d1fae5",
    breakdown: [
      {
        step: "01",
        label: "01 CONTEXT",
        content: "大型國際展會需接待 170 團重要外賓與各部會首長，行政高度依賴紙本、多版本試算表與口頭交代。"
      },
      {
        step: "02",
        label: "02 PROBLEM",
        content: "資訊多頭管理導致大量重複人工確認與謄寫，行程變動時容易出錯，且高度依賴個人經驗，新人難以傳承。"
      },
      {
        step: "03",
        label: "03 DISCOVERY",
        content: "痛點並非人手不足，而是「缺乏單一真實數據源」，導致團隊大量精力消耗在無效的跨部門溝通上。"
      },
      {
        step: "04",
        label: "04 MY ROLE",
        content: "主導痛點梳理、工作流重組、評估導入雲端自動化工具、制定 SOP，並帶領 3 位新進同仁無痛接手。"
      },
      {
        step: "05",
        label: "05 SOLUTION",
        content: "建立統一雲端協作樞紐，設定行程變更自動觸發通知，並將繁複規定精簡為第一線圖解檢核表。"
      },
      {
        step: "06",
        label: "06 COLLABORATION",
        content: "先以小規模動線試行讓團隊看見省力效益，化解第一線抗拒；透過耐心陪伴與逐步調整完成落地。"
      },
      {
        step: "07",
        label: "07 OUTCOME",
        content: "每年節省 1,000+ 小時跨組行政耗損，行程失誤歸零，新進同仁能快速獨立接軌業務。"
      },
      {
        step: "08",
        label: "08 REFLECTION",
        content: "數位轉型的本質不是換工具，而是重新釐清事情為何這樣做，並用系統將繁複耗損接管下來。"
      }
    ]
  },
  {
    id: "case-04-my-trail",
    title: "Case 04｜MY TRAIL 數位空間（MY TRAIL: Digital Garden）",
    subtitle: "擺脫傳統履歷框架，從資訊架構到前端實作打造的個人思考展間",
    badges: ["資訊架構 IA", "前端開發實作", "AI 輔助工作流"],
    summary: "從資訊架構、內容文案到前端部署，打造一個用來展示個人思考脈絡與實作能力的數位展間。",
    themeColor: "#4f46e5",
    bgPill: "#e0e7ff",
    breakdown: [
      {
        step: "01",
        label: "01 CONTEXT",
        content: "起初為了練習前端開發與換位理解工程思維，選擇以個人作品為題；但在製作過程中發現自己真正想梳理的，是一路影響思考的脈絡。"
      },
      {
        step: "02",
        label: "02 PROBLEM",
        content: "傳統履歷只能羅列職稱與成果，容易將跨領域經驗割裂，無法完整呈現一個人「如何思考、如何理解問題」的底層脈絡。"
      },
      {
        step: "03",
        label: "03 DISCOVERY",
        content: "刻意排除制式的學經歷與職稱標籤，將網站從一般的 Portfolio 作品集，重新定義為「個人數位展間」。"
      },
      {
        step: "04",
        label: "04 MY ROLE",
        content: "完全自主獨立完成——負責網站定位、資訊架構 (IA)、UX/UI 視覺、內容文案，到 HTML/CSS 前端實作與部署；AI 擔任除錯與加速協作者。"
      },
      {
        step: "05",
        label: "05 SOLUTION",
        content: "將原本常見的「作品卡片列表」改造成「主題式展間」，以 WHAT SHAPED ME、Understand Before Solve 等維度，呈現思考如何形成。"
      },
      {
        step: "06",
        label: "06 COLLABORATION",
        content: "以「AI-native workflow」推進開發——由我主導體驗設計與架構判斷，AI 協助生成程式碼片段與跨瀏覽器排版除錯。"
      },
      {
        step: "07",
        label: "07 OUTCOME",
        content: "完成一個可獨立運作、持續更新沉澱的個人數位空間，兼具程式實作與深度思維展示。"
      },
      {
        step: "08",
        label: "08 REFLECTION",
        content: "打造網站如同做產品——不是把想說的話全塞進去，而是先決定訪客需要透過什麼樣的路徑，來理解這個空間。"
      }
    ]
  },
  {
    id: "case-05-ai-demand-forecasting",
    title: "餐飲門市銷量預測與 POS Dashboard",
    subtitle: "將第一線營運直覺轉化為模型特徵欄位，跨層級打造數據輔助儀表板。",
    badges: ["數據特徵轉譯", "POS 系統數據", "決策儀表板設計"],
    documentLabel: "查看分析成果 (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1RuIMFFgOYPnNcTrUVpkQ8AsmfNSQhcfd/preview",
    summary: "從門市與總部的不同決策情境出發，將質性需求轉化為資料欄位與分級儀表板原型。",
    themeColor: "#d97706",
    bgPill: "#fef3c7",
    breakdown: [
      {
        step: "01",
        label: "01 CONTEXT",
        content: "於法人研究機構實習期間，參與大型連鎖餐飲集團之數位轉型專案，探索以 AI 模型協助門市備料與庫存預測的可行性。"
      },
      {
        step: "02",
        label: "02 PROBLEM",
        content: "門市備料高度依賴店長直覺經驗，陷入「備多易過期報廢、備少恐斷貨流失顧客」的兩難；總部統籌原物料調度，亦面臨叫貨不及時的斷貨風險。"
      },
      {
        step: "03",
        label: "03 DISCOVERY",
        content: "訪談發現「門市店長」與「總部管理層」的決策維度截然不同——店長需要即時的行動預警（如結合天氣的備料提醒）；總部則需要掌握跨店物料流速與宏觀趨勢。"
      },
      {
        step: "04",
        label: "04 MY ROLE",
        content: "主導設計第一線訪談大綱並參與門市店長訪談；負責將質性需求梳理為系統資料欄位，規劃初步資訊架構（IA）與儀表板原型，隨後與資深設計師協作優化並向業主提案。"
      },
      {
        step: "05",
        label: "05 SOLUTION",
        content: "設計分層輔助決策儀表板——門市端整合氣溫變數與即時庫存，提供彈性時差的備料提醒；總部端建立跨店銷量排行與安全水位分佈，輔助物料統籌排程。"
      },
      {
        step: "06",
        label: "06 COLLABORATION",
        content: "與單位內 AI 工程師對齊模型所需之決策特徵欄位；與資深設計師密切共編，在易讀性與圖表視覺階層上完成多輪迭代。"
      },
      {
        step: "07",
        label: "07 OUTCOME",
        content: "完成從現場調研、決策邏輯收斂到分級儀表板原型設計，順利通過業主提案驗收，後續由工程單位正式接手開發上線。"
      },
      {
        step: "08",
        label: "08 REFLECTION",
        content: "AI 產品的價值不在於展示算力多強，而在於能否準確命中現場決策的關鍵時刻；儀表板上的數字必須對齊使用者的權責邊界，才能真正輔助行動。"
      }
    ]
  },
  {
    id: "case-06-taipei-metro-go",
    title: "台北捷運 GO 服務流程重整（黑客松競賽企劃）",
    subtitle: "在高壓時限內重整乘客動線痛點，產出商業策略與端到端完整企劃書。",
    badges: ["黑客松提案", "服務流程設計", "完整商業企劃書"],
    documentLabel: "查看完整企劃書 (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1NDxT6rQy7B9hhRlOz2Shc9DZ2-2Ws8cg/preview",
    summary: "從電梯使用者的無障礙動線出發，同時以出口景點資訊拓展台北捷運 GO App 的使用情境。",
    themeColor: "#0f766e",
    bgPill: "#ccfbf1",
    breakdown: [
      { step: "01", label: "01 CONTEXT", content: "參與 2023 年台北捷運 GO App 優化 UI/UX 設計競賽，與夥伴共同發想如何讓 App 回應更多元的乘車需求，並拓展日常使用情境。" },
      { step: "02", label: "02 PROBLEM", content: "需要搭乘電梯的乘客，進出捷運站約需一般乘客三倍時間；對行動不便者而言，繞行、尋找指標或在閘門口停下確認方向，都會增加移動負擔。另一方面，列車班距約三分鐘，多數乘客不會為了查班次而特地開啟 App，日常使用理由有限。" },
      { step: "03", label: "03 DISCOVERY", content: "問題不只在於提供路線資訊，而是讓不同移動能力的乘客都能更順暢完成進出站；同時，若 App 只服務搭車當下的查詢需求，就難以吸引非必要查詢的乘客持續使用。" },
      { step: "04", label: "04 MY ROLE", content: "主要負責服務流程設計與 Wireframe，將無障礙搭乘情境與拓展 App 使用情境的構想整理為操作流程及介面草圖。" },
      { step: "05", label: "05 SOLUTION", content: "規劃以最短距離為優先的電梯搭乘路線，減少繞行、找指標及停留確認方向的情況；另提出推薦出口周邊景點資訊，讓 App 不只提供乘車查詢，也能支援目的地探索。" },
      { step: "06", label: "06 COLLABORATION", content: "與競賽夥伴共同發想服務方向，並由我負責把討論內容轉化為流程設計與 Wireframe，讓無障礙動線及出口資訊構想能在介面中具體呈現。" },
      { step: "07", label: "07 OUTCOME", content: "完成台北捷運 GO App 優化競賽提案的服務流程與 Wireframe，涵蓋電梯使用者的最短路線規劃及出口周邊景點資訊構想；本案未取得或未記錄競賽名次與量化成效。" },
      { step: "08", label: "08 REFLECTION", content: "交通是生活的一部分。App 不應只在搭車當下提供資訊，更應融入日常，協助人們事先規劃行程，並將沿途與目的地的探索自然納入移動體驗。" }
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
    phase: "UNDERSTAND",
    lead: "先理解問題，從現場與使用者找出真正需求。",
    points: [
      "20+ 使用者訪談",
      "第一線流程觀察",
      "展會痛點梳理"
    ]
  },
  {
    step: "02",
    phase: "DEFINE",
    lead: "把模糊需求整理成可以被執行的方向。",
    points: [
      "MVP 優先級",
      "User Flow",
      "流程與 SOP 重構"
    ]
  },
  {
    step: "03",
    phase: "CONNECT",
    lead: "串連不同角色，讓需求能被理解、討論與實現。",
    points: [
      "Business × Design × Engineering",
      "工程協作",
      "技術供應商"
    ]
  },
  {
    step: "04",
    phase: "DELIVER",
    lead: "不只提出想法，而是推進到實際落地。",
    points: [
      "AI 媒合系統上線",
      "MVP 開發",
      "流程自動化",
      "年度節省 1,000+ 小時"
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
