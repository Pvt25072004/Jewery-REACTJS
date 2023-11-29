import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGalacticSenate } from "react-icons/fa6";
import "./layouts.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={2} className="footer__item">
            <ul>
              <a href="">
                <li>TRANG CHỦ</li>
              </a>
              <a href="">
                <li>TRANG SỨC</li>
              </a>

              <a href="">
                <li>INSTAGRAM</li>
              </a>
              <a href="">
                <li>BỘ SƯU TẬP</li>
              </a>
              <a href="">
                <li>BÀI VIẾT</li>
              </a>
              <a href="">
                <li>THÔNG TIN</li>
              </a>
              <a href="">
                <li>KAT JEWELRY</li>
              </a>
              <a href="">
                <li>LIÊN HỆ</li>
              </a>
            </ul>
          </Col>
          <Col md={3} className="footer__item">
            <ul>
              <a href="">
                <li>
                  <SlSocialInstagram />
                  KATJEWELRY
                </li>
              </a>
              <a href="">
                <li>
                  <TiSocialFacebook />
                  /KATJEWELRY
                </li>
              </a>
              <a href="">
                <li>
                  <BsFillTelephoneFill />
                  089.6162.868
                </li>
              </a>
              <a href="">
                <li>
                  <SiMaildotru />
                  contact@katjewelry.vn
                </li>
              </a>
            </ul>
          </Col>
          <Col md={4} className="footer__main">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/logo-footer.png?1699007615400" />
            <p>JEWELRY STORE IN SAIGON DESIGN & MADE TO ORDER Since 2012</p>
          </Col>
          <Col md={3} className="footer__item">
            <ul>
              <a href="" className="footer__address">
                <li>
                  <FaGalacticSenate />
                  HỒ CHÍ MINH
                </li>
              </a>
              <a href="">
                <li>117 Cây Keo, P Hiệp Tân, Q Tân Phú</li>
              </a>
              <a href="">
                <li>529 Quang Trung, P.10, Gò Vấp</li>
              </a>
              <a href="">
                <li>391 Nguyễn Thị Thập, Quận 7</li>
              </a>
              <a href="">
                <li>179A Cách Mạng Tháng 8, P.5, Q.3</li>
              </a>
              <a href="">
                <li>678 Nguyễn Đình Chiểu, P.3, Quận 3</li>
              </a>
              <a href="">
                <li>197 Nguyễn Gia Trí (D2), Quận Bình Thạnh</li>
              </a>
              <a href="">
                <li>99 Lê Văn Sỹ, P.13, Phú Nhuận</li>
              </a>
              <a href="">
                <li>213A Nguyễn Trãi, P.2, Quận 5</li>
              </a>
              <a href="">
                <li>215 Võ Văn Ngân, Thủ Đức</li>
              </a>
              <a href="">
                <li>450 Hai Bà Trưng, Quận 1</li>
              </a>

              <a href="" className="footer__address">
                <li>
                  <FaGalacticSenate />
                  ĐÀ NẴNG
                </li>
              </a>
              <a href="">
                <li>230 Lê Duẩn, Thanh Khê, Đà Nẵng</li>
              </a>

              <a href="" className="footer__address">
                <li>
                  <FaGalacticSenate />
                  HÀ NỘI
                </li>
              </a>
              <a href="">
                <li>52 Tràng Thi, P.Hàng Bông, Q.Hoàn Kiếm</li>
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
