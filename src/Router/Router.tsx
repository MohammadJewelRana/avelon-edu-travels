import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";

import Contact from "../pages/contact/Contact";

import Management from "../pages/management/Management";
import About from "../pages/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",

        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/management",
        element: <Management />,
      },
    ],
  },
]);

export default Router;
