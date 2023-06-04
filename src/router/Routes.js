import {
    createBrowserRouter,
  } from "react-router-dom";


import App from '../App';
import ErrorPage from '../components/ErrorPage';
import Contact from '../components/Contact';


export default function Routes() {
    return createBrowserRouter([
    {
      path: "/",
      element: <App title="Welcome"/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);}