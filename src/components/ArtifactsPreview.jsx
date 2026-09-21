import React, { useState } from 'react';
import { FileText, GitBranch, Terminal, CheckCircle, AlertTriangle, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ArtifactsPreview() {
  const [activeTab, setActiveTab] = useState('prd');

  return (
    <div className="artifacts-preview-container">
      <div className="artifacts-header">
        <div className="artifacts-title-row">
          <span className="mono-badge">[DELIVERABLES & ARTIFACTS]</span>
          <h3 className="artifacts-main-title">專業交付物範本預覽 (脫敏展示)</h3>
        </div>
        <p className="artifacts-subtitle">
          實務工作中真實產出的系統規格書、BPR 流程圖與架構定義。展現零模糊、可落地的工程交付標準。
        </p>
      </div>

      {/* 切換標籤 */}
      <div className="artifacts-tabs">
        <button
          className={`artifact-tab-btn ${activeTab === 'prd' ? 'active' : ''}`}
          onClick={() => setActiveTab('prd')}
        >
          <FileText className="w-4 h-4 mr-2 inline" />
          <span>01. 系統需求規格書 (PRD / Spec)</span>
        </button>
        <button
          className={`artifact-tab-btn ${activeTab === 'bpr' ? 'active' : ''}`}
          onClick={() => setActiveTab('bpr')}
        >
          <GitBranch className="w-4 h-4 mr-2 inline" />
          <span>02. 跨部門 BPR 業務流程泳道圖</span>
        </button>
        <button
          className={`artifact-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          <Terminal className="w-4 h-4 mr-2 inline" />
          <span>03. AI 提示詞架構與邊界約束</span>
        </button>
      </div>

      {/* 交付物內容區域 (Notion / Linear 工藝系統感風格) */}
      <div className="artifact-viewer-card">
        {activeTab === 'prd' && (
          <div className="artifact-content-pane fade-in">
            <div className="pane-file-meta">
              <span className="file-path-badge">docs/specs/PRD_BIZSONAR_MATCHING_ENGINE_v2.4.md</span>
              <span className="mono-status-badge status-green">[STATUS: READY_FOR_DEV]</span>
            </div>

            <div className="prd-mock-document">
              <div className="prd-section">
                <h4>1. 功能背景與使用者故事 (User Story)</h4>
                <div className="story-quote-box">
                  <strong>US-204:</strong> 身為「國際採購買主」，我希望能在 1 分鐘內輸入自然語言需求，以便於「快速獲取具備 ESG 認證與實名參展商的媒合建議名單」，降低現場盲目走訪成本。
                </div>
              </div>

              <div className="prd-section">
                <h4>2. 資料欄位定義與校驗規則 (Field Schema & Validation)</h4>
                <div className="table-responsive">
                  <table className="system-spec-table">
                    <thead>
                      <tr>
                        <th>欄位代碼</th>
                        <th>類型</th>
                        <th>必填</th>
                        <th>業務意義與邊界約束</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>buyer_id</code></td>
                        <td>UUID v4</td>
                        <td><span className="badge-req">必填</span></td>
                        <td>買主唯一識別碼，串接會展報到系統 Token</td>
                      </tr>
                      <tr>
                        <td><code>procurement_intent</code></td>
                        <td>String(20..500)</td>
                        <td><span className="badge-req">必填</span></td>
                        <td>採購意向文字，禁止特殊注入字元，限制最少 20 字</td>
                      </tr>
                      <tr>
                        <td><code>esg_compliance</code></td>
                        <td>Array[String]</td>
                        <td>選填</td>
                        <td>支援 ISO 14064-1、RE100、碳足跡標籤等篩選維度</td>
                      </tr>
                      <tr>
                        <td><code>similarity_threshold</code></td>
                        <td>Float(0.00..1.00)</td>
                        <td>預設 0.75</td>
                        <td>向量檢索餘弦相似度下限，低於閥值自動標記為不確定</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="prd-section">
                <h4>3. 邊界條件與例外處理 (Edge Cases & Exception Handling)</h4>
                <ul className="edge-case-list">
                  <li>
                    <span className="edge-tag">EDGE-01</span>
                    <strong>輸入模糊或無匹配商：</strong>系統不回傳空白頁面，改觸發引導式條件反問（最多 2 次），推薦鄰近產業備選。
                  </li>
                  <li>
                    <span className="edge-tag">EDGE-02</span>
                    <strong>展商配額額滿：</strong>若目標供應商預約已達上限，即時鎖定並觸發排隊機制，發送 Webhook 通報招商組。
                  </li>
                </ul>
              </div>

              <div className="prd-section">
                <h4>4. 驗收標準 (Acceptance Criteria - Gherkin 格式)</h4>
                <div className="code-block-ac">
                  <code>
                    <strong>Scenario:</strong> 買主完成填答並包含 ESG 關鍵字<br/>
                    <strong>Given:</strong> 買主已完成手機驗證且 Session 有效<br/>
                    <strong>When:</strong> 提交採購意向請求至媒合 API<br/>
                    <strong>Then:</strong> 系統於 1,200ms 內回傳 Top 5 推薦供應商清單，且每筆資料皆附帶匹配維度解釋與展位編號。
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bpr' && (
          <div className="artifact-content-pane fade-in">
            <div className="pane-file-meta">
              <span className="file-path-badge">diagrams/bpr/EXHIBITION_DATA_FLOWCHART_SWIMLANE.drawio</span>
              <span className="mono-status-badge status-blue">[ROI: -98% LATENCY / 1000h+ SAVED]</span>
            </div>

            <div className="bpr-comparison-grid">
              {/* As-Is 痛點流程 */}
              <div className="bpr-column as-is-col">
                <div className="bpr-col-header">
                  <span className="state-badge badge-danger">重構前 (As-Is 舊流程)</span>
                  <span className="latency-tag">耗時：3 個工作天 / 批次</span>
                </div>
                <div className="flow-steps-list">
                  <div className="flow-step-node">
                    <div className="step-num">01</div>
                    <div className="step-desc">多個業務同仁分別由 LINE、Email 收取分散之 Excel</div>
                  </div>
                  <div className="flow-connector-down">↓ 格式錯亂、檔名重複</div>
                  <div className="flow-step-node">
                    <div className="step-num">02</div>
                    <div className="step-desc">人工手動逐一開啟、剪貼合併至主工作表 (痛點核心)</div>
                  </div>
                  <div className="flow-connector-down">↓ 人工核對失誤率 12%、耗時 18+ 小時</div>
                  <div className="flow-step-node">
                    <div className="step-num">03</div>
                    <div className="step-desc">主管紙本覆核，若發現欄位錯誤整份打回重跑</div>
                  </div>
                </div>
              </div>

              {/* To-Be 重組後流程 */}
              <div className="bpr-column to-be-col">
                <div className="bpr-col-header">
                  <span className="state-badge badge-success">重構後 (To-Be BPR 標準化)</span>
                  <span className="latency-tag highlight">耗時：30 分鐘 / 批次 (縮短 98%)</span>
                </div>
                <div className="flow-steps-list">
                  <div className="flow-step-node active-node">
                    <div className="step-num">01</div>
                    <div className="step-desc">統一定義前端表單 Schema 與格式強校驗限制</div>
                  </div>
                  <div className="flow-connector-down green">↓ 即時防呆、避免髒資料流入</div>
                  <div className="flow-step-node active-node">
                    <div className="step-num">02</div>
                    <div className="step-desc">Python 自動化清洗腳本定時排程，清洗比對跨表資料</div>
                  </div>
                  <div className="flow-connector-down green">↓ 異常資料自動標記黃色警示，正常資料直入 DB</div>
                  <div className="flow-step-node active-node">
                    <div className="step-num">03</div>
                    <div className="step-desc">自動產出格式化核對清冊，主管於 Dashboard 一鍵簽核</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bpr-roi-summary">
              <div className="roi-pill"><strong>組織效益：</strong>跨部門 10+ 位同仁工作標準化</div>
              <div className="roi-pill"><strong>工時節省：</strong>一年累計消除 1,000+ 小時重複登打</div>
              <div className="roi-pill"><strong>品質提升：</strong>資料重複性錯誤由 12% 降至 0.1%</div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="artifact-content-pane fade-in">
            <div className="pane-file-meta">
              <span className="file-path-badge">ai/prompts/SYSTEM_PROMPT_INTENT_CLASSIFIER_v1.json</span>
              <span className="mono-status-badge status-purple">[METHOD: AI-ASSISTED PROTOTYPING]</span>
            </div>

            <div className="ai-spec-box">
              <div className="prompt-layer-block">
                <span className="layer-title">[LAYER 1: 角色定位與邊界約束 (Role & Safety Guardrails)]</span>
                <p className="prompt-text">
                  你是專為 B2B 國際展會服務之「採購意圖轉譯專家」。你的任務是將非結構化的訪談或買主簡短文字，精準歸納為產業標籤清單。若買主意圖與展會領域無關，必須禮貌婉拒並引導回主軸。
                </p>
              </div>

              <div className="prompt-layer-block">
                <span className="layer-title">[LAYER 2: 強制 JSON 輸出格式 (Strict Schema)]</span>
                <pre className="code-json-snippet">
{`{
  "buyer_intent_category": "Smart_Manufacturing",
  "confidence_score": 0.94,
  "extracted_keywords": ["自動化機械手臂", "產線碳排盤查"],
  "suggested_clarification_question": null
}`}
                </pre>
              </div>

              <div className="prompt-layer-block">
                <span className="layer-title">[LAYER 3: 敏捷原型驗證落地 (Prototyping Strategy)]</span>
                <p className="prompt-text">
                  不依賴漫長手刻後台，利用前後端即時 mock API 串聯驗證，在 3 天內產出具備即時互動能力的 PoC 給業務單位進行雙盲測試，確認匹配準確率達 85% 後方正式編寫 PRD 進開發排程。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
