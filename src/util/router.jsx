import React, { Fragment } from 'react';
import { HomePage } from '../pages/home';
import { RegisterPage } from '../pages/register';
import GlobalNav from '../layout/GlobalNav';

export const routerInfo = [
  {
    path: '/',
    element: (
      <Fragment>
        <GlobalNav />
        <HomePage />
      </Fragment>
    ),
  },

  {
    path: '/join',
    element: (
      <Fragment>
        <GlobalNav />
        <RegisterPage />
      </Fragment>
    ),
  },
];
