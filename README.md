# 🚀 EVE Bot Notification (Node.js + TypeScript)

A modular backend service for EVE Online bots, using ESI OAuth2 for authentication. Built with Node.js, TypeScript, and Express. This project handles login, notifications, and character-level automation features via the EVE Swagger Interface (ESI).

---

## 🌐 API Endpoints

### `GET /api/auth/login`
Redirects the user to EVE Online's SSO login page.

### `GET /api/auth/callback`
Handles the redirect from EVE's OAuth2 flow, receives `code` and `state`, and exchanges them for access/refresh tokens.

---

## ⚙️ .env Example

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REDIRECT_URI=https://<your_host>/api/auth/callback
AUTH_ENDPOINT=https://login.eveonline.com/v2/oauth/authorize
ESI_SCOPES=publicData
PORT=3000

