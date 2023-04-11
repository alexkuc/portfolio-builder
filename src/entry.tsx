import React from 'react';
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#entry';
  const root = document.querySelector(selector);
  if (!selector) throw new Error('Where is #root?');
  const rootEl = (
    <React.StrictMode>
      <>TODO:</>
    </React.StrictMode>
  );
  ReactDOM.createRoot(root as HTMLElement).render(rootEl);
});
