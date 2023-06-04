import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";


import './styles/index.css';
import Routes from './router/Routes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes()} />
  </React.StrictMode>
);

