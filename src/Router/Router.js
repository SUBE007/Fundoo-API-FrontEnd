import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "../component/Registration";
import Login from '../component/Login';
import ForgotPassword from "../component/ForgotPassword";
import ResetPassword from "../component/ResetPassword";
import Dashboard from "../component/Dashboard";
import Profile from "../component/Profile";
 
const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Registration} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/resetpassword/:token" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" exact component={Profile} />

   </BrowserRouter>
  );
};

export default Router;
