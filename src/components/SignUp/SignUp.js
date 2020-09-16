import React from 'react';
import './SignUp.css';
import { useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import { InputLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import facebook from '../../utilities/Icon/fb.png';
import google from '../../utilities/Icon/google.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const SignUp = () => {
    const classes = useStyles();    
    return (
      <div>
            <div className='signUp'>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid  md={7}>
        <form className="signUpForm" noValidate autoComplete="off">
                <h1>Create Account</h1>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="First Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Last Name    "
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Username or Email"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Confirm Password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

      

                  

                
        <button className='btn btn-warning signUpButton'>Create Account</button>
        <p>Already have an account?<span className="loginLink">Login</span></p>

      
               </form>


                
        </Grid>
      </Grid>
    </div>
            </div>
           <div className='signUpWith'>
           <Button
        variant="contained"
        className='socialIconButton'

        
      ><img className="socialIcon" src={facebook} alt='facebook'/> <span className="socialIconText"> Countinue with facebook</span>
      </Button><br/><br/>
      <Button
        variant="contained"
        className='socialIconButton'
      >   <img className="socialIcon" src={google} alt='google'/><span className="socialIconText"> Countinue with google</span>
      </Button>
           </div>
      </div>
    );
};
export default SignUp;
