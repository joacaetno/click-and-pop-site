import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const VITE_PORT = 8080;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running', timestamp: new Date().toISOString() });
});

// Example API route
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Use routes
app.use('/api', routes);

// In development, proxy to Vite dev server
if (isDevelopment) {
  app.use(
    '*',
    createProxyMiddleware({
      target: `http://localhost:${VITE_PORT}`,
      changeOrigin: true,
      ws: true, // Enable websocket proxying for HMR
    })
  );
} else {
  // Serve static files from the React app in production
  const distPath = join(__dirname, '../dist');
  app.use(express.static(distPath));
  
  // Serve React app for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
  });
}

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  if (isDevelopment) {
    console.log(`⚡ Proxying to Vite dev server on http://localhost:${VITE_PORT}`);
    console.log(`💡 Make sure to run 'npm run dev' in another terminal to start the Vite dev server`);
  }
});

