/**
 * Prediction Controller: Complaint Classification + Risk Severity + Cash Withdrawal Hotspot Prediction
 */
const { STATE_HOTSPOTS } = require("../data/seedData");

const CATEGORY_RULES = [
  {
    category: "Phishing / Vishing",
    keywords: ["otp", "kyc", "link", "bank call", "customer care", "blocked", "verify", "apk", "anydesk", "screen share", "upi pin"],
    baseConfidence: 0.94
  },
  {
    category: "Credit/Debit Card Fraud",
    keywords: ["card", "cvv", "credit", "debit", "pos", "international transaction", "cloned", "swipe", "atm card", "limit"],
    baseConfidence: 0.93
  },
  {
    category: "Cryptocurrency Scam",
    keywords: ["crypto", "usdt", "bitcoin", "binance", "wallet", "trading", "telegram task", "roi", "coin", "exchange"],
    baseConfidence: 0.96
  },
  {
    category: "Job Fraud",
    keywords: ["job", "part-time", "youtube like", "hr", "work from home", "task", "prepaid task", "recruitment", "offer letter", "salary"],
    baseConfidence: 0.95
  },
  {
    category: "Identity Theft",
    keywords: ["aadhaar", "pan", "sim swap", "impersonation", "loan app", "forged", "biometric", "aeps", "document", "cibil"],
    baseConfidence: 0.92
  },
  {
    category: "Online Shopping Scam",
    keywords: ["olx", "marketplace", "qr code", "courier", "delivery", "army", "refund", "product", "discount", "e-commerce"],
    baseConfidence: 0.91
  }
];

exports.predictComplaintAndCashout = (req, res) => {
  const {
    text = "",
    amount = 85000,
    channel = "UPI / Mule Layer-2 Transfer",
    state = "Delhi NCR",
    minutesSinceTx = 18
  } = req.body || {};

  const lower = String(text).toLowerCase();
  let bestMatch = CATEGORY_RULES[0];
  let maxHits = 0;

  const scores = CATEGORY_RULES.map((rule) => {
    let hits = 0;
    rule.keywords.forEach((kw) => {
      if (lower.includes(kw)) hits += 1;
    });
    if (hits > maxHits) {
      maxHits = hits;
      bestMatch = rule;
    }
    return {
      category: rule.category,
      probability: Number(Math.min(0.99, (hits > 0 ? 0.55 + hits * 0.14 : 0.04)).toFixed(3))
    };
  });

  const numAmount = Number(amount) || 50000;
  const numMins = Number(minutesSinceTx) || 20;

  let riskScore = 58;
  if (numAmount >= 100000) riskScore += 18;
  else if (numAmount >= 50000) riskScore += 11;
  if (numMins <= 30) riskScore += 14;
  if (String(channel).toLowerCase().includes("upi") || String(channel).toLowerCase().includes("aeps")) {
    riskScore += 7;
  }
  riskScore = Math.min(99, Math.max(25, riskScore));

  const riskLevel = riskScore >= 85 ? "CRITICAL" : riskScore >= 70 ? "HIGH" : "ELEVATED";
  const hotspots = STATE_HOTSPOTS[state] || STATE_HOTSPOTS["Delhi NCR"];

  return res.json({
    status: "ok",
    engine: "Node.js I4C Proactive Classifier v2.4",
    timestamp: new Date().toISOString(),
    prediction: {
      predictedCategory: bestMatch.category,
      confidence: Number(Math.min(0.994, bestMatch.baseConfidence + maxHits * 0.012).toFixed(4)),
      riskScore,
      riskLevel,
      goldenHourWindowRemainingMins: Math.max(5, 45 - numMins),
      recommendedHoldChannel: channel,
      classProbabilities: scores
    },
    cashoutPrediction: {
      state,
      reportedLossINR: numAmount,
      predictedHotspots: hotspots,
      proactiveDirectives: [
        `Dispatch PCR / Cyber Strike Team to ${hotspots[0].zone} (${hotspots[0].windowMins})`,
        `Issue Section 91 CrPC / BNSS freeze + ATM cashout cap on ${hotspots[0].bank}`,
        `Broadcast Mule Account Cluster telemetry to I4C NCRP & FIU-IND`
      ]
    }
  });
};
