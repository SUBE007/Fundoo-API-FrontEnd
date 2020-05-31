import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "../component/Registration";
import Login from '../component/Login';
import ForgotPassword from "../component/ForgotPassword";
import ResetPassword from "../component/ResetPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Registration} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/" exact component={Login} />
   </BrowserRouter>
  );
};

export default Router;
