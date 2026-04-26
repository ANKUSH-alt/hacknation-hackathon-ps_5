# UNMAPPED Technical Methodology
## Institutional Data Calibration & Econometric Signaling

This document outlines the logic and data sources used to calibrate the UNMAPPED infrastructure layer for Low- and Middle-Income Countries (LMICs).

---

### 1. Automation Exposure Calibration (Module 02)
UNMAPPED does not use raw Western automation scores. We apply a **Infrastructure Adjustment Factor (IAF)** to the standard Frey-Osborne (2013) probabilities.

**Formula:**
`Adjusted Risk = Base Probability + (Digital Penetration × Infrastructure Maturity) - Manual Dexterity Offset`

*   **Data Source:** ITU Digital Development Database (2024)
*   **Logic:** Automation in LMICs is delayed by "Infrastructure Friction." Tasks that are automated in London may remain manual in Accra due to the cost of electricity, hardware maintenance, and internet reliability.

---

### 2. Longitudinal Trajectory (2026–2035)
We utilize the **Wittgenstein Centre for Demography and Global Human Capital** projections to model the shifting landscape of youth opportunity.

*   **Logic:** As regional education levels rise, the "Skills Premium" for basic literacy declines, while the premium for "Digital-Manual Hybrid" skills (like Ag-Tech) increases.
*   **Calibration:** Trajectories in the Journey Map are indexed to the Wittgenstein "Middle-of-the-Road" (SSP2) scenario for Sub-Saharan Africa and South Asia.

---

### 3. Skills Mapping Taxonomy (Module 01)
We utilize a cross-walk between three major standards to ensure cross-border portability:

1.  **ISCO-08 (ILO):** Primary classification for labor market signals.
2.  **ESCO (EU):** Granular skill-pillar mapping for technical competencies.
3.  **ISCED 2011 (UNESCO):** Used to map informal experience to formal education levels.

---

### 4. Wage Floor Indexing (Module 03)
Wage signals are derived from **ILOSTAT** annual reports, adjusted for:
*   **Purchasing Power Parity (PPP)**
*   **Informal Sector Multipliers:** Derived from World Bank Enterprise Surveys (WBES) showing the 15-20% "hidden premium" for technical skills in the informal economy.

---

### 5. Honest Limitations & Ethics
*   **Proxy Reality:** Where real-time job data is missing, we use sector growth proxies from the World Bank WDI.
*   **Self-Sovereignty:** All skills data is stored in the user's local browser (IndexedDB) and is never sold to third-party advertisers.
*   **No Hiring Guarantee:** UNMAPPED is an visibility layer, not a job placement agency. We surface opportunity, we do not guarantee outcomes.
