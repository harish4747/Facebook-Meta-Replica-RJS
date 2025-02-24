import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MyRoutes } from "./Routes/MyRoutes.jsx";
import { RouterProvider } from "react-router-dom";
import Container from "./Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MyRoutes}>
      <Container />
    </RouterProvider>
  </StrictMode>,
);
