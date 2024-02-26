import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './reset.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerInfo } from './util/router';
import GlobalNav from './layout/GlobalNav';

const router = createBrowserRouter(routerInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
    <GlobalNav/>
    <RouterProvider router={router} />
</Fragment>
);
