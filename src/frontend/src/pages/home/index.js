import React from "react";
import { Route } from "react-router-dom";
import Controller from "./controller";
import View from "./view";

export default {
  name: "home",
  Controller,
  View,
  Route: <Route exact path="/" component={Controller} />,
};
