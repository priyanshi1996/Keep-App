import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
// import '../css/Header.css'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      // auth: true,
      anchorEl: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.logout = this.logout.bind(this);
  }
  

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  
  logout = () =>{
    this.setState({ anchorEl: null });
    this.props.logout();
  }

render(){
  const { classes } = this.props;
  const { anchorEl } = this.state;
  const open = Boolean(this.state.anchorEl);
  if(this.props.username!==undefined)
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Notes 
          </Typography>
          
          <Typography variant="h6" color="inherit" className={classes.grow} class="username">
            Hello {this.props.username}
          </Typography>
            <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
               </div>
          {/* <Button color="inherit" className="username">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    );
  else{
    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton className='menuButton' color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className='grow'>
              Notes 
            </Typography>
            
            {/* <Typography variant="h6" color="inherit" className='grow' class="username">
              Hello {this.props.username}
            </Typography> */}

            {/* <Button color="inherit" className="username">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default Header;
export default withStyles(styles)(Header);
