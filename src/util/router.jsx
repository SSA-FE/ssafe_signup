import React from 'react';
import { HomePage } from '../pages/Home';
import { RegisterPage } from '../pages/Register';

export const routerInfo = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/join',
    element: <RegisterPage />,
  },
];
