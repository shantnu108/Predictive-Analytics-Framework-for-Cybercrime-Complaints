# ASTRO · I4C Proactive Cybercrime Mitigation & Cash Withdrawal Prediction Framework

Full-stack project separated into two dedicated directories:
- **`backend/`** — **Node.js + Express** REST API server (`server.js`, controllers, routes, and I4C telemetry engine on port `5000`)
- **`frontend/`** — **NPM + Vite** web application (`index.html`, `/src/style.css`, `/src/main.js`, `/src/api.js` on port `5173`)

Developer: **[@shantnu108](https://github.com/shantnu108)**

---

## Project Folder Structure

```text
i4c-cybercrime-astro-framework/
├── backend/                          # Node.js + Express REST API Server
│   ├── controllers/
│   │   ├── analyticsController.js    # Metrics, ARIMA+NN forecast, India NCRB states, CSV eval
│   │   ├── cashoutController.js      # ATM cashout hotspots & LEA/Bank intervention dispatch
│   │   └── predictionController.js   # Complaint NLP classifier + spatial cashout predictor
│   ├── data/
│   │   └── seedData.js               # I4C state ATM clusters, confusion matrix & NCRB series
│   ├── routes/
│   │   └── api.js                    # Express router (/api/health, /api/predict, etc.)
│   ├── .env.example                  # Port & environment variables
│   ├── package.json                  # Node.js dependencies (express, cors, dotenv, multer)
│   ├── README.md                     # Backend documentation
│   └── server.js                     # Main Node.js entry point (Port 5000)
│
├── frontend/                         # NPM + Vite Frontend Application
│   ├── src/
│   │   ├── api.js                    # REST client wrapper for Node.js backend (:5000/api)
│   │   ├── main.js                   # Interactive 6-module UI controller & Chart.js telemetry
│   │   └── style.css                 # ASTRO luxury cosmic theme & signature cross-page effects
│   ├── index.html                    # Main application shell with Home & Contact Dev header
│   ├── package.json                  # NPM scripts (npm run dev, npm run build, npm start)
│   ├── README.md                     # Frontend documentation
│   └── vite.config.js                # Vite config with /api proxy to http://localhost:5000
│
└── README.md                         # Full-stack setup guide
```

---

## How to Run

### Quick Start (Both Backend & Frontend)

**Windows:**
```bash
start-all.bat
```

**Linux/Mac:**
```bash
./start-all.sh
```

This will start both the backend and frontend in separate terminal windows automatically.

### Manual Start

#### 1. Start the Node.js Backend (`backend/`)
Open a terminal and run:
```bash
cd backend
npm install
npm start
```
The Node.js API server will start at **`http://localhost:5000`** (`GET http://localhost:5000/api/health`).

#### 2. Start the NPM Frontend (`frontend/`)
Open a second terminal and run:
```bash
cd frontend
npm install
npm run dev
```
The Vite frontend will launch at **`http://localhost:5173`** and automatically connect to the Node.js backend at port `5000`.
