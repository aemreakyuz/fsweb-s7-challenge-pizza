import React from "react";
import ReactDOM from "react-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom/";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
