# NAXA Frontend Web Application

A modern, responsive frontend built with React, TypeScript, Vite, Tailwind CSS, and MapLibre GL. Includes a dynamic portfolio, GIS maps, newsletter subscription, and more.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- MapLibre GL for GIS Maps
- React Query for data fetching
- React Router for routing
- ESLint & Prettier for code style
- Custom reusable components

## Features

- Home Page - Consists of the names with links of three sections: Map, KeyHighlights and Form - Click to navigate to particular page
- Map Visualization
  -Provinces, Districts and Municipalities are visualized based on switching respective layers
  -There is switch at the top to switch to a praticular layer
  -There is a yellow switch at the right side of map which opens layer visibility controller
  -layer visibility controller changes the fill color, opacity and line width and opacity
- Naxa Key highlights page
  -Click to key highlights to navigate to key highlights
  -Find cards consisting of highlighted prohects of Naxa
- Key Highlights Details page
  -Click on individual project card to navigate the project details in a modal
- Form Page
  -Enter the name, address, contact, email, photo and cv and submit. There is proper validation so give time to read the message on error submitting from
- Loader
  -Skeleton would be better but loader will engage users until data are fetched
  -Suspense - Components are imported using React.lazy for code splitting and optimization so that on navigating to particular page loading.. suspense is seen until the component is loaded and rendered

## Folder Structure

src/
├── assets/ # images, icons and dynamic for dynamic svg components
├── components/ # Reusable UI components
├── Common/ # Components used on multiple modules
├── Button/ # Reusable button with customization on style and label
├── ErrorBoundary/ # Any error on any page will display this
├── Loader/ # Skeleton would be the best option for version 2. However, loading works fine
├── PageNotFound/ # Custom UI for incorrect navigation. Most of the navigation may go to this page as all routing are not configured
├── SubscribeNewsletter # Form with email field with manual validation

    ├── Card/ # ProjectCard to show key highlights
    ├── Form/ # Form component with manual validation. Navigate using /form
      ├── FileUploader/ # To upload cv and image
      ├── TextInput/ # For email, name and phone number
    ├── Layout # Navbar, Outlet for children pages and Footer (divided based on sections)
    └── Modal # Renders key highlights details
    ├── Map/ # Contains map, map logic, layer switcher, and visibility controller

├── hooks/ # useRevealOnScroll as custom hook for animation of project cards based on intersection observer
├── lib/ # Library consisting utilities to be used on multiple cases
├── api/ # queries, apis, requests (queries are keys for each api fetch, requests is globalized file for api configuration, api has custom hooks for api fetch )
├── constants/ # For making constant json data
├── router/ # importing components and setting routes
├── utils/ # utilities and helper functions

├── Pages
├── HomePage
├── MapPage
├── PortfolioPage
├── FormPage
└── App.tsx # All routes are imported with RouterProvider
└── main.tsx # Entry point

## Environment Variables

VITE_APP_BACKEND_URL=https://admin.naxa.com.np/api
VITE_PROVINCE_TILES_URL=https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}
VITE_DISTRICT_TILES_URL=https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}
VITE_MUNICIPALITY_TILES_URL=https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}
VITE_MAP_STYLE_URL=https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL

## How to use

-Clone the project using bash
git clone git@github.com:Knaval10/gis.git
-install dependencies and packages
yarn install
-Enter env making .env file
-Run the app
yarn dev
