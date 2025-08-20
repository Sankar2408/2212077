
const FIXED_LOG_ID = "c2f0f949-9a77-4114-a0f6-7bbe510e0f28";

const LOG_SERVER_URL = "http://20.244.56.144/evaluation-service/logs";  // 👈 change if deployed

/**
 * Frontend logger for sending logs to the logging service.
 * @param {string} stack 
 * @param {string} level 
 * @param {string} pkg 
 * @param {string} message 
 */
export async function Log(stack, level, pkg, message) {
  try {
    const payload = {
      logID: FIXED_LOG_ID,
      stack,
      level,
      package: pkg,
      message,
      ts: new Date().toISOString(),
    };

    await fetch(LOG_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Never throw from logger
  }
}
