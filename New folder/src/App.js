import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import Bookingform from './Bookingform';
import Login from './Login';


import 'tachyons';


function App() {
  return (
   
      <div className="App">
       <React.Fragment>
       <NavigationBar />
  <Router>
    
    <Switch>

  <Route path="/login" component={Login} />
  <Route path="/bookings" component={Bookingform} />
   <Route path="/" component={Bookingform} />
 
</Switch>
    
  </Router>
</React.Fragment>
       
    </div>
  );
}

export default App;

