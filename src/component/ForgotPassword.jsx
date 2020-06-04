import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import '../CSS/ForgotPassword.css';
import {forgotPassword} from '../services/UserService/UserServices';

export class ForgotPassword extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
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

    if (
      !RegExp (
        '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
      ).test (this.state.email)
    ) {
      console.log (errors);
      errors['email'] = '*Enter valid pattern Email id';
      formIsValid = false;
    }
    if (!this.state.email) {
      errors['email'] = '*Enter the Email Id';
      console.log (errors);
      alert (' invalid e-mail');
      formIsValid = false;
    }
    this.setState ({
      errors: errors,
    });
    return formIsValid;
  };

  forgotPasswordForm = () => {
    if (this.validateForm ()) {
      let user = {};
      user.email = this.state.email;
      console.log (user);

      forgotPassword (user)
        .then (Response => {
          console.log (Response, 'Token has been sent to your mail, Please Verify first');
          alert (`Token has been sent to youbr mail, Please Verify it first`);
        })
        .catch (err => {
          console.log (Response, 'Invalid E-mail');
          alert (' invalid e-mail');
        });
    }
  };

  render () {
    return (
      <Card className="forgot" >
        <CardContent>
          <div className="forgotpasswordpage">
            <div className="fundoo">
               <span style={{ color: "Blue" }}>F</span>
               <span style={{ color: "Red" }}>U</span>
               <span style={{ color: "Yellow" }}>N</span>
               <span style={{ color: "Blue" }}>D</span>
               <span style={{ color: "Green" }}>O</span>
               <span style={{ color: "Red" }}>O</span> 
            </div>
            <p className="recoverymail">Enter email for forgot password</p>
            <div className="forgotpasswordemail">
              <TextField required margin="dense" size="small" name="email" label="email"  variant="outlined"
                 id="outlined-required"
                 inputProps={{style: {height: 35,width: 340 },}}
                 onChange={this.axios}
                 error={this.state.errors.email}
                 helperText={this.state.errors.email}
              />
            </div>
            <br />
            <div className="nextbutton">
              <Button color="primary"  variant="contained" 
                 onClick={this.forgotPasswordForm}
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
export default ForgotPassword;