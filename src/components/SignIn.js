import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {signin} from '../routes/FetchApis';
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                id:"",
                password:""
            }
            this.handleOnChange = this.handleOnChange.bind(this);
            this.handleOnClick = this.handleOnClick.bind(this);
        }
        handleOnChange(e){
            if("id" === e.target.id){
                this.setState({
                    id : e.target.value
                })
            }
            else if("name" === e.target.id){
                this.setState({
                    name : e.target.value
                })
            }
            else if("password" === e.target.id){
                this.setState({
                    password : e.target.value
                })
            }    
        }
        async handleOnClick(e){
            e.preventDefault();
            let isSave = true;
            if(this.state.id===""){
              alert('Email can not be empty');
              isSave = false;
            }
            if(isSave && this.state.password===""){
              alert('Password can not be empty');
              isSave = false;
            }
            if(isSave){
              const response= await signin(this.state.id,this.state.password);
              if(response[1]===1)
                  alert("Username and password does not match");
              else{
                  this.props.signupUser(response[0]);
              }
          }
        }
        
        render(){
            const { classes } = this.props;
            return (
                <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="id" name="email" autoComplete="email" onChange={this.handleOnChange} value={this.state.id} autoFocus />
                  </FormControl>
                  
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleOnChange} value={this.state.password}/>
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className = {classes.submit}
                    onClick = {this.handleOnClick}
                    // onClick = {this.props.func(this.state.id,this.state.name,this.state.password)}
                  >
                    Sign in
                  </Button>
                </form>
              </Paper>
            </main>
          );
      }

}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);