import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  return (
    
      
      <Router>
      
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          {/* <Route path=''>
            
          </Route>
          <PrivateRoute path=''>
          
          </PrivateRoute>
          <Route path="">
        
          </Route>
          <PrivateRoute path="">
            
          </PrivateRoute>
          <Route path=''>
          
          </Route> */}
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    
  );
}

export default App;
