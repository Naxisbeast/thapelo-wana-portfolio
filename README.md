# Thapelo Kamogelo Wana Portfolio

A futuristic, recruiter-friendly personal portfolio for Thapelo Kamogelo Wana, a BSc Computer Science and Electronics student at North-West University. The site focuses on software, Computer Science foundations, database work, AI/data interests, and academic project growth.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Design Direction

The interface uses a polished sci-fi computer science dashboard style with a dark theme, animated grid background, glassmorphism cards, neon cyan/electric blue/violet accents, and subtle hover motion. The wording is intentionally honest and student-professional.

## Sections

- `SYSTEM_BOOT`
- `SYSTEM_PROFILE`
- `FEATURED_BUILDS`
- `SKILL_MATRIX`
- `REPOSITORY_NETWORK`
- `PORTFOLIO_SIGNALS`
- `EXPERIENCE_LOG`
- `DOCUMENT_ACCESS`
- `CONTACT_NODE`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CV

The CV button links to:

```text
/Thapelo_Wana_CV_2026.pdf
```

The PDF lives in `public/` and is served from the site root. Replace it with an updated version as needed, keeping the same filename.

## Deployment

This project can be deployed to Vercel, Netlify, or GitHub Pages.

For Vercel or Netlify:

1. Push the project to GitHub.
2. Import the repository.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

For GitHub Pages, install and configure a deployment workflow or use a static hosting action that publishes the `dist` folder after running `npm run build`.
