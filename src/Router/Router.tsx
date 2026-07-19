import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";

import Contact from "../pages/contact/Contact";
 
import About from "../pages/about/About";
import Tour from "../pages/tour/Tour";
import MedicalVisa from "../pages/medical-visa/MedicalVisa";
import BusinessVisa from "../pages/business-visa/BusinessVisa";
import StudyAbroad from "../pages/study-abroad/StudyAbroad";

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
        path: "/business-visa",

        element: <BusinessVisa />,
      },
      {
        path: "/study-abroad",

        element: <StudyAbroad />,
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
