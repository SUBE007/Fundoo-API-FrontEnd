import React, {Component} from 'react';
import "../CSS/Registration.css";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {userRegistration} from "../services/UserService/UserServices";
 

class Registration extends Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      phoneNo: '',
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
    if (!this.state.firstName) {
      errors['firstName'] = '*enter the first name';
      formIsValid = false;
    }
    if (!this.state.lastName) {
      errors['lastName'] = '*enter the last name';
      formIsValid = false;
    }
    if (!RegExp ("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
        .test (this.state.email)
    ) {
      errors['email'] = "*enter valid e-mail id";
    }
    if (!this.state.email) {
      errors['email'] = "*enter the e-mail id";
      formIsValid = false;
    }
    if (!RegExp("^[1-9][0-9]{9}$").test(this.state.phoneNo)) {
        errors['phoneNo'] = "*enter valid phone number";
    }
    if (!this.state.phoneNo) {
        errors['phoneNo'] = "*enter your phone number";
        formIsValid = false
    }
    if (!RegExp("((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!*]).{8,20})").test(this.state.password)) {
        errors['password'] = '*enter the valid password'
        formIsValid = false
    }
    if (!this.state.password) {
        errors['password'] = '*enter the password'
        formIsValid = false
    }
    if (!this.state.confirm) {
        errors['confirm'] = '*enter the confirm password'
        formIsValid = false
    }
    if (this.state.password !== this.state.confirm) {
        errors['confirm'] = '*password doesn\'t match'
        formIsValid = false
    }

    this.setState ({
      errors: errors,
    });
    return formIsValid;
  };

  registrationForm = () => {
    if (this.validateForm ()) {
      let user = {};
      user.firstName = this.state.firstName;
      user.lastName = this.state.lastName;
      user.email = this.state.email;
      user.password = this.state.password;
      user.confirm = this.state.confirm;
      user.phoneNo = this.state.phoneNo;
      console.log (user);

      userRegistration (user)
        .then (Response => {
          console.log (Response, "user registered successfully!!");
          alert ("user registered successfully");
        })
        .catch (error => {
          console.log ('Error', error.response);
          console.log (error.response.data.message, "user registration failed");
          alert (error.response.data.message);
        });
    }
  };

  render () {
    return (
      <Card className="registercard">
        <CardContent>
          <div className="backgroundregister">
            <div className="userregister">
              <div className="userfundoo">
                <span style={{ color: "Blue" }}>F</span>
                <span style={{ color: "Red" }}>U</span>
                <span style={{ color: "Yellow" }}>N</span>
                <span style={{ color: "Blue" }}>D</span>
                <span style={{ color: "Green" }}>O</span>
                <span style={{ color: "Red" }}>O</span> 
              </div>
              <div className="usersignUp">Create your Fundoo Account</div>
              <div className="main" style={{flexDirection: 'row'}}>
                <div>
                  <div className="userfirstlastname">
                    <TextField required margin="dense" size="small" name="firstName" variant="outlined"
                      id="outlined"
                      label="first name"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.firstName}
                      helperText={this.state.errors.firstName}
                    />

                    <TextField required  margin="dense" size="small" name="lastName" variant="outlined"
                      id="outlined"
                      label="last name"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.lastName}
                      helperText={this.state.errors.lastName}
                    />
                  </div>
                  <div className="useremail1">
                    <TextField required  margin="dense" size="small"  name="email"  variant="outlined"
                      id="outlined"
                      label="e-mail"
                      onChange={this.axios}
                      error={this.state.errors.email}
                      helperText={this.state.errors.email}
                    />
                    
                  </div>
                  <div className="phonenumber">
                    <TextField required margin="dense"  name="phoneNo"  variant="outlined"
                      size="small"
                      id="outlined"
                      label="phone number"
                      onChange={this.axios}
                      error={this.state.errors.phoneNo}
                      helperText={this.state.errors.phoneNo}
                    />
                  </div>
                  <div className="userpassword">
                    <TextField required  margin="dense"  size="small" name="password" variant="outlined"
                      id="outlined-adornment-password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="password"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.password}
                      helperText={this.state.errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sytle={{width: '1px'}}>
                            <IconButton
                              onClick={() =>
                                this.setState ({ showPassword: !this.state.showPassword })}
                            >
                            </IconButton> 
                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />

                    <TextField required margin="dense" size="small" name="confirm" variant="outlined"
                      id="outlined-adornment-password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="confirm pass"
                      value={this.state.confirm}
                      onChange={this.axios}
                      error={this.state.errors.confirm}
                      helperText={this.state.errors.confirm}
                      style={{width: '48%'}}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sytle={{width: '1px'}}>
                            <IconButton  onClick={() => this.setState ({showPassword: !this.state.showPassword })} >
                               {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <p className="passwordline">
                    password must contain digits special char alphabets
                  </p>
                  <br />
                  <br />
                  <div className="userbutton">
                    <Button  margin="dense"  color="primary" size="small" variant="contained"
                        onClick={() => this.props.history.push ('/')}
                      >
                      Sign in
                    </Button>
                    <Button   margin="dense" color="primary" size="small" variant="contained"
                       onClick={this.registrationForm} 
                      >
                       SUBMIT
                    </Button>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Registration;