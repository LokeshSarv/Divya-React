import React from "react";
import "./App.css";
import "./Responsive.css";
import { Container, Row, Accordion } from "react-bootstrap";
import Header from "./Components/header";
import Footer from "./Components/footer";
import LogoSlider from "./Components/logo-slider";

function App() {
  return (
    <div className="App">
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content-block">
          <Container>
            <Row>
              <div className="col-md-6 align-self-center">
                <div className="hero-banner-content pe-md-2">
                  <h1>
                    <span className="green">Divya</span> is one Solution for all{" "}
                    <span className="orange underline">Conference</span>
                  </h1>
                  <p>
                    This is an all-in-one platform to host immersive events and
                    build real connections, online.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-right"
                  >
                    Get Started{" "}
                    <img src="images/icons/arrow-right-line.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-device">
                  <img
                    src="images/hero-device.png"
                    alt="hero-device"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      {/* End Hero Banner */}

      {/* Start Milestones */}
      <div className="our-milestones">
        <Container>
          <div className="icon-title text-center half-cercle pb-2">
            <div className="icon-cercle">
              <img src="images/icons/flag.svg" alt="flag" />
            </div>
            <h6 className="small-heading text-uppercase orange pt-3">
              Few of our milestones
            </h6>
          </div>
          <Row>
            <div className="col-md-3">
              <div className="counter-card light-blue">
                <div className="counter-img">
                  <img src="images/icons/users.svg" alt="users"></img>
                </div>
                <div className="counter-content">
                  <h4 className="mb-0">45,654</h4>
                  <span>Users</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-card light-orange">
                <div className="counter-img">
                  <img src="images/icons/webinars.svg" alt="webinars"></img>
                </div>
                <div className="counter-content">
                  <h4 className="mb-0">4,343</h4>
                  <span>Successful Webinars</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-card light-green">
                <div className="counter-img">
                  <img src="images/icons/meeting.svg" alt="meeting"></img>
                </div>
                <div className="counter-content">
                  <h4 className="mb-0">3,333</h4>
                  <span>Interactive Meetings</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-card light-gray">
                <div className="counter-img">
                  <img src="images/icons/department.svg" alt="department"></img>
                </div>
                <div className="counter-content">
                  <h4 className="mb-0">558</h4>
                  <span>Delighted Departments</span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* End Milestones */}

      {/* Start Our Features */}
      <section className="features">
        <Container>
          <Row>
            <div className="col-md-8 mx-auto">
              <div className="title title-border text-center">
                <h1>
                  Secure Reliable{" "}
                  <span className="orange">Government Virtual</span> Platform
                  for <span className="blue">Meetings,</span>{" "}
                  <span className="green">Webinars</span>
                </h1>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center pt-md">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="card-icon pb-xxs">
                  <img src="images/icons/hand.svg" alt="hand"></img>
                </div>
                <div className="card-body">
                  <h4 className="fw-500 mb-sm">Raise Hand</h4>
                  <p>
                    Attendees can raise hands to share any inputs in the ongoing
                    meeting. The speaker has the custom right to unmute them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="card-icon pb-xxs">
                  <img src="images/icons/chat.svg" alt="chat"></img>
                </div>
                <div className="card-body">
                  <h4 className="fw-500 mb-sm">Chat</h4>
                  <p>
                    Everyone present in the meeting will be able to initiate a
                    conversation over text. It can be either public chat or
                    privately with others.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="card-icon pb-xxs">
                  <img src="images/icons/qa.svg" alt="qa"></img>
                </div>
                <div className="card-body">
                  <h4 className="fw-500 mb-sm">Q&As</h4>
                  <p>
                    A section separate from the Chat will be present for Q&As to
                    be asked in the meeting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-md">
              <div className="feature-card text-center">
                <div className="card-icon pb-xxs">
                  <img src="images/icons/speaker.svg" alt="speaker"></img>
                </div>
                <div className="card-body">
                  <h4 className="fw-500 mb-sm">Speakers</h4>
                  <p>
                    There will be one host but multiple speakers can be present
                    as per the requirement of that meeting. Host can make any
                    attendee as speaker.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-md">
              <div className="feature-card text-center">
                <div className="card-icon pb-xxs">
                  <img src="images/icons/screen.svg" alt="screen"></img>
                </div>
                <div className="card-body">
                  <h4 className="fw-500 mb-sm">Screen Share</h4>
                  <p>
                    Another important feature will be to share the screen. Hosts
                    can allow certain users to share the screen.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* End Our Features */}

      {/* Start Presentation Feature */}
      <section className="presentation-feature primary-gradient">
        <div className="position-relative zindex-1">
          <Container>
            <Row>
              <div className="col-md-6">
                <img
                  src="images/presentation-screen.png"
                  alt="presentation-screen"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-md-6 ps-md-5">
                <h1 className="text-white mb-md">
                  Rich Presentation Feature With{" "}
                  <span className="yellow">Stable Build</span>
                </h1>
                <ul className="text-white list-unstyled feature-list">
                  <li>
                    <span className="list-icon">
                      <img src="images/icons/mac.svg" alt="mac"></img>
                    </span>
                    Share screen without whiteboard
                  </li>
                  <li>
                    <span className="list-icon">
                      <img
                        src="images/icons/slideshow.svg"
                        alt="slideshow"
                      ></img>
                    </span>
                    Easy presentation showcase
                  </li>
                  <li>
                    <span className="list-icon">
                      <img src="images/icons/compass.svg" alt="compass"></img>
                    </span>
                    Collaborate in real-time
                  </li>
                  <li>
                    <span className="list-icon">
                      <img src="images/icons/shape.svg" alt="shape"></img>
                    </span>
                    More zoom on HD whiteboard
                  </li>
                  <li>
                    <span className="list-icon">
                      <img
                        src="images/icons/pencil-ruler.svg"
                        alt="pencil-ruler"
                      ></img>
                    </span>
                    Simple and understandable interface
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      {/* End Presentation Feature */}

      {/* Start Webinar Platform Feature */}
      <section className="webinar-platform-feature">
        <Container>
          <div className="mb-md">
            <div className="title text-center">
              <h1>
                What makes our <span className="orange">Webinar Platform</span>{" "}
                different?
              </h1>
            </div>
          </div>
          <Row>
            <div className="col-md-3 pe-md-4">
              <ul className="text-end list-unstyled">
                <li className="pb-sm arrow-line-curve left-top">
                  <img
                    src="images/icons/easybrowseraccess.svg"
                    alt="easybrowseraccess"
                    className="pb-xs"
                  />
                  <h5>Easy Browser Access</h5>
                  <p>
                    The lightweight tool provides seamless experience to users
                    as a web app
                  </p>
                </li>
                <li className="pb-sm arrow-line-state left-mid">
                  <img
                    src="images/icons/datasaving.svg"
                    alt="datasaving"
                    className="pb-xs"
                  />
                  <h5>Data Saving</h5>
                  <p>
                    Users can attend meetings even with weak connection using
                    data saving.
                  </p>
                </li>
                <li className="pb-sm arrow-line-curve left-bottom">
                  <img
                    src="images/icons/secureconference.svg"
                    alt="secureconference"
                    className="pb-xs"
                  />
                  <h5>Secure Conference</h5>
                  <p>
                    End to End encryption, Complete data is encrypted before
                    being transmitted over the Internet
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="images/webinar-screen.png"
                alt="webinar-screen"
                className="img-fluid"
              />
            </div>
            <div className="col-md-3 ps-md-4">
              <ul className="list-unstyled">
                <li className="pb-sm arrow-line-curve right-top">
                  <img
                    src="images/icons/clear-hd-quality.svg"
                    alt="clear-hd-quality"
                    className="pb-xs"
                  />
                  <h5>Clear HD Quality</h5>
                  <p>
                    Users will get to experience HD quality of videos while in
                    meetings.
                  </p>
                </li>
                <li className="pb-sm arrow-line-state right-mid">
                  <img
                    src="images/icons/reporting-analytics.svg"
                    alt="reporting-analytics"
                    className="pb-xs"
                  />
                  <h5>Reporting & analytics</h5>
                  <p>
                    Post meeting reports and recordings are available to be
                    downloaded.
                  </p>
                </li>
                <li className="pb-sm arrow-line-curve right-bottom">
                  <img
                    src="images/icons/full-featured-host-controls.svg"
                    alt="full-featured-host-controls"
                    className="pb-xs"
                  />
                  <h5>Full-featured host controls</h5>
                  <p>
                    Host can control access to mic, presentation, screen-share
                    and many others.
                  </p>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </section>
      {/* End Webinar Platform Feature */}

      {/* Start Connect Engage */}
      <section className="connect-engage">
        <Container>
          <div className="mb-md">
            <div className="title text-center">
              <h1>
                Connect and Engage{" "}
                <span className="orange">Audiences Everywhere</span>
              </h1>
            </div>
          </div>
          <Row>
            <div className="col-md-12 text-center">
              <ul className="cercle-buttons-group text-white list-unstyled mb-sm">
                <li className="bg-blue">Goverment Communication</li>
                <li className="bg-orange">Collaborations</li>
                <li className="bg-green">Training</li>
              </ul>
              <img src="images/3lines.svg" alt="3lines" className="pb-md" />
              <img src="images/man-screen.svg" alt="man-screen" />
            </div>
          </Row>
        </Container>
      </section>
      {/* End Connect Engage */}

      {/* Start FAQ's */}
      <section className="faq">
        <Container>
          <Row>
            <div className="col-md-5">
              <img src="images/faq.png" alt="faq" className="img-fluid" />
              <h1 className="pt-sm">
                Get answers to all of your{" "}
                <span className="orange">FAQ questions.</span>
              </h1>
            </div>
            <div className="col-md-6 offset-md-1">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the benefits of a webinar?
                  </Accordion.Header>
                  <Accordion.Body>
                    Being a complete browser based solution application is not a
                    must to run the solution. All it needs to run is a browser
                    and internet connection. All features will be available on
                    all platforms [mobile operating system (Android and IOS),
                    web (Chrome, Firefox, Safari and Internet Explorer), desktop
                    operating system (Windows, Mac, Linux)].
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Does a webinar have to be live?
                  </Accordion.Header>
                  <Accordion.Body>
                    Being a complete browser based solution application is not a
                    must to run the solution. All it needs to run is a browser
                    and internet connection. All features will be available on
                    all platforms [mobile operating system (Android and IOS),
                    web (Chrome, Firefox, Safari and Internet Explorer), desktop
                    operating system (Windows, Mac, Linux)].
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Are webinars effective?</Accordion.Header>
                  <Accordion.Body>
                    Being a complete browser based solution application is not a
                    must to run the solution. All it needs to run is a browser
                    and internet connection. All features will be available on
                    all platforms [mobile operating system (Android and IOS),
                    web (Chrome, Firefox, Safari and Internet Explorer), desktop
                    operating system (Windows, Mac, Linux)].
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Row>
        </Container>
      </section>
      {/* End FAQ's */}

      {/* Start Logo Slider */}
      <div className="partners-slider">
        <div className="container">
        <LogoSlider />
        </div>
      </div>
      {/* End Logo Slider */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

export default App;
