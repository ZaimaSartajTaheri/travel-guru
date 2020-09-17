import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import hotelsData from '../../fakeData'
import Hotel from '../Hotel/Hotel';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:150,
    },
    
  }));

const Hotels = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [hotels,setHotels]=useState(hotelsData);
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return (
        <div className={classes.root}>
        <Container >
       <Grid container spacing={2}>
         <Grid item xs={12} sm={12} md={5}>
           <div>
               {
                  hotels.map(hotel=><Hotel  hotel={hotel}></Hotel>)
               }
                
               
           </div>
         </Grid>
         <Grid item xs={12} sm={12} md={5}>
            
        
         </Grid>
         
       </Grid>
       </Container>
       
     </div>
    );
};

export default Hotels;

