/**
 * I4C Proactive Cybercrime Mitigation & Cash Withdrawal Prediction Framework
 * Node.js + Express Backend Server
 * Developer: @shantnu108 (https://github.com/shantnu108)
 */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use("/api", apiRoutes);

// Root status endpoint
app.get("/", (req, res) => {
  res.json({
    name: "I4C Proactive Cybercrime Mitigation & Cash Withdrawal Prediction Backend (Node.js)",
    status: "running",
    port: PORT,
    endpoints: [
      "GET  /api/health",
      "POST /api/predict",
      "GET  /api/hotspots",
      "POST /api/interventions",
      "GET  /api/metrics",
      "GET  /api/forecast",
      "GET  /api/india-states",
      "POST /api/evaluate-csv"
    ],
    developer: "https://github.com/shantnu108"
  });
});

app.listen(PORT, () => {
  console.log(`====================================================================`);
  console.log(`🚀 I4C Cybercrime Proactive Backend (Node.js) listening on port ${PORT}`);
  console.log(`🔗 Health Check : http://localhost:${PORT}/api/health`);
  console.log(`👤 Developer    : https://github.com/shantnu108`);
  console.log(`====================================================================`);
});
