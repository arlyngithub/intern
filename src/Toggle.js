import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import './button.css'
import Switch from "react-switch";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
  
                   
      <div>
    	
       <MoonIcon onClick={toggleTheme} class="button1" />
      <SunIcon onClick={toggleTheme} class="button2" />
     
  </div>
 



   );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
