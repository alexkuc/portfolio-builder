import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './components/Portfolio/Portfolio';

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#entry';
  const root = document.querySelector(selector);
  if (!selector) throw new Error('Where is #root?');
  const rootEl = (
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
  ReactDOM.createRoot(root as HTMLElement).render(rootEl);
});
