import React, { useContext } from 'react';
import {Container} from 'react-bootstrap';
import CoxsBazar from '../../utilities/Image/Sajek.png';
import Sreemongol from '../../utilities/Image/Sreemongol.png';
import sundorbon from '../../utilities/Image/sundorbon.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Home.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:150,
    
  },
  
}));

const Home = () => {
    
    const classes = useStyles();
    return (

    <div className={classes.root}>
      
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
          <div>
              <h3 className="title">COX'S BAZAR</h3>
              <p className="description">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
              <button className="btn btn-warning">Booking</button>
          </div>
        </Grid>
        <Grid item md={7}  container spacing={2}>
        <Grid item xs={12} sm={4}  md={4} className="image-container">
        <Link to='/booking/1'><img className="image" src={CoxsBazar} alt="CoxsBazar"/></Link>
        <div class="image-text">COX'S BAZAR</div>
        </Grid>
        <Grid item xs={12} sm={4}  md={4} className="image-container">
        <Link to='/booking/2'><img className="image" src={Sreemongol} alt="Sreemongol"/></Link>
        <div class="image-text">SREEMONGOL</div>
        </Grid>
        <Grid item xs={12} sm={4}  md={4} className="image-container">
        <Link to='/booking/3'><img className="image" src={sundorbon} alt="sundorbon"/></Link>
        <div class="image-text">SUNDORBON</div>
        </Grid>
        </Grid>
      </Grid>
      </Container>
    </div>
    );
};

export default Home;