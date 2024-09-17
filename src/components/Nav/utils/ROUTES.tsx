import React from 'react';
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../assets';

export interface RouteData {
  path: string;
  element: React.JSX.Element;
  icon: any;
}

export const ROUTES: Array<RouteData> = [
  { path: '/', element: <h2> 'una ruta' </h2>, icon: icon1 },
  {
    path: '/integraciones-realizadas',
    element: <h2> </h2>,
    icon: icon2,
  },
  { path: '/vinculacion', element: <h2> </h2>, icon: icon3 },
  {
    path: '/login',
    element: <h2> </h2>,
    icon: icon4,
  },
  { path: '/5', element: <h2> </h2>, icon: icon5 },
  { path: '/6', element: <h2> </h2>, icon: icon6 },
];
