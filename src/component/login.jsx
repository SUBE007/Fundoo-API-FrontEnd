import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../CSS/Login.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardContent from "@material-ui/core/CardContent";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Card from "@material-ui/core/Card";
import { userLogin } from "../services/UserService/UserServices";
import Snackbar from "@material-ui/core/Snackbar";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      showPassword: "",
      snackbarMessage: "",
      snackbarOpen: false,
      errors: {},
    };
  }

  axios = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.password) {
      errors["password"] = "*Enter the password";
      this.setState({
        snackbarOpen: true,
        snackbarMessage: "Enter the password.",
      });
      formIsValid = false;
    }
    if (!this.state.email) {
      errors["email"] = "*Enter the correct email";
      this.setState({
        snackbarOpen: true,
        snackbarMessage: "Enter the correct email",
      });
      formIsValid = false;
    }
    if (this.state.password === "" || this.state.email === "") {
      errors["email"] = "*Please enter all fields";
      console.log(errors);
      this.setState({
        snackbarOpen: true,
        snackbarMessage: "Login Failed! *please enter all fields ",
      });
      formIsValid = false;
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  loginForm = () => {
    if (this.validateForm()) {
      let user = {};
      user.email = this.state.email;
      user.password = this.state.password;

      userLogin(user)
        .then((response) => {
           console.log (response);
           //console.log (response, "user login successfully!!");
          // console.log ('data', response.data.data);
          localStorage.setItem("Token", response.data.message);
          localStorage.setItem("Email", response.data.email);
          localStorage.setItem("FirstName", response.data.firstName);
          localStorage.setItem("LastName", response.data.lastName);
          localStorage.setItem("Profile", response.data.profilePic);
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "*Login Successfull",
          });
          setTimeout(() => {
              this.props.history.push("/dashboard");
         }, 3000);
        })
        .catch((error) => {
          console.log("Error", error.response);
          console.log("*Login failed! invalid credentials");
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "*Login failed! invalid credentials",
          });
          //alert ("*Login failed! invalid credentials");
        });
    }
  };

  render() {
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
              {" "}
              <span>Sign in</span>
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

            <div>
              <div className="usernameLogin">
                <TextField
                  required
                  margin="dense"
                  size="small"
                  name="email"
                  id="outlined-required"
                  variant="outlined"
                  label="Enter email"
                  error={this.state.errors.email}
                  helperText={this.state.errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sytle={{ width: "10px" }}>
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={this.axios}
                />
              </div>

              <div className="password">
                <TextField
                  required
                  size="small"
                  margin="dense"
                  name="password"
                  variant="outlined"
                  id="outlined-adornment-password"
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  error={this.state.errors.password}
                  helperText={this.state.errors.password}
                  style={{ width: "90%" }}
                  onChange={this.axios}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sytle={{ width: "10px" }}>
                        <IconButton
                          onClick={() =>
                            this.setState({
                              showPassword: !this.state.showPassword,
                            })
                          }
                        >
                          {this.state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>

            <div className="flex-container">
              <div onClick={() => this.props.history.push("/register")}>
                <a href="Register">Register </a>
              </div>
              {/*disabled={this.state.disabled} onChange={this.handleChange} */}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginForm}
                >
                  Login
                </Button>
              </div>
            </div>
            <br />
            <div onClick={() => this.props.history.push("/forgotpassword")}>
              <a href="ForgotPassword">ForgotPassword </a>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default Login;
