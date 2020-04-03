import React from 'react';

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Shayan Shaikh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shayan Shaikh's Portfolio" />
        <meta name="keywords" content="Shayan Shaikh" />
        <meta name="author" content="Shayan Shaikh" />
        {/* Facebook and Twitter integration */}
        <meta property="og:title" content />
        <meta property="og:image" content />
        <meta property="og:url" content />
        <meta property="og:site_name" content />
        <meta property="og:description" content />
        <meta name="twitter:title" content />
        <meta name="twitter:image" content />
        <meta name="twitter:url" content />
        <meta name="twitter:card" content />
        {/* Place favicon.ico and apple-touch-icon.png in the root directory */}
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Animate.css */}
        <link rel="stylesheet" href="css/animate.css" />
        {/* Icomoon Icon Fonts*/}
        <link rel="stylesheet" href="css/icomoon.css" />
        {/* Bootstrap  */}
        <link rel="stylesheet" href="css/bootstrap.css" />
        {/*<link rel="stylesheet" href="css/mdb.css">*/}
        {/* Owl Carousel */}
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/css/mdb.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/style.css" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* Modernizr JS */}
        {/* FOR IE9 below */}
        {/*[if lt IE 9]>
	
	<![endif]*/}
        {/*
		 _   .-')       ('-.                 (`\ .-') /`
		( '.( OO )_   _(  OO)                 `.( OO ),'
		 ,--.   ,--.)(,------. .-'),-----. ,--./  .--.  
		 |   `.'   |  |  .---'( OO'  .-.  '|      |  |  
		 |         |  |  |    /   |  | |  ||  |   |  |, 
		 |  |'.'|  | (|  '--. \_) |  |\|  ||  |.'.|  |_)
		 |  |   |  |  |  .--'   \ |  | |  ||         |  
		 |  |   |  |  |  `---.   `'  '-'  '|   ,'.   |  
		 `--'   `--'  `------'     `-----' '--'   '--'  

					 ,_     _
					 |\\_,-~/
					 / _  _ |    ,--.
					(  @  @ )   / ,-'
					 \  _T_/-._( (
					 /         `. \
					|         _  \ |
					 \ \ ,  /      |
					  || |-_\__   /
					 ((_/`(____,-'

		 _   .-')       ('-.                 (`\ .-') /`
		( '.( OO )_   _(  OO)                 `.( OO ),'
		 ,--.   ,--.)(,------. .-'),-----. ,--./  .--.  
		 |   `.'   |  |  .---'( OO'  .-.  '|      |  |  
		 |         |  |  |    /   |  | |  ||  |   |  |, 
		 |  |'.'|  | (|  '--. \_) |  |\|  ||  |.'.|  |_)
		 |  |   |  |  |  .--'   \ |  | |  ||         |  
		 |  |   |  |  |  `---.   `'  '-'  '|   ,'.   |  
		 `--'   `--'  `------'     `-----' '--'   '--'  
	*/}
        <nav id="colorlib-main-nav" role="navigation">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
          <div className="js-fullheight colorlib-table">
            <div className="colorlib-table-cell js-fullheight">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a target="_blank" href="https://shop.shayanshaikh.com/">Shop</a></li>
                    <li><a href="https://jamesdupen.shayanshaikh.com/">James</a></li>
                    <li><a href="https://scrum.shayanshaikh.com/">Scrum Board (Beta)</a></li>
                    <li><a className="btn btn-primary" target="_blank" href="shayan_resume.pdf">Resume</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="colorlib-page">
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="colorlib-navbar-brand">
                    <a className="colorlib-logo" href="https://jamesdupen.shayanshaikh.com/"><span>S&nbsp;&nbsp;</span><span>&nbsp;&nbsp;S</span></a>
                  </div>
                  <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                </div>
              </div>
            </div>
          </header>
          <div id="colorlib-about">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">About</h2>
              </div>
              <div className="row">
                <div className="col-md-5 animate-box">
                  <div className="view overlay item">
                    <img className="img-responsive about-img" src="images/about.jpg" alt="" />
                    <div className="mask waves-effect rgba-black-light" />
                  </div>
                </div>
                <div className="col-md-6 col-md-push-1 animate-box">
                  <div className="about-desc">
                    <div className="item">
                      <h2>Hi, I'm<br />Shayan</h2>
                    </div>
                    <div className="desc">
                      <div className="rotate">
                        <h2 className="heading">About</h2>
                      </div>
                      <p>Let's work together.</p>
                      <p><a href="#contact" className="btn btn-primary">Contact Me!</a></p>
                      <p><a className="btn btn-primary" target="_blank" href="shayan_resume.pdf">Resume</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="colorlib-services">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">Services</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="services-flex">
                    <div className="one-third">
                      <div className="row">
                        <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
                          <span>My Services</span>
                          <h2>Here Are Some of My Skills</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="rotate">
                            <h2 className="heading">Services</h2>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="services animate-box">
                            <h3>1 - Programming Languages</h3>
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
                          <div className="services animate-box">
                            <h3>3 - Libraries &amp; Frameworks</h3>
                            <ul>
                              <li>React</li>
                              <li>Jquery</li>
                              <li>Microweber</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="services animate-box">
                            <h3>2 - Tools &amp; Platforms</h3>
                            <ul>
                              <li>Git</li>
                              <li>Jenkins</li>
                              <li>Maven</li>
                              <li>Firebase</li>
                            </ul>
                          </div>
                          <div className="services animate-box">
                            <h3>4 - Design</h3>
                            <ul>
                              <li>Photoshop</li>
                              <li>Premiere Pro</li>
                              <li>Fusion 360</li>
                              <li>InDesign</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth services-img" style={{backgroundImage: 'url(images/about-2.jpg)'}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="colorlib-work">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">Works</h2>
              </div>
              <div className="row">
                <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                  <span>Portfolio</span>
                  <h2>Projects</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="rotate">
                    <h2 className="heading">Portfolio</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="work-entry animate-box">
                    <a href="https://devpost.com/software/voltson-hack" target="_blank" className="work-img" style={{backgroundImage: 'url(images/work-1.jpg)'}}>
                      <div className="display-t">
                        <div className="work-name">
                          <h2>Voltson Hack</h2>
                        </div>
                      </div>
                    </a>
                    <div className="col-md-4 col-md-offset-4">
                      <div className="desc">
                        <p>Interupted connection between smart outlet used by UCSC it and its controller disabling further use.</p>
                        {/*<p class="read"><a href="#">View details</a></p>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="work-entry animate-box">
                    <a href="https://scrum.shayanshaikh.com/" className="work-img" style={{backgroundImage: 'url(images/scrum.png)'}}>
                      <div className="display-t">
                        <div className="work-name">
                          <h2>Scrum Board</h2>
                        </div>
                      </div>
                    </a>
                    <div className="col-md-4 col-md-offset-4">
                      <div className="desc">
                        <p>Created learning tool for following scrum principles.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="work-entry animate-box">
                    <a href="https://github.com/devonhubertmusic/planit" className="work-img" style={{backgroundImage: 'url(images/planit.png)'}}>
                      <div className="display-t">
                        <div className="work-name">
                          <h2>Plan it!</h2>
                        </div>
                      </div>
                    </a>
                    <div className="col-md-4 col-md-offset-4">
                      <div className="desc">
                        <p>Group project attempting to create an optimized activity plan based on user input.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="work-entry animate-box">
                    <a href="https://www.kreutz4supervisor1.com/" className="work-img" style={{backgroundImage: 'url(images/work-3.jpg)'}}>
                      <div className="display-t">
                        <div className="work-name">
                          <h2>Campaign Landing Page</h2>
                        </div>
                      </div>
                    </a>
                    <div className="col-md-4 col-md-offset-4">
                      <div className="desc">
                        <p>Built and managed website for a local candidate's campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="work-entry animate-box">
                    <a href="https://shop.shayanshaikh.com/" className="work-img" style={{backgroundImage: 'url(images/work-4.jpg)'}}>
                      <div className="display-t">
                        <div className="work-name">
                          <h2>Online Shop</h2>
                        </div>
                      </div>
                    </a>
                    <div className="col-md-4 col-md-offset-4">
                      <div className="desc">
                        <p>Personal shop to sell original creations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div id="footer">
              <div className="container" id="contact">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <a href="#" style={{color: 'black'}}>
                      <span style={{fontSize: '50px'}}><i className="fas fa-hand-pointer" /></span></a>
                  </div>
                </div>
                <div className="row" style={{textAlign: 'center'}}>
                  <h2 style={{margin: '5em'}}>Let's Talk</h2>
                  <p style={{margin: '5em'}}>email me: <a href="#">shayanshaikh2@gmail.com</a></p>
                  <p style={{margin: '5em'}}>connect on linked [ <a href="https://www.linkedin.com/in/shayanshaikh/"><i className="fab fa-linkedin-in" /></a> ]</p>
                  <p style={{margin: '5em'}}>Fork a repo: <a href="https://github.com/shayanshaikh"><i className="fab fa-github" /></a></p>
                  <div className="col-md-4 col-pb-sm">
                  </div>
                </div>
              </div>
            </div></footer>
        </div>
        {/* jQuery */}
        {/* jQuery Easing */}
        {/* Bootstrap */}
        {/* Waypoints */}
        {/* Owl Carousel */}
        {/* Magnific Popup */}
        {/* Main JS (Do not remove) */}
        {/*
		 _   .-')       ('-.                 (`\ .-') /`
		( '.( OO )_   _(  OO)                 `.( OO ),'
		 ,--.   ,--.)(,------. .-'),-----. ,--./  .--.  
		 |   `.'   |  |  .---'( OO'  .-.  '|      |  |  
		 |         |  |  |    /   |  | |  ||  |   |  |, 
		 |  |'.'|  | (|  '--. \_) |  |\|  ||  |.'.|  |_)
		 |  |   |  |  |  .--'   \ |  | |  ||         |  
		 |  |   |  |  |  `---.   `'  '-'  '|   ,'.   |  
		 `--'   `--'  `------'     `-----' '--'   '--'  
 
					 ,_     _
					 |\\_,-~/
					 / _  _ |    ,--.
					(  @  @ )   / ,-'
					 \  _T_/-._( (
					 /         `. \
					|         _  \ |
					 \ \ ,  /      |
					  || |-_\__   /
					 ((_/`(____,-'

		 _   .-')       ('-.                 (`\ .-') /`
		( '.( OO )_   _(  OO)                 `.( OO ),'
		 ,--.   ,--.)(,------. .-'),-----. ,--./  .--.  
		 |   `.'   |  |  .---'( OO'  .-.  '|      |  |  
		 |         |  |  |    /   |  | |  ||  |   |  |, 
		 |  |'.'|  | (|  '--. \_) |  |\|  ||  |.'.|  |_)
		 |  |   |  |  |  .--'   \ |  | |  ||         |  
		 |  |   |  |  |  `---.   `'  '-'  '|   ,'.   |  
		 `--'   `--'  `------'     `-----' '--'   '--'  
	*/}
      </div>
    );
  }
});

export default NewComponent;

