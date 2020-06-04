import React ,{Component}from "react";
import {AppBar,IconButton,Tooltip, Typography,InputBase,Card,}
from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import keep from "../assets/KeepLogo.png";
import "../CSS/Dashboard.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Logout from "@material-ui/icons/ExitToApp";

 
 
  
class Dashboard extends  Component{
    constructor(props) {
        super(props);
        this.state = {
          headerName: "",
          search: "",
          profileImage: localStorage.getItem("userProfileImage"),
         };
         
    }
    clearSearch = () => {
      this.setState({
        search: "",
      });
    };
    handleChangeSearch = (event) => {
      this.setState({
        search: event.target.value,
      });
    };

    handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");
      this.props.history.push("/login");
    };
    
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
                                <span style={{ color: "White" }}>F</span>
                                <span style={{ color: "Red" }}>U</span>
                                <span style={{ color: "Yellow" }}>N</span>
                                <span style={{ color: "White" }}>D</span>
                                <span style={{ color: "Orange" }}>O</span>
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
                  <Card id="appBar_card" >
                      <Tooltip title="Search" arrow>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </Tooltip>
                    <InputBase
                      placeholder="Search"
                      value={this.state.search} 
                      onChange={this.handleChangeSearch}
                      fullWidth
                    />
                    <Tooltip title="Clear search" arrow>
                      <IconButton onClick={this.clearSearch}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                     
                  </Card>
                  <div className="appicon">
                      <Tooltip title="logout">
                        <IconButton onClick={this.handleLogout}>
                          <Logout />
                        </IconButton>
                      </Tooltip>
                  </div>
                 
                </div>
              </AppBar>
               
            </AppBar>
             
          </div>
        );
    }
}

export default Dashboard;