import React,{Component} from 'react';
import './App.css';
import Registration from "./component/registration";
import Login from "./component/login";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
 

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>  
          <Route path="/register" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
         </Switch>
      </Router>
    );
  }
}

 
export default App;
