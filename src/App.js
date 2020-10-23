import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
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

        <Toggle theme={theme} toggleTheme={toggleTheme} />

   
 
       <React.Fragment>
     
  <Router>
    
    <Switch>

  <Route path="/login" component={Login} />
  <Route path="/home" component={Home} />
   <Route path="/" component={Login} />
 
</Switch>
    
  </Router>
</React.Fragment>
       
 
   

    </ThemeProvider>
       </div>
  );
}

export default App;

