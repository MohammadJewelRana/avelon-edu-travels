import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";

import "react-photo-view/dist/react-photo-view.css";
import Router from "./Router/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
    </div>
 




  </StrictMode>
);
