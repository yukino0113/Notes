## 軟體品質交付分工
***
#### 如何組織起算落在各專案中的 QA 及資源
- 統一全公司使用框架
- 使用開源框架 ([Pytest](https://docs.pytest.org/en/stable/)+ [Allure](https://allurereport.org/docs/pytest/) +[ Selenium](https://www.selenium.dev/))
- 撰寫使用文件

## 故障演練
***
故障演練目標
- 降低風險
- 提高團隊應變能力
- 驗證應對計劃有效性
- 促進團隊合作及溝通

故障範圍
- 應用層
- 硬體
- 網路層
- 系統相依性 （測試重點）

測試系統相依性
- 內部依賴：讀寫系統
- 外部依賴：銀行身份驗證、第三方支付
- 同步依賴：需等待 Response 立即處理
- 非同步依賴：不需等待 Response，如簡訊、通知系統

提到的工具：
- Wiremock
- Nginx
- ToxiProxy
- ChaosToolkit

## PaaS (Platform as a service)
***
#### TQA - 自動化工程師
- ### TQA as a scrum member
	- 跟隨專案，參與專案 Scrum team
	- 負責撰寫專案內部自動化測試項目

- ### TQA as a service provider
	- 獨立運作的組織，負責整體 Automation 架構規劃、實作及維護

#### 平台化
建立統一規格平台，管理 API 文件 (API Editor) 及測資 (Test management system)

- 讓 API、測資文件規格標準化
- 各種文件公開、透明、易於搜尋
- 可直接套用他人建立、儲存的測資，避免同步過程中造成的溝通失誤


`AP ?`

> 有人用的服務 才是好服務
> 符合效益的方法 才是好方法

中台測試敏捷化
***
`PSM1 ?`
四個關鍵字
- 文化認知
- 組織溝通
- 流程策略
- 工具實踐

TaaS (Test as a service)
- Test bed
- Test mock
- `SUT ?`
書籍：高效自動化測試平台 設計與開發實戰
