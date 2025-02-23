import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateAccount from "../CreateAccount";
import Container from "../Container";

export let MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <CreateAccount />,
      },
      {
        path: "/signin",
        element: <App />,
      },
    ],
  },
]);
