import Layout from "#components/Layout";
import { createBrowserRouter } from "react-router-dom";
import {
  FormPage,
  HomePage,
  KeyHighlights,
  KeyHighlightsDetails,
  MapPage,
  PortfolioPage,
} from "./routes";
import PageNotFound from "#components/common/PageNotFound";
import ErrorBoundary from "#components/common/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: PageNotFound,
  },
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorBoundary,
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
          {
            path: "keyhighlights/:id",
            Component: KeyHighlightsDetails,
          },
        ],
      },
    ],
  },
  {
    path: "/form",
    Component: FormPage,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/map",
    Component: MapPage,
    ErrorBoundary: ErrorBoundary,
  },
]);
