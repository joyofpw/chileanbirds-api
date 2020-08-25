import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";

import HomePage from "./pages/home";

const routes = (
  <Router>
    <Switch>{HomePage.Route}</Switch>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
