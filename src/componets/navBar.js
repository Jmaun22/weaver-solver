



// import 'bulma/css/bulma.min.css';


import React, { Component } from "react";
import { Navbar } from "react-bulma-components";

class MenuNavbar extends Component {
  render() {
    return (
      <div id="header">
        <Navbar color="info" fixed="top">
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/">
              <img src="https://i.imgur.com/9jQaBuq.png" alt="Dew Ventures" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="/">Home</Navbar.Item>
              <Navbar.Item href="/about"> About Us</Navbar.Item>
              <Navbar.Item href="/contact"> Contact Us</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default MenuNavbar