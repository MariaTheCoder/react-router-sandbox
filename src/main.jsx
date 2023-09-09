import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// setup which type of router you will be using since we are working with a web application
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// All routing is being managed in the app component. Therefore we wrap our app inside of BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
