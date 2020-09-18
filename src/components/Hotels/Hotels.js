import React, {useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import hotelsData from '../../fakeData/hotels';
import Hotel from '../Hotel/Hotel';
import places from '../../fakeData/place-description';
import './Hotels.css';
import { MapContainer } from './MapContainer';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:100,
    },
    
  }));

const Hotels = () => {
    const classes = useStyles();
    const {imageId}=useParams();
    const place=places.find(place=>place.id===imageId);
    const [hotels,setHotels]=useState(hotelsData);
    const filteredHotels=hotels.filter(hotel=>hotel.placeId===imageId);
    return (
      <div className={classes.root}>
        <Container>
          <h3 className="text-white">{place.name}</h3>
          <Grid container spacing={2}>
          
            <Grid item xs={12} sm={12} md={6}>
              <div>
                  {
                      filteredHotels.map(hotel=><Hotel id={hotel.id} hotel={hotel}></Hotel>)
                  }
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <MapContainer/>
            </Grid>
         </Grid>
        </Container>
      </div>
    );
};

export default Hotels;

