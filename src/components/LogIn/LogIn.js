import React, { useContext, useState } from 'react';
import './LogIn.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import facebook from '../../utilities/Icon/fb.png';
import google from '../../utilities/Icon/google.png';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handleFbSignIn, handleGoogleSignIn,signInWithEmailPassword } from '../firbaseConfig/firebaseManager';
import { UserContext } from '../../App';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
  }),
);

const LogIn = () => {
  // const [user,setUser]=useState({
  //   isSignedIn:false,
  //   name:'',
  //   email:'',
  //   photo:'',
  // })

  
const [loggedInUser,setLoggedInUser]=useContext(UserContext);
let history = useHistory();
let location = useLocation();

let { from } = location.state || { from: { pathname: "/" } };
const GoogleSignIn=()=>{
  handleGoogleSignIn()
  .then(res=>{
      // setUser(res);
      setLoggedInUser(res);
      history.replace(from);
  })
}
const fbSignIn = () => {
  handleFbSignIn()
  .then(res => {
    // setUser(res);
    setLoggedInUser(res);
    history.replace(from);
  })

}

const classes = useStyles();  
const { register, handleSubmit,  errors } = useForm();
const onSubmit = (data)=>{
  if(data.email && data.password){
        signInWithEmailPassword(data.email,data.password)
        .then(res=>{
            // setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
  }
  
} 
return (
  <div className="LogInPage">
    <Container>
      <div className='login'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={7}>
              <form className="logInForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h1>Login</h1>
                {<span className="text-danger">{loggedInUser.error}</span>}
                <div className="form-group">
                  <label htmlFor="email">Username or Email</label>
                  <input className="form-control" type="text" name="email" ref={register({ required: true })} />
                  {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input className="form-control" type="password" name="password" ref={register({ required: true ,minLength: 6})} />
                  {errors.password && errors.password.type==="required" && <span className="text-danger">Please Enter Your Password</span>}  
                </div>
                <div className="form-check d-flex">
                  <input type="checkbox" className="form-check-input" id="checkbox"/>
                  <label className="form-check-label mr-auto" htmlFor="checkbox">Remember Me</label>
                  <p className="forgetPassword text-warning">Forget password?</p>
                </div>
                <input type="submit" className='btn btn-warning LogInButton' value="Login"/>
                <p>Don't have an account? <Link to="/signup"><span className="LogInLink">Create an Account</span></Link></p>
              </form>
              
            </Grid>
          </Grid>
        </div>
      </div>
     
      <div className="d-flex">
        <hr className="hr-first"/>
        <p className="or-text">OR</p>
        <hr className="hr-second"/>
      </div>
      <div className='logInWith'>
        <Button
          variant="contained"
          className='socialIconButton'
          onClick={fbSignIn}>
          <img className="socialIcon" src={facebook} alt='facebook'/> <span className="socialIconText">   Continue with facebook</span>
        </Button><br/><br/>
        <Button
          onClick={GoogleSignIn} 
          variant="contained"
          className='socialIconButton'>
          <img className="socialIcon" src={google} alt='google'/><span className="socialIconText"> Continue with google</span>
        </Button>
      </div>
    </Container>
  </div>
    );
};
export default LogIn;

