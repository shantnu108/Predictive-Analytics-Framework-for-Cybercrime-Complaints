const express = require("express");
const router = express.Router();

const predictionController = require("../controllers/predictionController");
const cashoutController = require("../controllers/cashoutController");
const analyticsController = require("../controllers/analyticsController");

// Healthcheck
router.get("/health", (req, res) => {
  res.json({
    status: "online",
    service: "I4C Proactive Cybercrime & Cashout Prediction Node.js API",
    version: process.env.I4C_MODEL_VERSION || "2.4.0-ASTRO",
    developer: "https://github.com/shantnu108",
    timestamp: new Date().toISOString()
  });
});

// 1. Complaint + Cashout Location Prediction
router.post("/predict", predictionController.predictComplaintAndCashout);

// 2. Cash Withdrawal Hotspots & Proactive LEA/Bank Interventions
router.get("/hotspots", cashoutController.getHotspots);
router.post("/interventions", cashoutController.createIntervention);

// 3. Model Metrics, Forecast, India State-Wise NCRB Series, and CSV Evaluation
router.get("/metrics", analyticsController.getMetrics);
router.get("/forecast", analyticsController.getForecast);
router.get("/india-states", analyticsController.getIndiaStates);
router.post("/evaluate-csv", analyticsController.evaluateCsv);

module.exports = router;
