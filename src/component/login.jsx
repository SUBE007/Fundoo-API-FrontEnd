
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
    };
  }

  axios = event => {
    this.setState ({[event.target.name]: event.target.value,});
  };

  loginForm = () => {
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;

    userLogin (user)
      .then (response => {
        console.log (response);
        console.log ('data', response.data.data);
        localStorage.setItem ('Token', response.data.message);
        localStorage.setItem ('Email', response.data.data.email);
        localStorage.setItem ('FirstName', response.data.data.firstName);
        localStorage.setItem ('LastName', response.data.data.lastName);
        localStorage.setItem ('Profile', response.data.data.profilePic);
        alert ("Login Successfull");
        this.props.history.push("/dashboard/notes");
      })
      .catch (error => {
        console.log (error);
        alert ("Login Failed");
      });
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

            <div className="signInLogin">
              {' '}
              <span>Sign in</span>
            </div>
             <div>
              <div className="usernameLogin">
                <TextField required margin="dense" size="small"  name="email"  id="outlined-required" variant="outlined"
                  label="username"
                  inputProps={{
                    style: {
                      height: 35,
                    },
                  }}
                  onChange={this.axios}
                />
              </div>

             <div className="password">
                <TextField required size="small" margin="dense" name="password"  variant="outlined"
                  id="outlined-adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="password"
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
            <Button  variant="contained"  color="primary"
                onClick={() => this.props.history.push ('/forgotpassword')}
            >
              ForgotPassword
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default Login;
