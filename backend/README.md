# I4C Cybercrime Proactive Framework — Node.js Backend (`backend/`)

This folder contains the **Node.js + Express** REST API server for the I4C Proactive Cybercrime Mitigation & Cash Withdrawal Location Prediction Framework.

## Quick Start

```bash
cd backend
npm install
npm start
```

For hot-reload during development (Node 18+):

```bash
npm run dev
```

The server starts on **`http://localhost:5000`**.

## Available REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check and model telemetry status |
| `POST` | `/api/predict` | Classify cybercrime complaint, compute risk score, and predict Top-3 ATM/bank cash withdrawal hotspots |
| `GET` | `/api/hotspots` | Fetch national & state-wise ATM cash withdrawal hotspots and active LEA/Bank interventions |
| `POST` | `/api/interventions` | Dispatch and log an I4C LEA strike team, Bank/ATM cashout throttle, or NPCI mule freeze |
| `GET` | `/api/metrics` | Retrieve Logistic Regression + Spatial Cashout Predictor metrics & 6×6 confusion matrix |
| `GET` | `/api/forecast` | Retrieve ARIMA + Neural Network (MLP) 6-month cybercrime trajectory |
| `GET` | `/api/india-states` | Retrieve state-wise NCRB historical + 2025/2026 forecast series |
| `POST` | `/api/evaluate-csv` | Evaluate batch complaint CSV payloads for accuracy, F1, and cashout hotspot flagging |
