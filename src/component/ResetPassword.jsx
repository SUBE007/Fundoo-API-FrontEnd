import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from "@material-ui/core/Snackbar";
import Card from '@material-ui/core/Card';
import '../CSS/ResetPassword.css';
import {resetPassword} from '../services/UserService/UserServices';

export class ResetPassword extends Component {
  constructor (props) {
    super (props);
    this.state = {
      password: '',
      confirmpassword: '',
      showPassword: '',
      snackbarMessage: "",
      snackbarOpen: false,
      errors: {},
     };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;
     
    if (!RegExp("((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!*]).{8,20})").test(this.state.password)) {
        errors['password'] = '*Enter the valid password'
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Enter the valid password",
        });
        formIsValid = false
    }
    if (!this.state.password) {
        errors['password'] = '*Enter the password'
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Enter the password",
        });
        formIsValid = false
    }
    if (!RegExp("((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!*]).{8,20})").test(this.state.confirmpassword)) {
      errors['confirmpassword'] = '*Enter the valid confirm password'
      this.setState({
        snackbarOpen: true,
        snackbarMessage: "*Enter the valid confirm password",
      });
      formIsValid = false
    }
    if (!this.state.confirmpassword) {
        errors['confirmpassword'] = '*Enter the confirm password'
        this.setState({
          snackbarOpen: true,
          snackbarMessage: '*Enter the confirm password',
        });
        formIsValid = false
    }
    if (this.state.password !== this.state.confirmpassword) {
        errors['confirmpassword'] = '*Password doesn\'t match'
        this.setState({
          snackbarOpen: true,
          snackbarMessage: '*Password doesn\'t match',
        });
        formIsValid = false
    }

    this.setState ({
      errors: errors,
    });
    return formIsValid;
  };

  resetPasswordForm = () => {
    if (this.validateForm ()) {
        let token = localStorage.getItem ("Token");
        console.log (token, "token");
        let user = {};
        user.password = this.state.password;
        user.confirmpassword = this.state.confirmpassword;
        console.log (user);

        resetPassword (user,token)
        .then (Response => {
          console.log ("Password Successfully Changed");
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "*Password Successfully Changed",
          });
          //alert ("*Password Successfully Changed");
        })
        .catch (error => {
          console.log ('Error', error.response);
          console.log (error.response.data.message, "Failed To Change the Password");
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "*Failed To Change the Password",
          });
          //alert (error.response.data.message,"*Failed To Change the Password");
         });
    }
  };

  render () {
    return (
      <Card className="reset">
        <CardContent>
          <div className="resetpasswordpage">
            <div className="fundoo4">
            <span style={{ color: "Blue" }}>F</span>
               <span style={{ color: "Red" }}>U</span>
               <span style={{ color: "Yellow" }}>N</span>
               <span style={{ color: "Blue" }}>D</span>
               <span style={{ color: "Green" }}>O</span>
               <span style={{ color: "Red" }}>O</span> 
            </div>
            <div className="resetpassword">
              {' '}
              <span>Reset Password</span>
            </div>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.snackbarOpen}
              autoHideDuration={3000}
              onClose={() => this.setState({ snackbarOpen: false })}
              message={this.state.snackbarMessage}
            ></Snackbar>

            <br />
           
            <div className="passwordtext">
              <TextField required margin="dense" label="Password"  size="small"  name="password"  variant="outlined"
                id="outlined-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                inputProps={{style: {width: 340}, }}
                error={this.state.errors.password}
                helperText={this.state.errors.password}
                onChange={this.axios}
              />
            </div>
            {/* <br /> */}
            <div className="confirmpasswordtext">
              <TextField required margin="dense"  label="Confirm Password"  size="small" name="confirmpassword" variant="outlined"
                id="outlined-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                error={this.state.errors.confirmpassword}
                helperText={this.state.errors.confirmpassword}
                onChange={this.axios}
                inputProps={{ style: {width: 340},
                endAdornment: (
                  <InputAdornment position="end" sytle={{width: '10px'}}>
                        <IconButton  onClick={() => this.setState ({showPassword: !this.state.showPassword }) } >
                           {this.state.showPassword ? <Visibility /> : <VisibilityOff />} 
                        </IconButton>
                      </InputAdornment>
                    ),
                }}
              />
            </div>
            <br />
            <div className="nextbutton">
              <Button  color="primary" variant="contained"
                  onClick={this.resetPasswordForm}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default ResetPassword;
