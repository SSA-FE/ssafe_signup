import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './reset.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerInfo } from './util/router';

const router = createBrowserRouter(routerInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
