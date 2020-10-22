import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222;  margin-top: 7px !important;
    margin-bottom: 7px !important;}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #adced9;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #adced9;
    &:hover { color: white; }
  }
  .nav-logo {
  float: left !important;
  margin-top: -5px !important;
}
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .navbar-sticky {
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 1px #222;
  animation: moveDown 0.5s ease-in-out;
}

`;
export const NavigationBar = () => (
  <Styles>
 

    <Navbar expand="lg">
      <Navbar.Brand>

          <a className="nav-logo" href="#">&#9776;TCE
          <img src={"https://img.collegedekhocdn.com/media/img/institute/logo/tce_logo.png"} style={{width:45, height:45}} />
          </a>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
       
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)