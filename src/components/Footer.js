import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ana-khomasuridze-838b37198">
                <img src={navIcon1} alt="linkdIn" />
              </a>
              <a href="https://github.com/Khomas5">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.upwork.com/freelancers/~0104153b1d763d94b2">
                <img src={navIcon3} alt="upwork" />
              </a>
            </div>
            <p>CopyRight 2023. all right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
