// logger.js
// Reusable logger "package". Works in Node and the browser.

async function Log(stack, level, pkg, message) {
  try {
   
    const logID = "c2f0f949-9a77-4114-a0f6-7bbe510e0f28";

    const payload = { 
      logID,            
      stack, 
      level, 
      package: pkg, 
      message, 
      ts: new Date().toISOString() 
    };

    const url =
      (typeof process !== "undefined" && process.env && process.env.LOG_TEST_SERVER_URL) ||
      (typeof window !== "undefined" && window.LOG_TEST_SERVER_URL) ||
      null;

    if (!url) return; 

    if (typeof fetch === "function") {
      await fetch(url, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(payload) 
      });
    }
  } catch (_) {
  }
}

module.exports = { Log };
