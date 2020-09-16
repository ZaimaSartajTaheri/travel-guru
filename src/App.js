import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Hotels from './components/Hotels/Hotels';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    
      <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/booking/:imageId'>
            <Booking></Booking>
          </Route>
          <Route path="/hotels">
            <Hotels></Hotels>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          {/* <PrivateRoute path=''>
          
          </PrivateRoute>
          <Route path="">
        
          </Route>
          <PrivateRoute path="">
            
          </PrivateRoute>
          <Route path=''>
          
          </Route>  */}
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </div>
      
    
  );
}

export default App;
