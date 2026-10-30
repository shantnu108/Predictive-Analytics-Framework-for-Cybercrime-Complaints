/**
 * Frontend API Client for communicating with the Node.js Backend (`http://localhost:5000/api`)
 */
const API_BASE = import.meta.env?.VITE_API_BASE || 'http://localhost:5000/api';

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function predictComplaint(payload) {
  try {
    const res = await fetch(`${API_BASE}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

export async function dispatchIntervention(payload) {
  try {
    const res = await fetch(`${API_BASE}/interventions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}
