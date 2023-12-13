import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <img src="/img/silbar.jpg" className="instagram-img" />
      <Container>
        <Row>
          <Col>
            <h3>Bản đồ</h3>
          </Col>
        </Row>
      </Container>
      <img src="/img/map1.jpg" className="contact-img-map" />
      <Container>
        <Row className="contact_style-center">
          <Col>
            <p>-- Hãy luôn độc nhất và khác biệt --</p>
            <p>
              <u>Hotline</u>: 089.6162.868
            </p>
            <p>
              <u>Email</u>: contact@katjewelry.vn
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <FaCheck />
              Thương hiệu đã được đăng kí bởi cục sở hữu trí tuệ và được bảo hộ
              bởi pháp luật Việt Nam
            </p>
            <p>
              <FaCheck />
              HOÀN TIỀN GẤP 5 LẦN nếu bạc không đủ tiêu chuẩn 925, hỗ trợ khách
              kiểm định (tính phí)
            </p>
            <p>
              <FaCheck />
              Chất lượng được chứng minh bởi hơn 150.000 khách hàng trong 10 năm
              qua!
            </p>
            <p>
              <FaCheck />
              Hãy chọn cho mình 1 thương hiệu trang sức bạc 925 uy tín và lâu
              đời để luôn chắc rằng trang sức của bạn được bảo hành trắng sáng
              MIỄN PHÍ VĨNH VIỄN.
            </p>
          </Col>
        </Row>
        <Row className="contact_style-center contact_space">
          <Col>
            <p>KAT JEWELRY CÓ 12 CỬA HÀNG</p>
            <p>--------- 10 Cửa Hàng Tại TP HỒ CHÍ MINH ---------</p>
            <p>1. KaT Jewelry Q1: 450 Hai Bà Trưng, P. Tân Định, Quận 1</p>
            <p>2. KaT Jewelry Q3: 678 Nguyễn Đình Chiểu, P.3, Quận 3</p>
            <p>
              3. KaT Jewelry quận 3: 179B Cách mạng tháng 8, P. 5, Q. 3. (Đoạn
              giữa Nguyễn Đình Chiểu và Võ Văn Tần).
            </p>
            <img
              src="https://bizweb.dktcdn.net/100/302/551/files/screen-shot-2018-10-28-at-12-52-27-am-jpeg.jpg?v=1540662971971"
              className="contact-img-address"
            />
          </Col>
        </Row>
        <Row className="contact_style-center contact_space">
          <Col>
            <p>4. KaT Jewelry Phú Nhuận: 99 Lê Văn Sỹ, P. 14, Q. Phú Nhuận. </p>
            <p>
              5. KaT Jewelry Nguyễn Trãi Q5: 213A Nguyễn Trãi, P2, Quận 5 (giữa
              Lê Hồng Phong và Huỳnh Mẫn Đạt).
            </p>
            <img
              src="https://bizweb.dktcdn.net/100/302/551/files/screen-shot-2019-06-07-at-11-42-13-am.jpg?v=1559884236774"
              className="contact-img-address"
            />
          </Col>
        </Row>
        <Row className="contact_style-center contact_space">
          <Col>
            <p>
              6. KaT Jewelry Gò Vấp: 529 Quang Trung, P. 10, Q. Gò Vấp (Đoạn gần
              Thống Nhất).
            </p>
            <img
              src="https://bizweb.dktcdn.net/100/302/551/files/screen-shot-2018-10-28-at-12-52-37-am-jpeg.jpg?v=1540662993458"
              className="contact-img-address"
            />
          </Col>
        </Row>
        <Row className="contact_style-center contact_space">
          <Col>
            <p>
              7. KaT Jewelry Tân Phú: 117 Cây Keo, Phường Hiệp Tân, Quận Tân Phú
              (song song đường Hòa Bình).
            </p>
            <img
              src="https://bizweb.dktcdn.net/100/302/551/files/screen-shot-2018-10-28-at-12-52-46-am-jpeg.jpg?v=1540663012960"
              className="contact-img-address"
            />
          </Col>
        </Row>
        <Row className="contact_space">
          <Col>
            <p>
              8. KaT Jewelry D2: 197 Nguyễn Gia Trí (D2), Phường 25, Quận Bình
              Thạnh.
            </p>
            <p>
              9. KaT Jewelry Q7: 391 Nguyễn Thị Thập, Phường Tân Phong, Quận 7.
            </p>
            <p>
              10. KaT Jewelry Thủ Đức: 215 Võ Văn Ngân, Phường Linh Chiểu, Quận
              Thủ Đức, Tp Thủ Đức.
            </p>
          </Col>
        </Row>
        <Row className="contact_style-center contact_space">
          <Col>
            <p> --------- 1 Cửa Hàng Tại ĐÀ NẴNG ---------</p>
            <p>8. KaT Jewelry Lê Duẩn: 230 Lê Duẩn, Q. Thanh Khê</p>
            <p>--------- 1 Cửa Hàng Tại HÀ NỘI ---------</p>
            <p>
              9. KaT Jewelry Hoàn Kiếm: 52 Tràng Thi, P. Hàng Bông, Q. Hoàn
              Kiếm. (Ngay góc Hội Vũ - Tràng Thi). Sđt: 0975.700.500
            </p>
            <img
              src="https://bizweb.dktcdn.net/100/302/551/files/screen-shot-2018-10-28-at-12-52-55-am-jpeg.jpg?v=1540663050051"
              className="contact-img-address"
            />
          </Col>
        </Row>
      </Container>
      <Form>
        <Container>
          <Row className="contact_info-conact">
            <Col>
              <h3>Gửi thông tin liên hệ</h3>
            </Col>
          </Row>
          <Row className="conact_input">
            <Col>
              <Form.Control placeholder="Họ tên *" />
            </Col>
            <Col>
              <Form.Control placeholder="Email *" />
            </Col>
          </Row>
          <Row className="conact_input">
            <Col>
              <Form.Control placeholder="Địa chỉ *" />
            </Col>
            <Col>
              <Form.Control placeholder="Điện thoại *" />
            </Col>
          </Row>
          <Row className="conact_input">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nhập nội dung *"
              />
            </Form.Group>
          </Row>
          <Row className="contact_submit">
            <Col>
              <Button className="contact_submit-btn">Gửi liên hệ</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
