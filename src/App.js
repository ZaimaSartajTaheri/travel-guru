import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Hotels from './components/Hotels/Hotels';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn'
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { MapContainer } from './components/Hotels/MapContainer';
export const UserContext=createContext();
export const BookingData=createContext();



function App() {
  const [loggedIn,setLoggedIn]=useState({});
  
  
  return (
    <UserContext.Provider value={[loggedIn,setLoggedIn]} >
      
      
      <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/mapcontainer'>
            <MapContainer></MapContainer>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          
          <Route path='/booking/:imageId'>
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/hotels/:imageId">
              <Hotels></Hotels>
          </PrivateRoute>
          
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </div>
      </UserContext.Provider>
      
    
  );
}

export default App;
