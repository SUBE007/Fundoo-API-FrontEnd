import React ,{Component}from "react";
import {AppBar,IconButton,Tooltip, createMuiTheme,Typography, }
from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import keep from "../assets/KeepLogo.png";
import "../CSS/Dashboard.css";

const theme = createMuiTheme({
    overrides: {
      MuiPopover: {
        paper: { width: "30%",},
       },
    },
  });
    
 
class Dashboard extends  Component{
    constructor(props) {
        super(props);
        this.state = {
          headerName: "",
        };
      }
    
      render() {
        return (
          <div>
            <AppBar id="appBar_decor">
              <AppBar className="appBar_flex">
                <div className="menu_andname">
                  <Tooltip title="Main Menu" arrow>
                    <IconButton  class="reduce_padding" id="butone"
                        onClick={this.handleClick}
                    >
                    <MenuIcon id="reduceButtonSize" />
                    </IconButton>
                  </Tooltip>
                  <div className="keepImageSpace">
                        {this.state.headerName === "" ? (
                        <React.Fragment>
                            <img className="keep_img" src={keep} alt="F" />
                            <Typography  id="fundoo" variant="h5" 
                            style={{marginLeft: "1%",}}
                             >
                            <div className="fundoo1">
                                <span style={{ color: "Blue" }}>F</span>
                                <span style={{ color: "Red" }}>U</span>
                                <span style={{ color: "Yellow" }}>N</span>
                                <span style={{ color: "Blue" }}>D</span>
                                <span style={{ color: "Green" }}>O</span>
                                <span style={{ color: "Red" }}>O</span> 
                            </div>
                            </Typography>
                        </React.Fragment>
                        ) 
                        : (
                        <Typography id="fundoo" variant="h5" color="textSecondary">
                            {this.state.headerName}
                        </Typography>
                        )}
                  </div>
                </div>
              </AppBar>

            </AppBar>
          </div>
        );
    }
}

export default Dashboard;