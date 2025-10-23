import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>Error occurred!</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
