# GeoCrafter Website

Modern website for GeoCrafter Studio - geospatial consulting and development services.

## Live Site

**Production:** https://geocrafter.github.io

## Tech Stack

- **Framework:** Astro 4.x
- **Styling:** TailwindCSS 3.x
- **Fonts:** Orbitron, Bebas Neue, Fira Mono, Questrial, Lato

## Quick Start

### Development

```bash
cd astro
npm install
npm run dev
```

### Production Build

```bash
cd astro
npm run build
npm run preview
```

## Project Structure

```
geocrafter-website/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── astro/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── layouts/          # Page layouts
│   │   ├── pages/            # Routes
│   │   └── styles/           # Global CSS
│   ├── public/               # Static assets
│   └── package.json
├── deploy.sh                 # Local deployment script
└── README.md
```

## Features

- Dark theme with gold accents (#ffd700)
- Fixed header with hover effects
- Full-viewport hero section
- Contact form via Formspree
- Project portfolio page (Craftfolio)
- Helpdesk with Coming Soon overlay
- Responsive design
- Sharp corners (no border-radius)
- Monospace typography (Fira Mono)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, contact |
| `/datasets` | Datasets catalog |
| `/expertise` | Expertise and services |
| `/trainings` | Trainings and workshops catalog |
| `/craftfolio` | Project portfolio |
| `/helpdesk` | Helpdesk (Coming Soon) |

## Adding a training or workshop

Edit `astro/src/data/trainings.yaml`. Each entry is one card, sorted by `date`
(ISO format). Fields: `title`, `type` (`training` | `workshop`), `date`, `endDate` (optional, for multi-day sessions),
`tba` (with `tba: true`, `dateLabel` is shown instead of the formatted date,
e.g. "Q1 2027"), `time`,
`totalHours`, `mode` (`online` | `onsite`), `location`, `language`,
`minParticipants`,
`maxParticipants`, `price` (EUR, excl. VAT), `registrationUrl` (optional
external form; the Register button is hidden when omitted) and `contents`
(list of strings). The page is generated at build time, so redeploy after editing.

## Deployment

### GitHub Pages (Production)

Deployment is automated via GitHub Actions. Push a tag to deploy:

```bash
git tag v1.0
git push origin v1.0
```

- Trigger: Tags matching `v1.*`
- Builds from `./astro` directory
- Deploys to https://geocrafter.github.io

### Local

```bash
# Development server
./deploy.sh dev

# Production build & serve
./deploy.sh prod
```

## Design

- **Primary Color:** Gold (#ffd700)
- **Background:** Dark (#121212)
- **Typography:** Orbitron (headings), Lato (body), Fira Mono (code)
- **Style:** Sharp corners, high-contrast, modern aesthetic
