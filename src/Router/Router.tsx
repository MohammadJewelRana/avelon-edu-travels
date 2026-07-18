import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";

import Contact from "../pages/contact/Contact";

import Management from "../pages/management/Management";
import About from "../pages/about/About";
import Tour from "../pages/tour/Tour";
import MedicalVisa from "../pages/medical-visa/MedicalVisa";

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
        path: "/medical-visa",
        element: <MedicalVisa />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/Tour",
        element: <Tour />,
      },
    ],
  },
]);

export default Router;
