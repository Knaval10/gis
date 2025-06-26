import Layout from "#components/Layout";
import { createBrowserRouter } from "react-router-dom";
import {
  FormPage,
  HomePage,
  KeyHighlights,
  MapPage,
  PortfolioPage,
} from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "portfolio",
        Component: PortfolioPage,
        children: [
          {
            path: "keyhighlights",
            Component: KeyHighlights,
          },
        ],
      },
    ],
  },
  {
    path: "/form",
    Component: FormPage,
  },
  {
    path: "/map",
    Component: MapPage,
  },
]);
