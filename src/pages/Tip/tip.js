import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./tip.css";

export default function Tip() {
  const dataTip = [
    {
      id: 1,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/prettygossip-jewelry-cleaner-before-and-after1-1024x823.jpg?v:1530120197030",
      date: "13/06/2018",
      title: "Tại sao bạc lại bị đen ?",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Nếu bạn nào là 1 fan của trang sức bạc nhưng mồ hôi da lại không hợp thì đừng ngừng ngại nhé. Có hàng trăm cách làm sáng bạc được KaT Jewelry giới thiệu đâyyy",
    },
    {
      id: 2,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/900x900-kat-4839-4.jpg?v:1530120293983",
      date: "13/06/2018",
      title: "Bạc 925 là gì ?",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Bài viết này dành cho bạn nào chưa hiểu rõ về bạc 925 là như thế nào nè .Click chuột để đọc cùng KaT nha <3",
    },
    {
      id: 3,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/900x900-kat-4615-3.jpg?v:1530119937640",
      date: "14/06/2018",
      title: "Cách bảo quản trang sức bạc",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Bạn nào thích đeo bạc nhưng chưa biết cách bảo quản đúng thì bài viết này rất hữu dụng đấy nhé ^^. Còn chờ gì nữa mà không bấm vào để biết cách bảo quản cực dễ dàng nè !!!!",
    },
    {
      id: 4,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/dsc0624-2.jpg?v:1528652092990",
      date: "14/06/2018",
      title: "Dị ứng bạc từ đâu, nguyên nhân thực sự có phải do bạc? ",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Những nhầm lẫn về bạc làm bạn bị dị ứng ? hoặc đeo bạc bị ngứa ? . Bài viết đã giải thích rõ được những thắc mắc về bạc 925 và tại sao bạn bị dị ứng !!! Hãy nhấp vào đây để đọc thêm những kiến thức về bạc nhaaaa",
    },
    {
      id: 5,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/900x900-kat-4802-4.jpg?v:1530120343987",
      date: "14/06/2018",
      title:
        "Tác dụng không tưởng của bạc 925 sẽ làm bạn bất ngờ - KaT Jewelry",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Trời ơi đọc qua bài này mới biết bạc 925 có nhiều tác dụng đến vậy và có cả cách đeo bạc đoán bệnh nữa nha >w<",
    },
    {
      id: 6,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/qua-tang-sinh-nhat-cao-cap-0.jpg?v:1644986537327",
      date: "16/02/2022",
      title: "10+ quà tặng sinh nhật cao cấp, ý nghĩa nhất cho mọi đối tượng",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Trong 365 ngày của một năm, ngày sinh nhật được xem là dịp đặc biệt đối với mỗi người. Vào ngày ấy, ai cũng muốn được nhận nhiều món quà bất ngờ, ý nghĩa từ những người thân yêu. Vì vậy, để chọn được một món quà tinh tế, “hợp ý người nhận, hợp túi người mua” cũng không phải là điều đơn giản. Hôm nay, katjewelry.vn s...",
    },
  ];
  return (
    <div className="tip">
      <img src="/img/silbar.jpg" className="instagram-img" />
      <Container>
        <Row>
          <Col>
            <h3>Mẹo nhỏ</h3>
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <Row xs={1} sm={2} md={3} lg={3}>
            {dataTip.map((item) => {
              return (
                <Col key={item.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Text>{item.date}</Card.Text>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.author} / {item.n_comments} bình luận
                      </Card.Text>
                      <Card.Text className="tip_card-limit">
                        {item.content}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
