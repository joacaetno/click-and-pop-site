# Server Setup

This directory contains the Node.js/Express server for the application.

## Structure

```
server/
├── index.ts          # Main server entry point
├── routes/           # API route handlers
│   └── index.ts
├── middleware/       # Express middleware
│   └── errorHandler.ts
└── config/           # Configuration files
    └── database.ts
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
PORT=3000
NODE_ENV=development
```

### Development

**Important:** In development mode, the Node.js server acts as a proxy to the Vite dev server. You need to run both servers.

**Option 1: Run both servers together (recommended):**

```bash
npm run dev:all
```

This will start both the Vite dev server (port 8080) and the Node.js server (port 3000) simultaneously.

**Option 2: Run servers separately:**

Terminal 1 - Start Vite dev server:
```bash
npm run dev
```

Terminal 2 - Start Node.js server:
```bash
npm run dev:server
```

Then access the application at `http://localhost:3000`. The Node.js server will proxy requests to the Vite dev server.

### Production

Build the server:

```bash
npm run build:server
```

Start the production server:

```bash
npm run start:server
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/example` - Example API endpoint

## Adding New Routes

1. Create route files in `server/routes/`
2. Import and use them in `server/index.ts`

Example:

```typescript
// server/routes/users.ts
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ users: [] });
});

export default router;
```

Then in `server/index.ts`:

```typescript
import usersRoutes from './routes/users.js';
app.use('/api/users', usersRoutes);
```

