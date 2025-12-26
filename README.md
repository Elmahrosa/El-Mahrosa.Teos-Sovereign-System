# El-Mahrosa.Teos-Sovereign-System
El-Mahrosa Sovereign System — TEOS Egypt’s unified civic-first infrastructure built with Rust + Solana.  Includes education frontend, Anchor smart contracts, API services, and SDK modules.  Designed for sovereignty, compliance, and cultural innovation.

# El-Mahrosa.Teos-Sovereign-System 🇪🇬🦀

## 📖 Vision & Sovereign Design
El-Mahrosa Sovereign System is Egypt’s unified Digital Public Infrastructure (DPI) framework by **TEOS Egypt**, delivering education modules, Solana Anchor smart contracts, API services, and integration SDKs as **one deploy-ready package**.

Built with **Rust 🦀 + Solana**, the system blends Egyptian heritage with compliant, non-custodial Web3 innovation for regulated finance, governance, and civic learning.

---

## 🦀 Why Rust?
- Memory-safe, high-performance systems language for sovereign infrastructure
- Unified codebase language across all TEOS organization repositories
- Ideal for Solana programs using **Anchor Framework**
- Powers SPL token logic, fee rails, and on-chain badge minting

---

## 🗂 Repository Structure

```

El-Mahrosa.Teos-Sovereign-System/
├── education/   # Civic learning UI (Vercel-ready)
├── contracts/   # Solana Anchor programs (Rust)
├── api/         # Backend sync layer (Express or Flask)
├── sdk/         # Integration SDKs (JS/TS)
├── .env.example # Environment config template
├── LICENSE      # Open-source license (MIT or Apache-2.0)

````

---

## ⚙ System Requirements
| Component | Version |
|---|---|
| Node.js | ≥ 18 |
| Rust | ≥ 1.75 |
| Solana CLI | ≥ 1.18 |
| Anchor | Latest |
| Wallet | Phantom (Devnet/Prod) |
| Hosting | Vercel or any provider |

---

## 📦 Installation

```bash
# Clone repository
git clone <REPO_URL>

# Install education frontend
cd education
npm install

# Install backend
cd ../api
npm install
# or for Flask backend:
# pip install -r requirements.txt

# Build smart contracts
cd ../contracts
anchor build
````

---

## 🧪 Testing

```bash
# Frontend tests
cd education
npm run test

# Backend tests
cd ../api
npm run test

# Local smart contract tests
solana-test-validator
anchor test
```

---

## 🚀 Deploy

```bash
# Deploy Solana programs to Devnet
anchor deploy --provider.cluster devnet

# Deploy frontend (manual or via CI/CD)
# GitHub Actions recommended for automation
```

---

## 🏅 On-Chain SPL Badge Minting Flow

1. User connects **Phantom Wallet**
2. Completes a learning module
3. Smart contract builds SPL mint transaction
4. User signs the transaction (non-custodial)

```js
const signedTx = await provider.signTransaction(transaction);
const signature = await provider.sendTransaction(signedTx, connection);
```

5. Badge is minted and transferred to user wallet on-chain

---

## 🔄 CI/CD – GitHub Actions (Recommended)

* **Build**: Rust smart contracts + frontend
* **Test**: API + UI module integration
* **Deploy**: Auto → Vercel + Solana (Devnet/Mainnet)

---

## 🎨 Identity & Environment Config

All configuration and links are managed via `.env` (never hardcoded).

### Official DPI Palette

* **Gold** → `#c59b2e`
* **Dark Sovereign** → `#0a0a0f`
* **Papyrus UI** → `#f4e1c1`

### `.env.example`

```env
LINKEDIN_URL=https://linkedin.com/in/aymanseif
TWITTER_URL=https://twitter.com/TeosEgypt
CONTACT_EMAIL=education@teosegypt.eg
SOLANA_CLUSTER=devnet
TEOS_TOKEN_MINT=<SPL_TOKEN_MINT_ADDRESS>
```

---

## 🔐 Security & Sovereignty Principles

* No private keys stored in frontend
* No server-side custody or signing
* All financial actions are **user-signed**
* Compliance enforced via **SOL-only, no-custody architecture**

> **Rule**: “No secrets in UI, no custody in backend, no hardcoded payment logic, only sovereign user signatures.”

---

## 📜 License & Contributions

* License: **MIT** or **Apache-2.0**
* Contributions via **Pull Requests**
* All PRs must follow **Rust + TypeScript** standards and sovereign design rules

---

## 🌍 Sustainable Development Goals (Alignment)

| SDG | Alignment                                          |
| --- | -------------------------------------------------- |
| 4   | Quality Education                                  |
| 9   | Industry, Innovation, Infrastructure               |
| 11  | Sustainable Cities & Heritage Preservation         |
| 16  | Peace, Justice, Transparency & Strong Institutions |

---

### ✍ Signature

**Ayman Seif – Founder, TEOS Egypt**
El-Mahrosa Sovereign DPI powered by **Rust 🦀 + Solana 🇪🇬**

```
```
