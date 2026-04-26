# 🌍 UNMAPPED | Infrastructure for Economic Visibility
### *World Bank Youth Summit × Hack-Nation · Global AI Hackathon 2026*

**UNMAPPED** is an open, localizable infrastructure layer that connects youth skills to economic opportunities in Low- and Middle-Income Countries (LMICs). It addresses the structural failure where 600+ million young people with real, informal skills remain economically invisible to employers and governments.

---

## 🎯 The Vision
Unlike traditional job boards, UNMAPPED works as an **infrastructure protocol**. It is designed for "Amara"—a 22-year-old in Accra with self-taught technical skills but no formal credentials. UNMAPPED makes her skills visible, valuable, and connected to reachable opportunities.

## 🏗️ Core Modules

### 1. 🎯 Skills Signal Engine
Transforms informal descriptions of experience into standardized, portable skills profiles.
- **Natural Language Extraction**: Maps user stories to **ESCO** and **ISCO-08** taxonomies.
- **Portable Skills Passport**: Generates a verifiable Digital ID for offline sharing and peer verification.

### 2. ⚖️ AI Readiness & Displacement Risk Lens
An honest, data-driven assessment of automation risk calibrated for local infrastructure.
- **Automation Heatmaps**: Uses **Frey-Osborne** and **ILO** data to show skill durability.
- **2035 Trajectory**: Visualizes how the labor landscape is shifting in specific regions (e.g., Sub-Saharan Africa vs. South Asia).
- **Upskilling Pathways**: Recommends adjacent, high-resilience skills for future-proofing.

### 3. 🚀 Opportunity Matching & Policy Dashboard
Connects skills to realistic, reachable outcomes using real-world econometric signals.
- **Youth Interface**: Surfaces wage floors, sector growth, and commute-time calculations.
- **Policymaker View**: Aggregate signals for governments to identify regional skills gaps and training effectiveness.

---

## 🌍 Design for Constraint (Winning Factors)
- **Localizability**: Configurable for different countries (e.g., Ghana 🇬🇭, India 🇮🇳) via a zero-code JSON architecture.
- **Offline-First**: PWA-ready with bundled datasets from ILO and World Bank for low-bandwidth usage.
- **Low Literacy Focus**: Uses icon-driven navigation and high-readability typography (**Outfit** & **Plus Jakarta Sans**).
- **Honest Limits**: Includes a transparency module detailing assumptions and data lags.

---

## 📊 Data Foundations
UNMAPPED integrates mandatory Tier-1 data sources:
- **ILO ILOSTAT**: Wage floors, employment trends, and sector classifications.
- **World Bank WDI**: Human Capital Index and economic indicators.
- **Frey & Osborne**: Automation probability by occupation.
- **Wittgenstein Centre**: Education level projections to 2035+.

---

## 💻 Technical Stack
- **Frontend**: Next.js 14+ (App Router), TypeScript.
- **Styling**: Tailwind CSS v4 (Premium Obsidian & Glassmorphism Design).
- **Animations**: Framer Motion (Fluid micro-interactions).
- **PWA**: manifest.json and service worker integration for offline capability.
- **State**: React Context API for global localization sync.

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 📅 Roadmap
- **Phase 1 (Pilot)**: Accra (Ghana) and Rural India expansion.
- **Phase 2 (Scale)**: Integration with WhatsApp API for opportunity alerts and peer-to-peer skill verification via Bluetooth.

---

### 🌟 "Amara has skills. Our job is to make them visible."
Built for the World Bank Youth Summit 2026. 🚀
