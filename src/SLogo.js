import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class SLogo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
    return(
      <div className="preloader">
      <MDBContainer className="">
      <MDBRow className="shayan-logo-full">
      <MDBCol md="12" className="spin-logo ">
        <MDBRow>
          <MDBCol sm="12">
            <span><p className="spin-logo-letters spin-logo1">S</p></span>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12">
            <span><p className="spin-logo-letters spin-logo1">&nbsp;&nbsp;S</p></span>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default SLogo;