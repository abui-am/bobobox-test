import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
