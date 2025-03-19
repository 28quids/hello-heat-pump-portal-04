
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'

// Make sure we have a root element to render into
const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

// Render the app inside BrowserRouter
root.render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>
);
