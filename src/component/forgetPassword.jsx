import React from "react";
import "../CSS/forget.css";
import forgotPassword from "../services/userServices";
import { TextField, Card, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      snackbarMsg: "",
      snackbarOpen: false,
    };
  }
  handleOnChange = (event) => {
    this.setState({ email: event.target.value });
  };
  validation = () => {
    if (this.state.email !== "") {
      if ( /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) ) {
        const data = {
          email: this.state.email,
        };
        forgotPassword(data)
          .then((res) => {
            if (res === undefined) {
              this.setState({snackbarOpen: true, snackbarMsg: "Check your E-Mail" });
                setTimeout(() => {
                this.props.history.push("/login");
              }, 2000);
              return;
            } else {
              this.setState({  snackbarOpen: true,snackbarMsg: "Invalid Email-ID" });
              }
          })
          .catch((err) => {
            this.setState({ snackbarOpen: true,snackbarMsg: err });
           });
      } else {
        this.setState({snackbarOpen: true, snackbarMsg: "invalid e-mail pattern" });
       }
    } else {
      this.setState({snackbarOpen: true, snackbarMsg: "Enter Your E-Mail" });
      }
  };
  handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      snackbarOpen: false,
    });
  };

  render() {
    return (
      <div className="forget_Form">
        <Card class="forget_Container">
          <Typography className="app_name" variant="h5" color="textSecondary">
          <span style={{ color: "Blue" }}>F</span>
                  <span style={{ color: "Red" }}>U</span>
                  <span style={{ color: "Yellow" }}>N</span>
                  <span style={{ color: "Blue" }}>D</span>
                  <span style={{ color: "Green" }}>O</span>
                  <span style={{ color: "Red" }}>O</span>
          </Typography>
          <div className="login"> Find Your Email</div>
          <div className="enterEmail">Enter your registered EMail</div>
          <Snackbar
            id="snackbar_color"
            anchorOrigin={{vertical: "bottom",horizontal: "center"}}
            autoHideDuration={3000}
            open={this.state.snackbarOpen}
            message={<span id="message-id">{this.state.snackbarMsg}</span>}
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
            <TextField required label="email"  variant="outlined"
              type="text"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="set_Button">
            <Button id="styled_component" color="primary"  variant="contained"
                type="submit"
                onClick={this.validation}
            >
              NEXT
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default ForgetPassword;