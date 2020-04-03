import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import resume from "./assets/shayan_resume.pdf";

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          classNames: "",
          classNames1: ""
      };
      this.onClick = this.onClick.bind(this);
  }

  startStopAnimation = () => {
    const { classNames, classNames1 } = this.state;

    this.setState({ 
      classNames: classNames ? "" : "spin-logo",
      classNames1: classNames1 ? "" : "spin-logo1" });
  };


  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    return(
        <Router>
            <MDBNavbar className="navbar" dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand onClick={this.startStopAnimation} href="/">
                <MDBContainer className={this.state.classNames}>
                <MDBRow className="shayan-logo">
                <MDBCol md="12" className="">
                  <MDBRow>
                    <MDBCol sm="12">
                      <span><p className={`spin-logo-letters ${this.state.classNames1}`}>S</p></span>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="12">
                      <span><p className={`spin-logo-letters ${this.state.classNames1}`}>&nbsp;&nbsp;S</p></span>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
                  
              </MDBNavbarBrand>

              <MDBNavbarToggler onClick={ this.onClick } aria-label="Open Navigation" />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem className="active"><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>
                  <MDBNavItem><a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://shop.shayanshaikh.com/">Shop</a></MDBNavItem>
                  <MDBNavItem><a className="nav-link" href="https://jamesdupen.shayanshaikh.com/">James</a></MDBNavItem>
                  <MDBNavItem><a className="nav-link" href="https://scrum.shayanshaikh.com/">Scrum Board (Beta)</a></MDBNavItem>
                  <MDBNavItem><a className="nav-link" target="_blank" rel="noopener noreferrer" href={resume}>Resume</a></MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </Router>
    );
  }
}

export default Navbar;