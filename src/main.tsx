import { createRoot } from 'react-dom/client'
import App from './App.portfolio'

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}