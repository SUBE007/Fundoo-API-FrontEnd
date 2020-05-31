import React, {Component} from 'react';
import '../CSSFile/Registration.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {userRegistration} from '../Services/UserService/UserServices';
import Logo from '../Assets/Logo.png';

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
      errors['firstName'] = '*Enter the First Name';
      formIsValid = false;
    }
    if (!this.state.lastName) {
      errors['lastName'] = '*Enter the Last Name';
      formIsValid = false;
    }
    if (
      !RegExp (
        '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
      ).test (this.state.email)
    ) {
      errors['email'] = '*Enter valid Email id';
    }
    if (!this.state.email) {
      errors['email'] = '*Enter the Email Id';
      formIsValid = false;
    }
    if (!RegExp("^[1-9][0-9]{9}$").test(this.state.phoneNo)) {
        errors['phoneNo'] = '*Enter valid Phone Number'
    }
    if (!this.state.phoneNo) {
        errors['phoneNo'] = '*Enter your Phone Number'
        formIsValid = false
    }

    if (!RegExp("((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!*]).{8,40})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the password'
            formIsValid = false
        }
        if (!this.state.confirm) {
            errors['confirmPassword'] = '*Enter the confirm password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirm) {
            errors['confirmPassword'] = '*Password doesn\'t match'
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
          console.log (Response, 'User Registered successfully!!');
          alert (`User Registered successfully`);
        })
        .catch (error => {
          console.log ('Error', error.response);
          console.log (error.response.data.message, 'User Registration failed');
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
                    <TextField
                      // required
                      margin="dense"
                      size="small"
                      name="firstName"
                      id="outlined"
                      label="First Name"
                      variant="outlined"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.firstName}
                      helperText={this.state.errors.firstName}
                    />

                    <TextField
                      margin="dense"
                      size="small"
                      name="lastName"
                      id="outlined"
                      label="Last Name"
                      variant="outlined"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.lastName}
                      helperText={this.state.errors.lastName}
                    />
                  </div>
                  <div className="useremail1">
                    <TextField
                      margin="dense"
                      size="small"
                      name="email"
                      id="outlined"
                      label="Email"
                      variant="outlined"
                      onChange={this.axios}
                      error={this.state.errors.email}
                      helperText={this.state.errors.email}
                    />
                    <p className="passwordline">
                      You'll need to confirm that this email belongs to you
                    </p>
                  </div>
                  <div className="phonenumber">
                    <TextField
                      margin="dense"
                      size="small"
                      name="phoneNo"
                      id="outlined"
                      label="Phone Number"
                      variant="outlined"
                      onChange={this.axios}
                      error={this.state.errors.phoneNo}
                      helperText={this.state.errors.phoneNo}
                    />
                    <p className="passwordline">Do not add 0 in front</p>
                    <br />
                  </div>
                  <div className="userpassword">
                    <TextField
                      size="small"
                      id="outlined-adornment-password"
                      variant="outlined"
                      name="password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="password"
                      margin="dense"
                      style={{width: '48%'}}
                      onChange={this.axios}
                      error={this.state.errors.password}
                      helperText={this.state.errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sytle={{width: '1px'}}>
                            <IconButton
                              onClick={() =>
                                this.setState ({
                                  showPassword: !this.state.showPassword,
                                })}
                            >
                              {this.state.showPassword
                                ? <Visibility />
                                : <VisibilityOff />}
                            </IconButton>

                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />

                    <TextField
                      size="small"
                      margin="dense"
                      name="confirm"
                      id="outlined-adornment-password"
                      variant="outlined"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label=" confirm "
                      value={this.state.confirm}
                      onChange={this.axios}
                      error={this.state.errors.confirm}
                      helperText={this.state.errors.confirm}
                      style={{width: '48%'}}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sytle={{width: '1px'}}>
                            <IconButton
                              onClick={() =>
                                this.setState ({
                                  showPassword: !this.state.showPassword,
                                })}
                            >
                              {this.state.showPassword
                                ? <Visibility />
                                : <VisibilityOff />}
                            </IconButton>

                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <p className="passwordline">
                    Use 8 or more characters with mix of letters,numbers & symbols
                  </p>
                  <br />
                  <br />
                  <div className="userbutton">
                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => this.props.history.push ('/')}
                    >
                      Sign in instead
                    </Button>

                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={this.registrationForm}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <div>
                  <img src={Logo} width="80%" height="60%" alt="hello" />
                  <p> One account.All of Fundoo working for you</p>
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