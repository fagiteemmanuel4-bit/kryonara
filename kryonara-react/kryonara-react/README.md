# Kryonara website (React + Vite)

## Run it
    npm install
    npm run dev        # local preview
    npm run build      # production files in /dist

## Edit
- `src/config.js`: email, WhatsApp, LinkedIn, X, Instagram, founder photo, email-list endpoint.
- `src/pages/*.jsx`: the pages (Home, Careers, Interns, News, Products, DevWall, Policies).
- `src/styles.css`: all styling and the light/dark colours.
- Put your founder photo in `public/` and set `photo` in `src/config.js`.

## Deploy
Upload the repo to Netlify, Vercel or Cloudflare Pages (build command `npm run build`, output folder `dist`).

## Deploy on Vercel
1. Put this folder in a GitHub repository.
2. On vercel.com choose Add New, then Project, and import the repository.
3. Vercel detects Vite from `vercel.json`. Press Deploy.
4. Add your domain under Project, Settings, Domains.
(Or run `npx vercel` in this folder.)

## SEO note
This version is a single-page React app that changes titles in the browser. For the strongest search ranking, use the separate static pages from kryonara-site.zip, or add pre-rendering later.
