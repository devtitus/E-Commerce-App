# E-Commerce Site

A Next.js e-commerce application with shopping cart, product filtering, pagination, and user authentication.

## Features

- Product listing with filtering and sorting
- Shopping cart with quantity management
- User authentication (login/logout)
- Pagination for products
- Responsive design
- Category filtering

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd catalyst-assignment
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Required - Your application URL (used for API calls)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_URL` | Base URL for the application (used for API calls) | Yes |

## Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Add the environment variable:
   - `NEXT_PUBLIC_APP_URL` = Your deployed URL (e.g., https://your-app.vercel.app)
5. Deploy!

### Deploy to Other Platforms

#### Docker

```dockerfile
# Build the image
docker build -t ecommerce-app .

# Run the container
docker run -p 3000:3000 -e NEXT_PUBLIC_APP_URL=http://localhost:3000 ecommerce-app
```

#### Node.js Server

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI**: React, Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: DummyJSON API
- **Icons**: Lucide React

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── cart/              # Cart page
│   ├── components/        # React components
│   ├── login/             # Login page
│   └── products/          # Products page
├── components/            # UI components
├── lib/                   # Utility functions
└── store/                 # Redux store
```

## License

MIT
