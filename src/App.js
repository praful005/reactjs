import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';

import logo from './logo.svg';
import {
  HomePage,
  AboutPage,
  ForgotPasswordPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from "./Pages";

import Default from './Layout/Default';
import Blank from './Layout/Blank';

const AppRoute = ({ component:Component,layout:Layout,...rest}) => (
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

// import './App.css';

function App() {
  return (
      <Router>
          <AppRoute exact path="/" exact layout={Default} component={HomePage} />
          <AppRoute exact path="/about" exact layout={Default} component={AboutPage} />
          <AppRoute exact path="/profile" exact layout={Default} component={ProfilePage} />
          <AppRoute exact path="/forgot-password" layout={Blank} component={ForgotPasswordPage} />
          <AppRoute exact path="/login" layout={Blank} component={LoginPage} />
          <AppRoute exact path="/register" layout={Blank} component={RegisterPage} />
          {/* <Route component={Error404} /> */}
      </Router>
  );
}

export default App;
