# 框架介紹與 Express.js 框架
### Client server model
- Client: 發送請求
- Server: 接收請求，回傳資料
- HTTP: HyperText Transfer Protocol 超文本傳輸協定 (傳輸資料的規則) -> 應用層協定
  - Request: 請求 
  - Response: 回應

### Web server 
#### Static web server 靜態網頁伺服器
- 只回傳靜態檔案
- 資源是預先準備好的，不會因為使用者的請求而改變

#### Dynamic web server 動態網頁伺服器 (Application server)
- Static web server + web application + database
- 會根據使用者的請求，動態產生回應
- 透過程式語言與資料庫來產生回應

#### Web 1.0
- 提供單向資訊的網站
- 由網站提供者提供資訊，使用者只能閱讀
- 例如: 郵局網站、政府網站

#### Web 2.0 (強調互動與溝通)
- 提供雙向資訊的網站
- 使用者可以提供資訊，與網站提供者互動
- 例如: 社群網站、部落格

# 框架 (Express.js)
- Express.js 是一個 Node.js 的 Web 應用程式框架
- 透過 Express.js 可以快速建立 Web 伺服器
- Express.js 提供了很多 Web 開發的基本功能，讓開發者可以專注在業務邏輯的開發上
- Express.js 是目前最流行的 Node.js Web 應用程式框架之一

### npm (Node Package Manager)
- Node.js 的套件管理工具
- 透過 npm 可以安裝、管理 Node.js 的套件