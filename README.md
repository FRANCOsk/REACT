# Production Overview Dashboard

A responsive React dashboard for reviewing production results across regional teams and branches. The application presents headline KPIs, reusable filters, a sortable data grid, and detailed production breakdowns in an accessible dialog.

## Highlights

- responsive enterprise dashboard layout
- reusable date, region, branch, and status filters
- KPI summary cards calculated from the visible dataset
- sortable and paginated MUI X Data Grid
- drill-down dialog with production-category details
- light and dark color-scheme support
- production build and dependency audit in GitHub Actions

## Technology stack

- React 19
- Material UI 9
- MUI X Data Grid 9
- Vite 8
- JavaScript ES modules

## Requirements

- Node.js 22.22.3 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

## Quality and security

```bash
npm run check
npm run audit
```

GitHub Actions performs a clean dependency installation, creates a production bundle, and rejects high-severity dependency findings. Dependabot checks npm and GitHub Actions updates every week.

## Project purpose

This repository is a portfolio demonstration of modern React component composition, responsive UI design, data-grid integration, filtering, and maintainable frontend build automation.
