import { createBrowserRouter } from "react-router-dom";
 
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
 
import Management from "../pages/management/Management";
 
 
 
 

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
