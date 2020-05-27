import React, { Component } from "react";
import "./CSS/registration.css";
import {withRouter} from "react-router-dom";
import { TextField, Button, Card, IconButton, createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import  userRegistration  from "../services/userServices";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Typography  from "@material-ui/core/Typography";       
       
const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        elevation1: {
         boxShadow: "0px 1px 3px 3px gainsboro"
         
        }
      }
    }
  })

class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
        alertMsgType: 'error',
        snackbarOpen: false,
        snackbarMessage: "",
        service: "",
      };
    }

      handleFName = event => {
        this.setState({ firstName: event.target.value })
      }
      handleLName = event => {
        this.setState({ lastName: event.target.value })
      }
      handleEmail = event => {
        this.setState({ email: event.target.value })
      }
      handlePassword = event => {
        this.setState({ password: event.target.value })
      }
      handleCheckPassword = event => {
        this.setState({ rePassword: event.target.value })
      }  
      
      validation = () => {
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '' && this.state.rePassword !== '') {
          if (/^[a-zA-Z]{2,12}$/i.test(this.state.firstName)) {
            if (/^[a-zA-Z]{2,12}$/i.test(this.state.lastName)) {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
                if (this.state.password === this.state.rePassword && this.state.password.length > 7) {
                  const data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password
                  }
                  userRegistration(data).then(res => {
                    if (res.user) {
                      this.setState({
                        snackbarOpen: true,
                        SnackbarMsg: "Registration Successful"
                      })
                      this.props.history.push("/login");
                    }
                    else {
                      this.setState({
                        snackbarOpen: true,
                        SnackbarMsg: "Some problem occured while Registration"
                      })
                    }
    
                  }).catch(err => {
                    this.setState({
                      snackbarOpen: true,
                      SnackbarMsg: err
                    })
                  }
                  )
                } else {
                  this.setState({
                    snackbarOpen: true,
                    SnackbarMsg: "Invalid password"
                   })
                }
              } else {
                this.setState({
                  snackbarOpen: true,
                  SnackbarMsg: "Invalid e-mail"
                })
              }
            }
            else {
              this.setState({
                snackbarOpen: true,
                SnackbarMsg: "lastName cant contain numbers or special characters"
              })
            }
          } else {
            this.setState({
              snackbarOpen: true,
              SnackbarMsg: "firstName cant contain numbers or special characters"
            })
          }
        }
        else {
          this.setState({
            snackbarOpen: true,
            SnackbarMsg: "please enter all the details"
          })
        }
    }
      handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
          snackbarOpen: false
        })
      };
      
      render() {
        return (
          <MuiThemeProvider theme={theme}>
            <div className="registration_Form">
              <Card class="registration_Container">
                <Typography className="app_name" variant="h5" color="textSecondary">
                  <span style={{ color: "Blue" }}>F</span>
                  <span style={{ color: "Red" }}>U</span>
                  <span style={{ color: "Yellow" }}>N</span>
                  <span style={{ color: "Blue" }}>D</span>
                  <span style={{ color: "Green" }}>O</span>
                  <span style={{ color: "Red" }}>O</span>
                </Typography>
                <Typography className="register_title" variant="h6" color="textSecondary">
                  Create Your Fundoo Account
                </Typography>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  autoHideDuration={2000}
                  open={this.state.snackbarOpen}
                  message={<span id="message-id">{this.state.SnackbarMsg}</span>}
                  action={
                    <IconButton size="small" aria-label="close" color="secondary" onClick={this.handleClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  }
                />
                <div className="text_Div">
                  <div>
                    <TextField
                      required
                      fullWidth variant="outlined"
                      label="firstname"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.handleFName} />
                  </div>
                  <div className="setMargin">
                    <TextField
                      fullWidth
                      required label="lastname"
                      variant="outlined"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleLName} />
                  </div>
                </div>
                <div>
                  <TextField
                    required
                    label="email"
                    fullWidth variant="outlined"
                    type="text" value={this.state.email}
                    onChange={this.handleEmail} />
                </div>
                <div className="text_Div">
                  <div>
                    <TextField
                      required
                      label="password"
                      fullWidth
                      variant="outlined"
                      type="password"
                      value={this.state.password}
                      onChange={this.handlePassword} />
                  </div>
                  <div className="setMargin">
                    <TextField
                      required
                      label="Re-enter password"
                      fullWidth variant="outlined"
                      type="password"
                      value={this.state.rePassword}
                      onChange={this.handleCheckPassword} />
                  </div>
    
                </div>
                <div className="set_Button">
                  <Button id="styled_component"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.validation}
                  >
                    SUBMIT
                   </Button>
                </div>
              </Card>
            </div>
          </MuiThemeProvider>
        )
      }
}  
       
export default withRouter(Registration);    
