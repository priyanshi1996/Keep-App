import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SignUp from './SignUp';
import SignIn from './SignIn';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  // signupUser(){
  //   this.props.signupUser();
  // }
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="auto" color="default">
          <Tabs value={value} onChange={this.handleChange} centered 
             variant="fullWidth">
            <Tab label="Sign Up" />
            <Tab label="Sign In" />
          </Tabs>
        </AppBar>
       
        {value === 0 && <TabContainer><SignUp signupUser={this.props.signupUser}/></TabContainer>}
        {value === 1 && <TabContainer><SignIn signupUser={this.props.signupUser}/></TabContainer>}
        
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);