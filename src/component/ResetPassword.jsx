import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import '../CSSFile/ResetPassword.css';
import {resetPassword} from '../Services/UserService/UserServices';

export class ResetPassword extends Component {
  constructor (props) {
    super (props);

    this.state = {
      password: '',
      confirm: '',
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  resetPasswordForm = () => {
    let token = localStorage.getItem ('Token');
    console.log (token, 'token');

    let user = {};
    user.password = this.state.password;
    user.confirm = this.state.confirm;

    resetPassword (token, user)
      .then (Response => {
        console.log ('Password Successfully Changed');
        alert (`Password Successfully Changed`);
      })
      .catch (err => {
        console.log ('Failed To Change the Password');
        alert (`Failed To Change the Password`);
      });
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
            <br />
            <div className="resetpasswordtext">
              <TextField
                margin="dense"
                size="small"
                name="password"
                id="outlined-required"
                label="password"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 35,
                    width: 340,
                  },
                }}
                onChange={this.axios}
              />
            </div>
            <div className="resetpasswordtext">
              <TextField
                margin="dense"
                size="small"
                name="confirm"
                id="outlined-required"
                label="confirm"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 35,
                    width: 340,
                  },
                }}
                onChange={this.axios}
              />
            </div>
            <br />
            <div className="nextbutton">
              <Button
                variant="contained"
                color="primary"
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
