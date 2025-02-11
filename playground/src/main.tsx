import './index.css';
import { Spin } from 'antd';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';

function App() {
  return (
    <Suspense fallback={<Spin className="block mx-auto mt-6" />}>
      {useRoutes(routes)}
    </Suspense>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
