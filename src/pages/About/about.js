import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <img src="/img/silbar.jpg" className="about-img" />
      <Container>
        <Row>
          <Col>
            <h3>Về chúng tôi</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <p>
                KaT Jewely, shop trang sức bạc be bé của cô gái nhỏ yêu cái đẹp
                và sự hoài cổ.
              </p>
            </Row>
            <Row>
              <p>
                Thành lập vào tháng 8 / 2012 , KaT khởi đầu với những sản phẩm
                về wire art. Sự tình cờ đã đưa KaT đến với thế giới trang sức,
                từ đó giấc mơ của KaT Jewelry ngày một được vun đắp để đem nhiều
                sản phẩm chất lượng và độc đáo nhất đến tay của khách hàng Việt
                Nam và quốc tế.
              </p>
            </Row>
            <Row>
              <p>
                Đến với KaT Jewelry, bạn sẽ cảm nhận được sự tỉ mỉ trên những
                sản phẩm tạo ra bởi bàn tay tài hoa từ những người thợ kim hoàn
                của KaT Jewelry. Từng thiết kế, từng đường nét được lấy từ cảm
                hứng, từ đam mê, hoài bão mà KaT đã và đang chắt chiu từng ngày
                trên con đường phát triển.
              </p>
            </Row>
          </Col>
          <img src="https://bizweb.dktcdn.net/100/302/551/files/32090078-1711161528938705-4972150344269168640-o.jpg?v=1526095583939" />
        </Row>
        <Row>
          <Col>
            <p>
              Số giấy phép kinh doanh: 41C8020417 <br />
              Do UBND Quận 3 cấp GCN ĐKHKD ngày: 28/04/2017
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
