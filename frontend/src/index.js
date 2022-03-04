import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DDContext from "./context/DDProvider";

ReactDOM.render(
  <Router>
    <DDContext>
      <App />
    </DDContext>
  </Router>,
  document.getElementById("root")
);
