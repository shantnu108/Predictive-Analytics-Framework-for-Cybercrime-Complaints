/**
 * Seed & Reference Telemetry Data for I4C Proactive Cybercrime Mitigation Backend
 * Author: @shantnu108 (https://github.com/shantnu108)
 */

const MODEL_METRICS = {
  classifier: "Logistic Regression + Spatial Cashout Predictor",
  accuracy: 0.9967,
  macroF1: 0.9968,
  weightedF1: 0.9967,
  testSamples: 600,
  perClass: [
    { category: "Credit/Debit Card Fraud", precision: 1.000, recall: 0.989, f1: 0.994, support: 90 },
    { category: "Cryptocurrency Scam", precision: 0.991, recall: 1.000, f1: 0.996, support: 112 },
    { category: "Identity Theft", precision: 1.000, recall: 1.000, f1: 1.000, support: 89 },
    { category: "Job Fraud", precision: 1.000, recall: 1.000, f1: 1.000, support: 103 },
    { category: "Online Shopping Scam", precision: 0.990, recall: 0.990, f1: 0.990, support: 96 },
    { category: "Phishing / Vishing", precision: 1.000, recall: 1.000, f1: 1.000, support: 110 }
  ],
  confusionMatrix: {
    labels: ["Card", "Crypto", "ID Theft", "Job", "Shopping", "Phishing"],
    matrix: [
      [89, 0, 0, 0, 1, 0],
      [0, 112, 0, 0, 0, 0],
      [0, 0, 89, 0, 0, 0],
      [0, 0, 0, 103, 0, 0],
      [0, 1, 0, 0, 95, 0],
      [0, 0, 0, 0, 0, 110]
    ]
  }
};

const STATE_HOTSPOTS = {
  "Delhi NCR": [
    { rank: 1, zone: "Rohini Sector-7 ATM Cluster", bank: "SBI / HDFC High-Cash Node", distKm: 1.4, prob: 0.91, windowMins: "14–28 mins", lat: 28.716, lng: 77.118, code: "DL-ROH-07" },
    { rank: 2, zone: "Nehru Place Commercial Hub ATMs", bank: "ICICI / Axis Multi-ATM Corridor", distKm: 2.3, prob: 0.84, windowMins: "18–35 mins", lat: 28.549, lng: 77.251, code: "DL-NHP-02" },
    { rank: 3, zone: "Laxmi Nagar Metro Cash Point", bank: "PNB / Kotak Off-Site ATM", distKm: 3.1, prob: 0.76, windowMins: "22–45 mins", lat: 28.631, lng: 77.277, code: "DL-LXN-09" }
  ],
  "Maharashtra": [
    { rank: 1, zone: "Andheri East MIDC ATM Ring", bank: "HDFC / Axis 24x7 Cash Dispenser", distKm: 1.6, prob: 0.89, windowMins: "15–30 mins", lat: 19.119, lng: 72.869, code: "MH-AND-04" },
    { rank: 2, zone: "Thane Station West Banking Corridor", bank: "SBI / Bank of Baroda Cluster", distKm: 2.8, prob: 0.81, windowMins: "20–38 mins", lat: 19.186, lng: 72.975, code: "MH-THN-11" },
    { rank: 3, zone: "Hinjewadi Phase-1 Kiosk Grid", bank: "ICICI / IndusInd ATM Hub", distKm: 3.9, prob: 0.73, windowMins: "25–48 mins", lat: 18.591, lng: 73.738, code: "MH-PUN-06" }
  ],
  "Karnataka": [
    { rank: 1, zone: "Whitefield ITPL Main Road ATM Node", bank: "SBI / HDFC Express Cash Point", distKm: 1.5, prob: 0.88, windowMins: "16–32 mins", lat: 12.985, lng: 77.736, code: "KA-BLR-01" },
    { rank: 2, zone: "BTM Layout 2nd Stage Cash Corridor", bank: "ICICI / Canara Bank Cluster", distKm: 2.4, prob: 0.79, windowMins: "21–40 mins", lat: 12.916, lng: 77.610, code: "KA-BLR-08" },
    { rank: 3, zone: "Electronic City Phase-1 Toll ATM", bank: "Axis / Kotak Highway Kiosk", distKm: 4.1, prob: 0.71, windowMins: "28–50 mins", lat: 12.845, lng: 77.660, code: "KA-ELC-03" }
  ],
  "Uttar Pradesh": [
    { rank: 1, zone: "Noida Sector-62 Electronic City Hub", bank: "SBI / PNB High-Limit ATM", distKm: 1.3, prob: 0.90, windowMins: "12–26 mins", lat: 28.627, lng: 77.364, code: "UP-NOI-62" },
    { rank: 2, zone: "Gomti Nagar Vibhuti Khand Cluster", bank: "HDFC / Union Bank Cash Node", distKm: 2.7, prob: 0.82, windowMins: "19–36 mins", lat: 26.866, lng: 81.005, code: "UP-LKO-05" },
    { rank: 3, zone: "Indirapuram Habitat Centre Kiosks", bank: "ICICI / Axis Border Corridor", distKm: 3.4, prob: 0.75, windowMins: "24–44 mins", lat: 28.641, lng: 77.371, code: "UP-GZB-14" }
  ],
  "Telangana": [
    { rank: 1, zone: "Madhapur Hitec City Metro ATM Grid", bank: "HDFC / SBI Cyberabad Node", distKm: 1.7, prob: 0.87, windowMins: "15–29 mins", lat: 17.448, lng: 78.391, code: "TG-HYD-02" },
    { rank: 2, zone: "Kukatpally Housing Board Junction", bank: "ICICI / Union Bank Multi-ATM", distKm: 2.9, prob: 0.80, windowMins: "20–39 mins", lat: 17.484, lng: 78.413, code: "TG-KPH-07" },
    { rank: 3, zone: "Gachibowli ORR Financial District", bank: "Axis / Kotak Cash Point", distKm: 3.8, prob: 0.72, windowMins: "26–47 mins", lat: 17.440, lng: 78.348, code: "TG-GCB-12" }
  ],
  "Rajasthan": [
    { rank: 1, zone: "Mewat / Bharatpur Highway ATM Belt", bank: "SBI / PNB Rural-Border Node", distKm: 1.2, prob: 0.93, windowMins: "10–22 mins", lat: 27.215, lng: 77.492, code: "RJ-BTP-01" },
    { rank: 2, zone: "Mansarovar Sector-9 Jaipur Hub", bank: "HDFC / ICICI Metro Corridor", distKm: 2.5, prob: 0.83, windowMins: "18–34 mins", lat: 26.853, lng: 75.768, code: "RJ-JPR-09" },
    { rank: 3, zone: "Alwar Bhiwadi Industrial Cash Point", bank: "Bank of Baroda / Axis ATM", distKm: 3.6, prob: 0.77, windowMins: "23–42 mins", lat: 28.209, lng: 76.860, code: "RJ-ALW-04" }
  ],
  "Punjab": [
    { rank: 1, zone: "Ludhiana Ferozepur Road ATM Corridor", bank: "SBI / HDFC Commercial Node", distKm: 1.5, prob: 0.88, windowMins: "14–28 mins", lat: 30.892, lng: 75.814, code: "PB-LDH-01" },
    { rank: 2, zone: "Mohali Phase-7 Industrial Kiosk Hub", bank: "PNB / ICICI Tricity Cluster", distKm: 2.4, prob: 0.80, windowMins: "19–36 mins", lat: 30.713, lng: 76.718, code: "PB-MOH-07" },
    { rank: 3, zone: "Jalandhar GT Road Banking Belt", bank: "Axis / Kotak Highway ATM", distKm: 3.5, prob: 0.74, windowMins: "24–45 mins", lat: 31.326, lng: 75.576, code: "PB-JAL-03" }
  ]
};

const FORECAST_DATA = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  historical: [1180, 1210, 1255, 1290, 1340, 1385, 1420, 1465, 1510, 1560, 1615, 1670],
  arimaForecast: [1710, 1745, 1790, 1830, 1875, 1920],
  nnForecast: [1725, 1768, 1815, 1862, 1910, 1965],
  futureMonths: ["Jan +1", "Feb +1", "Mar +1", "Apr +1", "May +1", "Jun +1"]
};

const INDIA_STATES_SERIES = {
  "All India (Total)": {
    years: [2019, 2020, 2021, 2022, 2023, 2024],
    actual: [44735, 50035, 52974, 65893, 76420, 86190],
    predicted: [44910, 49820, 53410, 65200, 77100, 85900],
    forecast2025: 94850,
    forecast2026: 103400,
    mae: 392.4,
    rmse: 468.1
  },
  "Karnataka": {
    years: [2019, 2020, 2021, 2022, 2023, 2024],
    actual: [12020, 10741, 8136, 12556, 14820, 16910],
    predicted: [11890, 10850, 8290, 12410, 14950, 16780],
    forecast2025: 18420,
    forecast2026: 19980,
    mae: 134.2,
    rmse: 141.8
  },
  "Telangana": {
    years: [2019, 2020, 2021, 2022, 2023, 2024],
    actual: [2691, 5024, 10303, 15297, 17140, 19250],
    predicted: [2750, 4980, 10180, 15410, 17010, 19380],
    forecast2025: 21490,
    forecast2026: 23680,
    mae: 112.5,
    rmse: 121.0
  },
  "Uttar Pradesh": {
    years: [2019, 2020, 2021, 2022, 2023, 2024],
    actual: [11416, 11097, 8829, 10117, 11680, 13120],
    predicted: [11350, 11180, 8910, 10040, 11750, 13040],
    forecast2025: 14390,
    forecast2026: 15620,
    mae: 76.8,
    rmse: 82.3
  },
  "Maharashtra": {
    years: [2019, 2020, 2021, 2022, 2023, 2024],
    actual: [4967, 5496, 5562, 8249, 9840, 11420],
    predicted: [5010, 5430, 5620, 8180, 9910, 11350],
    forecast2025: 12890,
    forecast2026: 14210,
    mae: 64.5,
    rmse: 69.2
  }
};

const INTERVENTION_LOG = [
  {
    id: "I4C-INT-9041",
    timestamp: new Date(Date.now() - 1000 * 60 * 14).toISOString(),
    actionType: "LEA_STRIKE_TEAM",
    zone: "Rohini Sector-7 ATM Cluster (DL-ROH-07)",
    agency: "Delhi Police IFSO + Rohini Cyber Cell",
    status: "DEPLOYED · ETA 7 MIN",
    priority: "CRITICAL"
  },
  {
    id: "I4C-INT-9042",
    timestamp: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
    actionType: "BANK_ATM_THROTTLE",
    zone: "Noida Sector-62 Electronic City Hub (UP-NOI-62)",
    agency: "SBI / PNB Switch Nodal Desk + NPCI",
    status: "CASHCAP ₹5,000 ACTIVE",
    priority: "HIGH"
  }
];

module.exports = {
  MODEL_METRICS,
  STATE_HOTSPOTS,
  FORECAST_DATA,
  INDIA_STATES_SERIES,
  INTERVENTION_LOG
};
