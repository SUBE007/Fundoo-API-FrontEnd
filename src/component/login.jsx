import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../CSS/Login.css";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {userLogin} from "../services/UserService/UserServices";

export class Login extends Component {
  constructor (props) {
    super (props);
     this.state = {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      showPassword: '',
      errors:{},
    };
  }

  axios = event => {
    this.setState ({
        [event.target.name]: event.target.value,});
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;
     
    if (!this.state.password) {
        errors['password'] = '*enter the password'
        formIsValid = false;
        
    }
    if (!this.state.email) {
        errors['email'] = '*enter the correct email'
        formIsValid = false
    }
    if (this.state.password ===''|| this.state.email==='') {
        errors['email'] = '*please enter all fields'
        console.log (errors);
        alert ("Login Failed! *please enter all fields");
        formIsValid = false
    }

    this.setState ({
        errors: errors,
    });
    return formIsValid;
  };


  loginForm = () => {
   if (this.validateForm ()) {
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;
    console.log (user);
    
    userLogin (user)
      .then (Response => {
        console.log (Response, "user login successfully!!");
        // console.log (Response);
        // console.log ('data', Response.data.data);
        // localStorage.setItem ('Token', Response.data.message);
        // localStorage.setItem ('Email', Response.data.data.email);
        // localStorage.setItem ('FirstName', Response.data.data.firstName);
        // localStorage.setItem ('LastName', Response.data.data.lastName);
        // localStorage.setItem ('Profile', Response.data.data.profilePic);
        alert ("*Login Successfull");
        this.props.history.push("/dashboard/notes");
      })
      .catch (error => {
        console.log ('Error', error.response);
        console.log (error.response.data.message, "*Login failed! invalid credentials");
        alert (error.response.data.message);
      });
     }
  };

  render () {
    return (
      <Card className="login">
        <CardContent>
          <div className="loginpage">
            <div className="fundoo">
                <span style={{ color: "Blue" }}>F</span>
                <span style={{ color: "Red" }}>U</span>
                <span style={{ color: "Yellow" }}>N</span>
                <span style={{ color: "Blue" }}>D</span>
                <span style={{ color: "Green" }}>O</span>
                <span style={{ color: "Red" }}>O</span> 
            </div>

            < div className="signInLogin">
              {' '}
              <span>Sign in</span>
            </div>

            <div>
               <div className="usernameLogin">
                <TextField required margin="dense" size="small"  name="email"  id="outlined-required" variant="outlined"
                  label="enter email"
                  error={this.state.errors.email}
                  helperText={this.state.errors.email}
                  inputProps={{style: {height: 35 }, }}
                  onChange={this.axios}
                />
              </div>

              <div className="password">
                <TextField required size="small" margin="dense" name="password"  variant="outlined"
                  id="outlined-adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="password"
                  error={this.state.errors.password}
                  helperText={this.state.errors.password}
                  style={{width: '90%'}}
                  inputProps={{
                    style: {height: 35},
                     endAdornment: (
                      <InputAdornment position="end" sytle={{width: '1px'}}>
                        <IconButton  onClick={() => this.setState ({showPassword: !this.state.showPassword }) } >
                           {this.state.showPassword ? <Visibility /> : <VisibilityOff />} 
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={this.axios}
                />
              </div>
            
            </div>
  
            <div className="flex-container">
              <div>
                <Button  color="primary" variant="contained"
                   onClick={() => this.props.history.push ('/register')}
                >
                  Register
                </Button>
              </div>
              <div>
                <Button  variant="contained"  color="primary"
                   onClick={this.loginForm}
                  >
                  Login
                </Button>
              </div>
            </div>
            <br />
            <div  onClick={() => this.props.history.push ('/forgotpassword')} >
              < a href="ForgotPassword" >ForgotPassword </a>
            </div>
          
        </div>
        </CardContent>
      </Card>
    );
  }
}
export default Login;
