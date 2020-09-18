import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import './SignUp.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import facebook from '../../utilities/Icon/fb.png';
import google from '../../utilities/Icon/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createWithEmailPassword, handleFbSignIn, handleGoogleSignIn, initializeFirebaseFramework } from '../firbaseConfig/firebaseManager';
import { UserContext } from '../../App';
initializeFirebaseFramework();
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
   
  }),
);

const SignUp = () => {
  const [user,setUser]=useState({
      isSignedIn:false,
      name:'',
      email:'',
      photo:'',
  })
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/signup" } };
  
  const GoogleSignIn=()=>{
      handleGoogleSignIn()
      .then(res=>{
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
      })
  }
  const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const classes = useStyles();  
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data,e)=>{
    const name=data.firstName+' '+data.lastName;
      
      if(data.email && data.password){
        createWithEmailPassword(name,data.email,data.password)
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);

        })
      }
      e.preventDefault();
    }
  const getPassword=e=>{
    setPassword(e.target.value);
  }
  const getConfirmPassword=e=>{
    setConfirmPassword(e.target.value);
  }
    
  
  return (
    <div className="signUpPage">
      <div className='signUp'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={7}>
              <form className="signUpForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h1>Create Account</h1>
                {user.success && <span className="text-success">Registered Successfully.Please Log in to proceed</span>}
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input className="form-control" type="text" name="firstName" ref={register({ required: true })} />
                  {errors.firstName && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">LastName</label>
                  <input className="form-control" type="text" name="lastName" ref={register({ required: true })} />
                   {errors.lastName && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Username Or Email</label>
                  <input className="form-control" type="text" name="email" ref={register({ required: true ,pattern:/\S+@\S+\.\S+/})} />
                  {errors.email && errors.email.type==="required" && <span className="text-danger">Please Enter Your Email Address</span>}
                  {errors.email && errors.email.type==="pattern" && <span className="text-danger">Invalid Email</span>}
                  {!errors.email && <span className="text-danger">{loggedInUser.error}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" onBlur={getPassword} ref={register({ required: true ,minLength: 6})} />
                    {errors.password && errors.password.type==="required" && <span className="text-danger">Please Enter Your Password</span>}
                    {errors.password && errors.password.type==="minLength" && <span className="text-danger">Password length must be more than 6</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form-control" type="password" name="confirmPassword" onBlur={getConfirmPassword} ref={register({ required: true })} />
                    {errors.confirmPassword && <span className="text-danger">This field is required</span>}
                    { password !== "" && confirmPassword !== "" && password !== confirmPassword && <span className="text-danger">Password don't match</span>
                    }
                  </div>
                  <input type="submit" className='btn btn-warning signUpButton' value="Create Account"/>
                  <p>Already have an account?<Link to="/login"><span className="loginLink">Login</span></Link></p>
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
      <div className='signUpWith'>
        <Button
          variant="contained"
          className='socialIconButton'
          onClick={fbSignIn}>
          <img className="socialIcon" src={facebook} alt='facebook'/> <span className="socialIconText"> Continue with facebook</span>
        </Button>
        <br/>
        <br/>
        <Button
          variant="contained"
          className='socialIconButton'
          onClick={GoogleSignIn}>
          <img className="socialIcon" src={google} alt='google'/><span className="socialIconText"> Continue with google</span>
        </Button>
      </div>
    </div>
      
     );
    
};
export default SignUp;
