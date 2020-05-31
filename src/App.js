import React,{Component} from 'react';
import './App.css';
import Registration from "./component/registration";
import Login from "./component/login";
import ForgotPassword from "./component/forgetPassword";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
 

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>  
          <Route path="/register" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgetpassword" component={ForgotPassword} />
          <Route path="/" exact component={Login} />
         </Switch>
      </Router>
    );
  }
}

 
export default App;
