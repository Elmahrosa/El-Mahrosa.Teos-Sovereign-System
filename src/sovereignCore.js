// src/sovereignCore.js
const express = require("express");
const fs = require("fs");
const yaml = require("yaml");
const path = require("path");

// Load settings.yml
const configPath = path.join(__dirname, "../config/settings.yml");
let settings = {};
if (fs.existsSync(configPath)) {
  const file = fs.readFileSync(configPath, "utf8");
  settings = yaml.parse(file);
} else {
  console.warn("⚠️ No config/settings.yml found, using defaults.");
  settings = {
    network: { cluster: "devnet", rpc_url: "https://api.devnet.solana.com" },
    treasury: { base_currency: "EGP", staking_enabled: true },
    compliance: { dco_required: true, audit_logging: true }
  };
}

const app = express();
const PORT = process.env.PORT || 3000;

// Example endpoint
app.get("/", (req, res) => {
  res.json({
    message: "El-Mahrosa Sovereign System running",
    settings
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Sovereign system started on port ${PORT}`);
});
