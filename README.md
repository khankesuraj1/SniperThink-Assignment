# 🚀 SniperThink – SaaS Landing Page

SniperThink is a responsive, modern SaaS landing page built using **Vite + React + Tailwind CSS** on the frontend and **Node.js + Express** on the backend. It simulates a real-world business automation platform for micro and small businesses.

> 🧩 Full-stack assignment showcasing intermediate skills in frontend UI, backend API creation, form validation, and deployment.

---


## 📸 Screenshots

> Coming soon... *(or upload images and embed with markdown)*

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🎯 Responsive UI & clean component structure

### Backend
- 🔧 Node.js + Express
- 📄 JSON files for data source

---

## 📁 Folder Structure

sniperthink/
├── client/ # Frontend - React + Tailwind
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── sections/ # Hero, Features, Pricing, Contact
│ ├── App.jsx
│ └── main.jsx
│
├── server/ # Backend - Node + Express
│ ├── data/ # JSON files for slides, features, pricing
│ ├── routes/ # API routes
│ ├── controllers/ # POST /api/contact handler
│ └── index.js # Express app
└── README.md     


---

## 📦 Backend API Endpoints

| Endpoint           | Method | Description                          |
|--------------------|--------|--------------------------------------|
| `/api/slides`      | GET    | Returns hero carousel slide data     |
| `/api/features`    | GET    | Returns list of platform features    |
| `/api/pricing`     | GET    | Returns available pricing plans      |
| `/api/contact`     | POST   | Accepts contact form submissions     |

---

## 📬 Contact Form Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Excited to try SniperThink!"
}
🧪 Features Implemented
✅ Dynamic Hero Section (via API)

✅ Features, Pricing sections (API-driven)

✅ Validated Contact Form with POST endpoint

✅ Mobile-first responsive UI

✅ Smooth animations and section reveals

✅ Deployed Full Stack (frontend + backend)

📦 Run Locally
1. Clone Repo
git clone https://github.com/YOUR_USERNAME/sniperthink.git
cd sniperthink
2. Install Dependencies
# Backend
cd server
npm install

# Frontend
cd ../client
npm install

3. Start Development Servers
# Backend
cd server
node index.js

# Frontend (in separate terminal)
cd ../client
npm run dev

4. Build Frontend for Production
cd client
npm run build

5. Serve Frontend via Express
Make sure Express serves the client/dist/ folder statically (already configured in index.js).

🚀 Deployment Suggestions
Frontend + Backend on Render (single full-stack app)

Or frontend on Vercel, backend on Render or Railway

👨‍💻 Author
Suraj Khanke
Frontend & Full-Stack Developer
📧 surajkhanke786@gmail.com


