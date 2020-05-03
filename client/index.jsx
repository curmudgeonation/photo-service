import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { default as App } from "./components/App.jsx";
import "../public/style.css";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("photo-service")
);
