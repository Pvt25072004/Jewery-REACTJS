import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import "./layouts.css";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col className="header__social">
            <a href="https://www.facebook.com/katjewelry/">
              <TiSocialFacebook />
            </a>
            <span className="header__seperate">|</span>
            <a href="https://www.instagram.com/katjewelry/">
              <SlSocialInstagram />
            </a>
          </Col>
          <Col xs={6} className="header__logo">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/logo.png?1699007615400"></img>
          </Col>
          <Col className="header__personal">
            <a href="">
              <FaMagnifyingGlass />
            </a>
            <span className="header__seperate">|</span>
            <a href="">
              <IoPerson />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
