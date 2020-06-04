import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import '../CSS/Dashboard.css';
import Keeplogo from '../assets/KeepLogo.png';
import Card from '@material-ui/core/Card';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ViewAgendaSharpIcon from '@material-ui/icons/ViewAgendaSharp';
import {Tooltip} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Profile from '../component/Profile';
import CloseIcon from "@material-ui/icons/Close";

const theme = createMuiTheme ({});

export class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      search: "",
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

  render () {
    return (
      <div className="maindashboard">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" style={{backgroundColor: 'white'}}>
            <Toolbar style={{color: 'black'}}>
              <IconButton  title="Main menu"  edge="start"   color="inherit"  aria-label="menu">
                    <MenuIcon />
              </IconButton>
              
              <div>
                <img src={Keeplogo} alt="Kepp Logo" />
              </div>
              <Typography
                className="keep"
                variant="h5"
                style={{color: 'grey', marginLeft: '1%'}}
              >
                Fundoo
              </Typography>
              <Card className="card">
                <div
                  className="search"
                  style={{marginLeft: '%', height: '7vh'}}
                >
                  <SearchIcon className="icon" />
                  <InputBase
                    style={{width: '100vh', marginLeft: '3%'}}
                    placeholder="Search"
                    value={this.state.search} 
                    onChange={this.handleChangeSearch}
                    inputProps={{'aria-label': 'search'}}
                  />
                  <Tooltip title="Clear search" arrow>
                      <IconButton onClick={this.clearSearch}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                </div>
              </Card>

              <Tooltip
                title="Refresh"
                style={{color: 'grey', marginLeft: '10%'}}>
                <RefreshOutlinedIcon />
              </Tooltip>

              <Tooltip title="List View"
              style={{color: 'grey', marginLeft: '1.7%'}}>
                <ViewAgendaSharpIcon />
              </Tooltip>

              <Tooltip title="Settings"
              style={{color: 'grey', marginLeft: '1.7%'}}>
                <SettingsOutlinedIcon />
              </Tooltip>

              <Tooltip title="Fundoo apps"
                       style={{color: 'grey', marginLeft: '3.5%',marginRight:'1%'}}>
              <AppsIcon/>
              </Tooltip>
               
              <Tooltip title="Fundoo Account">
                <Profile PropsDashboard={this.props} />
              </Tooltip>
            </Toolbar>
          </AppBar>


          <AppBar className="card1"  style={{backgroundColor: 'white'}}>

          </AppBar>

        </MuiThemeProvider>
      </div>
    );
  }
}
export default Dashboard;