import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <Container>
          <Row>
            <div className="col-md-6">
              <Navbar.Brand href="#home">
              <img src="images/divya-logo.svg" alt="divya-logo"></img>
              <img src="images/digital-india-logo.svg" alt="digital-india-logo" className="logo-divider"></img>
            </Navbar.Brand>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="heder-right-block">
                <div className="login-signup">
                  <img src="images/icons/user-line.svg" alt="user-line"></img>
                  <a href="#">Login <span>or</span> Register</a>
                </div>
                <button type="button" className="btn btn-sm btn-success btn-icon-left"><img src="images/icons/vidicon-line.svg" alt="vidicon-line"></img> Join Meeting</button>
              </div>
            </div>
          </Row>
        </Container>
    </header>
  );
}

export default Header;
