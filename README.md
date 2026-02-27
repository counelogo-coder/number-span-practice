# Reverse Digit Span Practice

Simple Node.js/Express application to help practice reverse digit span tests.

## Setup

1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies (express).
3. Start the server with `npm start`.
4. Open http://localhost:3000 in your browser.

The page will show a random sequence of digits. Use the controls to:
- set minimum and maximum length (random value chosen between them)
- select a mode: **Repeat** (type the sequence as heard), **Reverse** (type backwards), or **Sort** (type digits in ascending order)
- adjust playback speed with the BPM slider

Memorize the sounds and enter the transformed sequence accordingly.

Tailwind CSS is loaded via CDN so no build step is required.

## Vercel deployment

This repository is prepared to deploy as a static site on Vercel. The `public/` folder is served as the site root.

To deploy:

1. Push the repo to GitHub (see previous instructions).
2. Go to Vercel and import the GitHub repo.
3. No build command is required; Vercel will serve the `public` folder as static files.

If you prefer, you can run `npm run build` during deployment; it is a no-op placeholder.