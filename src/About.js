import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBBadge } from 'mdbreact';
import shayan1 from './assets/images/about.png';
import shayan2 from './assets/images/about-2.png';
import work1 from './assets/images/work-1.jpg';
import work2 from './assets/images/scrum.png';
import work3 from './assets/images/planit.png';
import work4 from './assets/images/work-3.jpg';
import work5 from './assets/images/work-4.jpg';
import resume from "./assets/shayan_resume.pdf";

import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          classNames: "",
          classNames1: ""
      };
  }

  startStopAnimation = () => {
    const { classNames } = this.state;

    this.setState({ 
      classNames: classNames ? "" : "spin-logo",});
  };

  startStopAnimation1 = () => {
    const { classNames1 } = this.state;

    this.setState({ 
      classNames1: classNames1 ? "" : "spin-logo1",});
  };

  render() {
    return(
      <div className="Shayan">
      <div className="About">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12"><ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}><h2 className="bold">About</h2></ScrollAnimation></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="5">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={2}>
          <a onClick={this.startStopAnimation} href="#0"><img src={shayan1} className={`about-img ${this.state.classNames}`} loading="lazy" alt="Shayan's big smile goes here usually..." /></a>
        </ScrollAnimation>
        </MDBCol>
        <MDBCol md="1">
        </MDBCol>
        <MDBCol md="6" className="">
          <div className="about-desc">
          
            <div className="item">
            <div className="title-row">
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true} duration={2}>
              <h2 className="title">Hi</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500} duration={2}>
              <h2 className="title">, I</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={600} duration={2}>
              <h2 className="title">'</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={700} duration={2}>
              <h2 className="title">m</h2>
            </ScrollAnimation>
            </div>
            <div className="title-row">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={2000} duration={2}>
              <h2 className="title">S</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={2200} duration={2}>
              <h2 className="title">h</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={2400} duration={2}>
              <h2 className="title">a</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={2600} duration={2}>
              <h2 className="title">y</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={2800} duration={2}>
              <h2 className="title">a</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={3000} duration={2}>
              <h2 className="title">n</h2>
            </ScrollAnimation>
            </div>
            </div>
            
            <div className="desc">
              
              <div className="rotate">
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} delay={2500} duration={2}><h2 className="heading">About</h2></ScrollAnimation>
              </div>
              
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={3000} duration={2}>
              <p>Let's work together.</p>
              <MDBBtn color="indigo" size="md"href="#contact" >Contact Me!</MDBBtn>
              <MDBBtn color="indigo" size="md" target="_blank" href={resume}>Resume</MDBBtn>
              </ScrollAnimation>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
      <div id="colorlib-services">
        <MDBContainer>
          <MDBRow className="text-center">
            <MDBCol md="12"><h2 className="bold">Skills</h2></MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="7" className="skill-list">
              <MDBRow>
                <MDBCol md="12" className="col-md-offset-0 animate-box animated fadeInUp intro-heading">
                  <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <span>My Skills</span>
                  <h2 className="title">What have a I learned?</h2>
                  </ScrollAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="rotate">
                    <h2 className="heading">Skills</h2>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250} duration={2}>
                  <div className="services ">
                    <h3>Programming Languages</h3>
                    <ul>
                      <li>C &amp; C++</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>HTML &amp; CSS</li>
                      <li>MySQL</li>
                      <li>PHP</li>
                    </ul>
                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500} duration={2}>
                  <div className="services">
                    <h3>Design</h3>
                    <ul>
                      <li>Photoshop</li>
                      <li>Premiere Pro</li>
                      <li>Fusion 360</li>
                      <li>InDesign</li>
                    </ul>
                  </div>
                  </ScrollAnimation>
                </MDBCol>
                <MDBCol md="6">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={750} duration={2}>
                  <div className="services ">
                    <h3>Tools & Frameworks</h3>
                    <ul>
                      <li>Git</li>
                      <li>Jenkins</li>
                      <li>Docker</li>
                      <li>Maven</li>
                      <li>Wordpress</li>
                      <li>Jquery</li>
                      <li>React</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                  </ScrollAnimation>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="5" className="services-img"><ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={750} duration={2}><a onClick={this.startStopAnimation1} href="#0"><img src={shayan2} className={`about-img ${this.state.classNames1}`} loading="lazy" alt="Shayan's big smile goes here usually..." /></a></ScrollAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div id="colorlib-work">
        <MDBContainer className="">
          <MDBRow>
            <MDBCol md="12"><h2 className="bold">Works</h2></MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="col-md-offset-0 text-center animate-box animated fadeInUp intro-heading">
              <span>Portfolio</span>
              <h2>Projects</h2>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <div className="rotate">
                <h2 className="heading">Portfolio</h2>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="">
            <MDBCol className="project" md="12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <MDBCard className="work-entry ">
              <MDBRow>
                <MDBCol md="6"><img src={work2} className="work-img" loading="lazy" alt="Shayan's big smile goes here usually..." /></MDBCol>
                <MDBCol md="6"><MDBCardBody className="col-md-offset-4">
                  <h2>Scrum Board</h2>
                  <div>
                    <p>Created learning tool for following scrum principles.</p>
                    <p>Technologies used:</p>
                    <MDBBadge color="info" className="tag">React/ES6</MDBBadge>
                    <MDBBadge color="info" className="tag">Firebase</MDBBadge>
                    <MDBBadge color="info" className="tag">MDBootstrap</MDBBadge>
                  </div>
                  <MDBRow className="live"><MDBBtn color="red" size="md" href="https://scrum.shayanshaikh.com/">See Live</MDBBtn></MDBRow>
                </MDBCardBody></MDBCol>
              </MDBRow>
              </MDBCard>
              </ScrollAnimation>
            </MDBCol>
            
            <MDBCol className="project" md="12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <MDBCard className="work-entry ">
              <MDBRow>
                <MDBCol md="6"><img src={work3} className="work-img" loading="lazy" alt="Shayan's big smile goes here usually..." /></MDBCol>
                <MDBCol md="6"><MDBCardBody className="col-md-offset-4">
                  <h2>Plan it!</h2>
                  <div>
                    <p>Group project attempting to create an optimized activity plan based on user input.</p>
                    <p>Technologies used:</p>
                    <MDBBadge color="info" className="tag">Java</MDBBadge>
                    <MDBBadge color="info" className="tag">Maven</MDBBadge>
                    <MDBBadge color="info" className="tag">MySQL</MDBBadge>
                  </div>
                  <MDBRow className="live"><MDBBtn color="red" size="md" href="https://github.com/devonhubertmusic/planit">View Code</MDBBtn></MDBRow>
                </MDBCardBody></MDBCol>
              </MDBRow>
              </MDBCard>
              </ScrollAnimation>
            </MDBCol>

            <MDBCol className="project" md="12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <MDBCard className="work-entry ">
              <MDBRow>
                <MDBCol md="6"><img src={work1} className="work-img" loading="lazy" alt="Shayan's big smile goes here usually..." /></MDBCol>
                <MDBCol md="6"><MDBCardBody className="col-md-offset-4">
                  <h2>Voltson Hack</h2>
                  <div>
                    <p>Interupted connection between smart outlet used by UCSC it and its controller disabling further use.</p>
                    <p>Technologies used:</p>
                    <MDBBadge color="info" className="tag">Wireshark</MDBBadge>
                    <MDBBadge color="info" className="tag">Nmap</MDBBadge>
                    <MDBBadge color="info" className="tag">Tcpkill</MDBBadge>
                  </div>
                  <MDBRow className="live"><MDBBtn color="red" size="md" href="https://devpost.com/software/voltson-hack">View Devpost</MDBBtn></MDBRow>
                </MDBCardBody></MDBCol>
              </MDBRow>
              </MDBCard>
              </ScrollAnimation>
            </MDBCol>

            <MDBCol className="project" md="12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <MDBCard className="work-entry">
              <MDBRow>
                <MDBCol md="6"><img src={work4} className="work-img" loading="lazy" alt="Shayan's big smile goes here usually..." /></MDBCol>
                <MDBCol md="6"><MDBCardBody className="col-md-offset-4">
                  <h2>Campaign Landing Page</h2>
                  <div>
                    <p>Built and managed website for a local candidate's campaign</p>
                    <p>Technologies used:</p>
                    <MDBBadge color="info" className="tag">Google Sites</MDBBadge>
                  </div>
                  <MDBRow className="live"><MDBBtn color="red" size="md" href="https://www.kreutz4supervisor1.com/">See Live</MDBBtn></MDBRow>
                </MDBCardBody></MDBCol>
              </MDBRow>
              </MDBCard>
              </ScrollAnimation>
            </MDBCol>

            <MDBCol className="project" md="12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <MDBCard className="work-entry ">
              <MDBRow>
                <MDBCol md="6"><img src={work5} className="work-img" loading="lazy" alt="Shayan's big smile goes here usually..." /></MDBCol>
                <MDBCol md="6"><MDBCardBody className="col-md-offset-4">
                  <h2>Online Shop</h2>
                  <div>
                    <p>Personal shop to sell original creations.</p>
                    <p>Technologies used:</p>
                    <MDBBadge color="info" className="tag">Fusion 360</MDBBadge>
                    <MDBBadge color="info" className="tag">Microweber</MDBBadge>
                    <MDBBadge color="info" className="tag">Digital Ocean</MDBBadge>
                  </div>
                  <MDBRow className="live"><MDBBtn color="red" size="md" href="https://shop.shayanshaikh.com/">See Live</MDBBtn></MDBRow>
                </MDBCardBody></MDBCol>
              </MDBRow>
              </MDBCard>
              </ScrollAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <footer>
        <div id="footer" className="links">
        <MDBContainer id="contact">
          <MDBRow>
              <MDBCol md="12"  className="finger">
                <a href="/" aria-label="Back to Top">
                  <i className="footer fas fa-hand-pointer"></i></a>
              </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <h2 className="footer">Let's Talk</h2>
            </MDBCol>
            <MDBCol md="12">
              <p className="footer">email me: <a href="mailto:shayanshaikh2@gmail.com">shayanshaikh2@gmail.com</a></p>
            </MDBCol>
            <MDBCol md="12">  
              <p className="footer">connect on linked [ <a href="https://www.linkedin.com/in/shayanshaikh/" aria-label="Shayan's Linkedin"><i className="fab fa-linkedin-in"></i></a> ]</p>
            </MDBCol>
            <MDBCol md="12">
              <p className="footer">Fork a repo: <a href="https://github.com/shayanshaikh" aria-label="Shayan's Github"><i className="fab fa-github"></i></a></p>
            </MDBCol>
            <MDBCol md="12">
              <MDBCol md="4"></MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
      </footer>
      </div>
    );
  }
}

export default About;