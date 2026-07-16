# ClaimVision AI

AI-powered vehicle damage assessment and insurance/warranty claim platform.
Built for the "Automated warranty/insurance claim damage assessor" hackathon
problem statement (#008).

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production / deploy anywhere static (Netlify, Vercel, GitHub Pages):

```bash
npm run build
npm run preview   # to sanity-check the production build locally
```

The `dist/` folder from `npm run build` is a fully static site — you can also
drag-and-drop it onto Netlify Drop for an instant public URL during judging.

## What's inside

- **Home** — hero, features, "How it works" timeline, live dashboard preview,
  pricing, testimonials, FAQ
- **Claim Upload** (`/claim/new`) — drag-and-drop image upload with incident
  form and a simulated multi-step AI processing sequence
- **Claim Result** (`/claim/result`) — uploaded image with AI bounding-box
  overlays, per-damage confidence & cost table, fraud analysis (duplicate
  detection, EXIF flags, cost-anomaly check), and an explainable
  APPROVE / MANUAL REVIEW / REJECT recommendation
- **Dashboard** (`/dashboard`) — personal claim stats and recent activity
- **Claim History** (`/claims/history`) + **Claim Details** (`/claims/:id`)
- **Admin Dashboard** (`/admin`, `/admin/analytics`, `/admin/fraud`) — claim
  queue, weekly volume/decision charts, damage-type frequency, flagged-claims
  fraud queue
- **Login / Register / Profile / Settings / About / Contact**

## How the "AI" works in this build

Real damage detection needs a trained computer-vision model (e.g. a
fine-tuned YOLOv8 or ResNet-based detector) served behind an inference API —
out of scope to train from scratch in a hackathon window. Instead,
`src/lib/aiEngine.js` implements a **deterministic simulation** with the same
interface a real model would have:

- `analyzeImage(file)` → damage regions with type, part, severity, confidence,
  bounding box, and cost, seeded from the file's own bytes so results are
  stable and reproducible per image (not random on every render)
- `analyzeFraud(files, analyses)` → duplicate-signature detection across the
  claim's image set, simulated EXIF anomaly flags, and a cost-vs-severity
  statistical anomaly check
- `buildRecommendation(analyses, fraud)` → combines both into a decision with
  a human-readable, itemized explanation and an overall confidence score

Swapping in a real model means replacing the body of these three functions
with API calls — every downstream component (result page, admin dashboard,
history) already consumes this exact shape of data.

## Stack

React 19 · Vite · Tailwind CSS · Framer Motion · Lucide Icons · Recharts ·
React Router
