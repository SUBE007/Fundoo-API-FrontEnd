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

      handleFName = (event) => {
        this.setState({ firstName: event.target.value })
      };
      handleLName = (event) => {
        this.setState({ lastName: event.target.value })
      };
      handleEmail = (event) => {
        this.setState({ email: event.target.value })
      };
      handlePassword = (event) => {
        this.setState({ password: event.target.value })
      };
      handleCheckPassword = (event) => {
        this.setState({ rePassword: event.target.value }) 
      }; 
      
      validation = () => {
        if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.password !== "" && this.state.rePassword !== "") {
          if (/^[a-zA-Z]{2,12}$/i.test(this.state.firstName)) {
            if (/^[a-zA-Z]{2,12}$/i.test(this.state.lastName)) {
              if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
                if (this.state.password === this.state.rePassword && 
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(this.state.password)) {
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
                        snackbarMessage: "Registration Successful"
                      });
                       
                    }
                    else {
                      this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "Some problem occured while Registration"
                      });
                    }
    
                  }).catch(err => {
                    this.setState({
                      snackbarOpen: true,
                      snackbarMessage: err
                    });
                  });
                }else {
                  this.setState({
                    snackbarOpen: true,
                    snackbarMessage: "Invalid password"
                   });
                }
              } else {
                this.setState({
                  snackbarOpen: true,
                  snackbarMessage: "Invalid e-mail"
                });
              }
            }
            else {
              this.setState({
                snackbarOpen: true,
                snackbarMessage: "lastName can't contain numbers or special characters"
              });
            }
          } else {
            this.setState({
              snackbarOpen: true,
              snackbarMessage: "firstName can't contain numbers or special characters"
            });
          }
        }
        else {
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "please enter all the details"
          });
        }
    }
      handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
          snackbarOpen: false
        });
      };
      
      render() {
        return (
          <MuiThemeProvider theme={theme}>
            <div className="registration_Form">
              <Card class="registration_Container">
                <Typography className="app_name" variant="h4" color="textSecondary">
                  <span style={{ color: "Blue" }}>F</span>
                  <span style={{ color: "Red" }}>U</span>
                  <span style={{ color: "Yellow" }}>N</span>
                  <span style={{ color: "Blue" }}>D</span>
                  <span style={{ color: "Green" }}>O</span>
                  <span style={{ color: "Red" }}>O</span>
                </Typography>
                <Typography className="register_title" variant="h6" color="warning.main">
                  <strong> Create Your Fundoo Account </strong>
                </Typography>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  autoHideDuration={2000}
                  open={this.state.snackbarOpen}
                  message={<span id="message-id">{this.state.snackbarMessage}</span>}
                  action={
                    <IconButton size="small" aria-label="close" color="secondary" onClick={this.handleClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  }
                />
                <div className="text_Div">
                  <div>
                    <TextField required fullWidth  label="firstname"variant="standard"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.handleFName} />
                  </div>
                   <div className="setMargin">
                    <TextField fullWidth required label="lastname" variant="standard"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleLName} />
                  </div>
                </div>
               
                <div>
                  <TextField required label="email" fullWidth variant="standard"
                     type="text" value={this.state.email}
                     onChange={this.handleEmail} />
                </div>
               
                <div className="text_Div">
                  <div>
                    <TextField required label="password" fullWidth variant="standard"
                      type="password"
                      value={this.state.password}
                      onChange={this.handlePassword} />
                  </div>
                  <div className="setMargin">
                    <TextField required  label="Re-enter password"  fullWidth variant="standard"
                      type="password"
                      value={this.state.rePassword}
                      onChange={this.handleCheckPassword} />
                  </div>
                </div>

                <div className="set_Button">
                  <Button id="styled_component"  color="primary" variant="contained"
                     type="submit"
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
