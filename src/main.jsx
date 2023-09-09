import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// setup which type of router you will be using since we are working with a web application
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

// All routing is being managed in the app component. Therefore we wrap our app inside of BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
