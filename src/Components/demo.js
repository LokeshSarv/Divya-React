import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <div className="col-md-4">
                        <ul className="footer-logo-list">
                            <li>
                                <p>Developed & Maintained By</p>
                                <img src="images/sarv-web-logo.png" alt="sarv-web-logo"></img>
                            </li>
                            <li>
                                <p>In Association with</p>
                                <img src="images/negd-logo.png" alt="negd-logo"></img>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>National e-Governance Division</h4>
                        <ul className="cinfo-list">
                            <li><img src="images/icons/building.svg" alt="building"></img> <span>4th Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi: 110003</span></li>
                            <li><img src="images/icons/call.svg" alt="call"></img> <a href="tel:+91-11-24303785/87">+91-11-24303785/87</a></li>
                            <li><img src="images/icons/email.svg" alt="email"></img> <a href="mailto:vc.divya@digitalindia.gov.in">vc.divya@digitalindia.gov.in</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Technical Support</h4>
                        <ul className="cinfo-list">
                            <li>For any Technical query or concern you may raise your request on following</li>
                            <li><img src="images/icons/call.svg" alt="call"></img> <a href="tel:+91-9529055665">+91-9529055665</a></li>
                            <li><img src="images/icons/email.svg" alt="email"></img> <a href="mailto:support@digitalindia.gov.in">support@digitalindia.gov.in</a></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;