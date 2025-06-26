import React from "react";

export const HomePage = React.lazy(() => import("#pages/HomePage"));
export const MapPage = React.lazy(() => import("#pages/MapPage"));
export const FormPage = React.lazy(() => import("#pages/FormPage"));
export const PortfolioPage = React.lazy(() => import("#pages/PortfolioPage"));
export const KeyHighlights = React.lazy(
  () => import("#pages/PortfolioPage/KeyHighlights")
);
export const KeyHighlightsDetails = React.lazy(
  () => import("#pages/PortfolioPage/PortfolioDetails/KeyHighlightsDetails")
);
