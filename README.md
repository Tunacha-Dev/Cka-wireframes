# CKA Wireframes (Next.js + Tailwind)

Interactive, themed UI wireframes for **Crimson Knights Adventure**.
Includes HUD, character/inventory panels, rarity glows, animated liquid bars,
and hover tooltips with compare vs. equipped.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & Run (prod)
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import the repo in Vercel and deploy.
3. Get a live preview URL instantly.


## JSON Dataset

Data lives in `app/data/items.json` with this shape:
- `equipped`: map of slot -> item

- `inventory`: array of items

- `rarityOrder`: order of rarity strings

- `compareKeys`: stat keys compared in the tooltip panel



You can edit this file to change names, stats, and rarities without touching the React code.


## TypeScript on Vercel
This repo includes TypeScript and React/Node type packages as devDependencies so Vercel can build it:
- typescript
- @types/react
- @types/node
