import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.portfolio'
import '../index.css'

console.log('🚀 Application starting...');

const root = document.getElementById('root');
if (!root) {
  console.error('❌ Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>Please check the HTML file.</p></div>';
  throw new Error('Root element not found');
}

console.log('✅ Root element found, rendering app...');

try {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('✅ App rendered successfully');
} catch (error) {
  console.error('❌ Error rendering app:', error);
  document.body.innerHTML = `<div style="padding: 20px; font-family: sans-serif;"><h1>Error Loading Application</h1><p>${error}</p></div>`;
}