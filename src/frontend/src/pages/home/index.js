import React from 'react';
import { Route } from 'react-router-dom';
import Controller from './controller';
import { Birds, View } from './view';

export default {
  name: 'home',
  Controller,
  View: { Birds, View },
  Route: <Route exact path="/" component={Controller} />
};
