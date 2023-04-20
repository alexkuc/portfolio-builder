import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './components/Portfolio/Portfolio';
import portfolio from './data/data';

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#entry';
  const root = document.querySelector(selector);
  if (!selector) throw new Error('Where is #root?');
  const rootEl = (
    <React.StrictMode>
      <Portfolio {...portfolio} />
    </React.StrictMode>
  );
  ReactDOM.createRoot(root as HTMLElement).render(rootEl);
});
