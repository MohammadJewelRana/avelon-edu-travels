import { createBrowserRouter } from "react-router-dom";
 
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CSR from "../pages/csr/CSR";
import Event from "../pages/event/Event";
import SisterConcern from "../pages/sisterConcern/SisterConcern";
import Management from "../pages/management/Management";
import Gallery from "../pages/photoGallery/Gallery";
 
 
 

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
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/csr",
        element: <CSR />,
      },
      {
        path: "/sister-concern",
        element: <SisterConcern />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/gallery",
        element:  <Gallery/>
      },
    ],
  },
]);

export default Router;
