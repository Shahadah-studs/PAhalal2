# Prince Albert Halal Kitchen

A responsive single-page ordering experience for **Prince Albert Halal Kitchen**. Customers can explore the menu, choose portion sizes and dietary options, add mains and sides to a cart, and review delivery information before placing an order.

**Live site:** [pahalal.vercel.app](https://pahalal.vercel.app)

## Highlights

- Browse Kabuli Pulao and Arabian Mandi menu options
- Select portion sizes, serving counts, prices, and nut preferences
- Add dishes and sides to an in-page order cart
- Increase, decrease, or remove cart items
- View running order totals and order details
- See delivery information, customer reviews, and FAQs
- Open dish photos in a modal
- Responsive layout for mobile and desktop screens
- PWA manifest and installable-app configuration
- Smooth UI motion and iconography with Motion and Lucide React

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Motion](https://motion.dev/)
- Express and dotenv dependencies are included for application/server configuration

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run locally

```bash
git clone https://github.com/Shahadah-studs/PAhalal2.git
cd PAhalal2
npm install
npm run dev
```

The development server runs on port `3000`. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Copy the example environment file when local configuration is needed:

```bash
cp .env.example .env
```

Set `APP_URL` in `.env` to the URL for your local or deployed application:

```dotenv
APP_URL="http://localhost:3000"
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking without emitting files |
| `npm run clean` | Remove generated build and server artifacts |

Before submitting changes, run:

```bash
npm run lint
npm run build
```

## Project structure

```text
.
├── index.html             # HTML entry point and application metadata
├── manifest.json          # PWA manifest
├── metadata.json          # Application metadata
├── public assets          # Branding and image assets at the repository root
├── src/
│   ├── App.tsx            # Main application and cart state
│   ├── components/        # Header, menu, cart, delivery, FAQ, reviews, and UI components
│   ├── data/              # Menu data, pricing, and image references
│   ├── types/             # Shared TypeScript types
│   └── main.tsx           # React application entry point
├── sw.js                  # Service-worker entry point
└── vite.config.ts         # Vite configuration
```

## Deployment

The application is configured as a Vite frontend and is deployed at [pahalal.vercel.app](https://pahalal.vercel.app). For a production deployment, build the project with `npm run build` and serve the generated `dist/` directory using a static hosting provider such as Vercel.

## Business information

Prince Albert Halal Kitchen serves halal Kabuli Pulao and Arabian Mandi in Prince Albert. Menu availability, delivery schedules, pricing, and ordering details should be confirmed in the application before placing an order.

## Credits

This project is created and maintained by [Shahadah-studs](https://github.com/Shahadah-studs) only.

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 Shahadah-studs
