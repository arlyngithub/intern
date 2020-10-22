import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import Bookingform from './Bookingform';
import Login from './Login';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';


import 'tachyons';


function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };


  return (
         <div className="App">
        <ThemeProvider theme={themeMode}>
       
       <GlobalStyles />
       <div className="App">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
   
 
       <React.Fragment>
     
  <Router>
    
    <Switch>

  <Route path="/login" component={Login} />
  <Route path="/bookings" component={Bookingform} />
   <Route path="/" component={Bookingform} />
 
</Switch>
    
  </Router>
</React.Fragment>
       
 
   

    </ThemeProvider>
       </div>
  );
}

export default App;

