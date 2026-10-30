/**
 * Cashout & Proactive LEA/Bank Intervention Controller
 */
const { STATE_HOTSPOTS, INTERVENTION_LOG } = require("../data/seedData");

exports.getHotspots = (req, res) => {
  const { state } = req.query;
  if (state && STATE_HOTSPOTS[state]) {
    return res.json({
      status: "ok",
      state,
      hotspots: STATE_HOTSPOTS[state],
      interventions: INTERVENTION_LOG
    });
  }
  return res.json({
    status: "ok",
    states: Object.keys(STATE_HOTSPOTS),
    hotspotsByState: STATE_HOTSPOTS,
    interventions: INTERVENTION_LOG
  });
};

exports.createIntervention = (req, res) => {
  const {
    actionType = "LEA_STRIKE_TEAM",
    zone = "Rohini Sector-7 ATM Cluster (DL-ROH-07)",
    agency = "State Cyber Nodal Officer + Local SHO",
    priority = "CRITICAL",
    notes = "Automated I4C Proactive Cashout Interception Order"
  } = req.body || {};

  const entry = {
    id: `I4C-INT-${Math.floor(1000 + Math.random() * 9000)}`,
    timestamp: new Date().toISOString(),
    actionType,
    zone,
    agency,
    status: actionType.includes("BANK") ? "ATM THROTTLE & LIEN ACTIVE" : "LEA UNIT DISPATCHED",
    priority,
    notes
  };

  INTERVENTION_LOG.unshift(entry);
  return res.status(201).json({
    status: "ok",
    message: "Proactive I4C intervention dispatched and logged",
    intervention: entry,
    totalLogged: INTERVENTION_LOG.length
  });
};
