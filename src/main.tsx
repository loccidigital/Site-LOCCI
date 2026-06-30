import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import logoLocci from './public/logo-locci.png';

// Define favicon dinamicamente com a URL correta gerada pelo Vite
const faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
if (faviconLink) {
  faviconLink.href = logoLocci;
} else {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = logoLocci;
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
