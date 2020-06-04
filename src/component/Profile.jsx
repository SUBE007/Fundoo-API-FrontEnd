import React from 'react';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles (theme => ({
  typography: {
    padding: theme.spacing (5),
  },
}));

export default function SimplePopover (props) {
  const classes = useStyles ();
  const [anchor, setAnchor] = React.useState (null);

  const handleClick = event => {
    setAnchor (event.currentTarget);
  };

  const handleClose = () => {
    setAnchor (null);
  };

  const handleLoginChange = () => {
    console.log (props);
    props.PropsDashboard.history.push ('/');
  };
  const open = Boolean (anchor);
  const id = open ? 'simple-popover' : null;

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Tooltip title="Fundoo Account">
          <Avatar onClick={handleClick} />
        </Tooltip>
      </div>
      <Popover
        // style={{height: '100%'}}
        id={id}
        open={open}
        anchor={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography className={classes.typography}>
          <div className="mainprofile">
            <div style={{justifyContent: 'center', display: 'flex', top: '3%'}}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <CameraAltIcon
                    style={{backgroundColor: 'white', borderRadius: '50%'}}
                  />
                }
              >
                <Avatar style={{width: '77px', height: '77px'}} />
              </Badge>
            </div>

            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                top: '2%',
                padding: '2%',
              }}
            />
            <div
              className="profileaccount"
              style={{
                backgroundColor: '#e0e0e0',
                padding: '3% ',
                paddingBottom: '3%',
                borderRadius:'10px'
              }}
            >
              Manage Your Fundoo Account
            </div>
            <br/>
            {/* <Divider /> */}

            <Divider />
            <div style={{marginTop: '5%'}}>
            <PersonAddIcon/>
              <MenuItem
                title="Fundoo Account"
                onClick={handleLoginChange}
                style={{justifyContent: 'center', display: 'flex'}}
              >
                Add another account
              </MenuItem>

            </div>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                padding: '9%',
              }}
            >
              <Button
                variant="contained"
                color="white"
                style={{justifyContent: 'center', display: 'flex'}}
                onClick={handleLoginChange}
              >
                Sign out
              </Button>
            </div>
            <Divider />
            <div className="profilefooter">
             <p>Privacy Policy .Terms of Service</p>  
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}