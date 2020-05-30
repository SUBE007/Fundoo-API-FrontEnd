//import React from "react";
import React,{ Component } from "react"; 
import "./CSS/login.css";
import { TextField, Card, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import login from "../services/userServices";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

class Login extends  Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        SnackbarMsg: "",
        snackbarOpen: false,
      };
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value });
      };
      handlePassword = (event) => {
        this.setState({ password: event.target.value });
      };
      handleClose = (reason) => {
        if (reason === "clickaway") {
          return;
        }
         this.setState({ snackbarOpen: false });
       };
      forget = (reason) => {
        if (reason === "clickaway") {
          return;
        }
        this.props.history.push("/forgetPassword");
      };

      validation = () => {
          const data = {
          email: this.state.email,
          password: this.state.password,
        };
        if (this.state.email !== "") {
          if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) ) {
            if (this.state.password !== "") {
              login(data)
                .then((res) => {
                  console.log("Hello Sube!", res);
                  if (res.user) {
                    this.setState({snackbarOpen: true, SnackbarMsg: "login Successful" });
                    this.props.history.push("/home");
                    console.log(this.state);
                  }else{
                    this.setState({snackbarOpen: true,SnackbarMsg: "login failed check e-mail or password" });
                   }
                })
                .catch((err) => { console.log(err); });
              } else {
              this.setState({ snackbarOpen: true, SnackbarMsg: "please enter your password" });
             }
          } else {
            this.setState({snackbarOpen: true,SnackbarMsg: "invalid email address" });
           }
        } else {
          this.setState({snackbarOpen: true,SnackbarMsg: "please enter your email" });
          }
      };

      render() {
        return (
          <div className="login_Form">
            <Card class="login_Container">
              <Typography className="app_name" variant="h5" color="textSecondary">
              <span style={{ color: "Blue" }}>F</span>
                  <span style={{ color: "Red" }}>U</span>
                  <span style={{ color: "Yellow" }}>N</span>
                  <span style={{ color: "Blue" }}>D</span>
                  <span style={{ color: "Green" }}>O</span>
                  <span style={{ color: "Red" }}>O</span>
              </Typography>
              <div className="login">Sign in Page</div>
              <Snackbar id="snackbar_color"
                anchorOrigin={{  vertical: "bottom", horizontal: "center" }}
                autoHideDuration={2000}
                open={this.state.snackbarOpen}
                message={<span id="message-id">{this.state.SnackbarMsg}</span>}
                action={
                  <React.Fragment>
                    <IconButton size="small" aria-label="close" color="secondary"
                        onClick={this.handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
    
              <div className="set_Div" data-test="EMAIL">
                <TextField  required label="email" variant="standard"  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              <div className="set_Div">
                <TextField required label="password" variant="standard" type="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <div className="forget_style" onClick={this.forget} >
                <span>forgot password</span>
              </div>
              <div className="forget_style" onClick={this.forget} >
                <span>Create Account</span>
              </div>

              <div className="set_Button">
                <Button id="styled_component" color="primary" variant="contained"
                    type="submit"
                    onClick={this.validation}
                >
                  login
                </Button>
              </div>
            </Card>
          </div>
        );
      }
    }
    export default Login;