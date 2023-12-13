import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import "./instagram.css";

export default function Instagram() {
  const dataInstagram = [
    {
      id: 1,
      img: "/img/isg.jpg",
      comment: "Sáng nhứt đêm nayy ✨",
      n_hearts: "24",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "0",
      underline: "----------",
    },
    {
      id: 2,
      img: "/img/isg2.jpg",
      comment: "Sao trông iu thế 😍",
      n_hearts: "12",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "0",
      underline: "----------",
    },
    {
      id: 3,
      img: "/img/isg3.jpg",
      comment: "Best seller đây rùiii",
      n_hearts: "59",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "1",
      underline: "----------",
    },
    {
      id: 4,
      img: "/img/isg4.jpg",
      comment: "Deal chồng Deal cùng Vnpay 😱😱",
      n_hearts: "148",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "2",
      underline: "----------",
    },
    {
      id: 5,
      img: "/img/isg5.jpg",
      comment: "TRANG SỨC BẠC SALE - HỐT NHANH NHANH NÈO",
      n_hearts: "127",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "12",
      underline: "----------",
    },
    {
      id: 6,
      img: "/img/isg6.jpg",
      comment: "Ngầu phải biết 😎",
      n_hearts: "62",
      shop: "KaT có 12 cửa hàng cực kỳ tiện và có bán online nữa.",
      n_comments: "7",
      underline: "----------",
    },
  ];
  return (
    <div className="instagram">
      <img src="/img/silbar.jpg" className="instagram-img" />
      <Container>
        <Row>
          <Col>
            <h3>KaT Jewelry Instagram feed</h3>
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <Row xs={1} sm={2} md={3} lg={3}>
            {dataInstagram.map((item) => (
              <Col key={item.id}>
                <Card className="isg_card">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="card_handle">
                    <Card.Text className="hearts_handle">
                      <FaRegHeart />
                      {item.n_hearts}
                    </Card.Text>
                    <Card.Text className="comments_handle">
                      <FaRegComment />
                      {item.n_comments}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>{item.comment}</Card.Title>
                    <Card.Text>{item.underline}</Card.Text>
                    <Card.Text>{item.shop}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
