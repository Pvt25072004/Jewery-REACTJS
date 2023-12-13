import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./event.css";

export default function Event() {
  return (
    <div className="event">
      <img src="/img/silbar.jpg" className="instagram-img" />
      <Container>
        <Row>
          <Col>
            <h3>Sự kiện</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://bizweb.dktcdn.net/100/302/551/articles/49070772-611529205971575-1832377861885919232-n.jpg?v=1545846706170"
              />
              <Card.Body>
                <Card.Text>27/12/2018</Card.Text>
                <Card.Title>YEAR END SALE PARTY - 2018</Card.Title>
                <Card.Text>Viết bởi KaT Jewelry / 0 bình luận</Card.Text>
                <Card.Text className="event_card-limit">
                  YEAR END SALE PARTY - 2018 SỰ KIỆN SALE TRANG SỨC BẠC LỚN
                  TRONG NĂM ĐANG DIỄN RA TẠI 5 CỬA HÀNG CỦA KAT JEWELRY TRÊN
                  TOÀN QUỐC SALE UP TO 40% toàn bộ sản phẩm khi mua tại cửa hàng
                  và online. Chương trình áp dụng từ hôm nay tới 3.1.2019 **Lưu
                  ý quy định của shop: Giá trên website chưa đư...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
