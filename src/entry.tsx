import React from 'react';
import ReactDOM from 'react-dom/client';
import { Password } from './components/Password/Password';
import { Portfolio } from './components/Portfolio/Portfolio';
import portfolio from './data/data';

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#entry';
  const root = document.querySelector(selector);
  if (!selector) throw new Error('Where is #root?');
  const hash =
    '4aa0129dd6bf5d6cd0cf8d8ed6d9a79e8aa6c1138ffab2caa5faaf459713c668bd764796ab56ccb2351e7fcb4d0dfc8629cf93bfb7e16312a64e4652e8b2a02a';
  const rootEl = (
    <React.StrictMode>
      <Password disabled={true} hash={hash}>
        <Portfolio {...portfolio} />
      </Password>
    </React.StrictMode>
  );
  ReactDOM.createRoot(root as HTMLElement).render(rootEl);
});
