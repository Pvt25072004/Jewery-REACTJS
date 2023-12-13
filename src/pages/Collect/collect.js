import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./collect.css";
export default function Collect() {
  const dataCollect = [
    {
      id: 1,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/dsc0624-2.jpg?v:1528652092990",
      date: "11/06/2018",
      title:
        "Đắm chìm trong những món quà bằng trang sức bạc cực kỳ độc đáo và đầy ý nghĩa.",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Một anh chàng tinh tế , lãng mạn sẽ không bỏ qua được bài viết này chứ ? Một gợi ý nhỏ cho những chàng trai còn đang bâng khuâng không biết chọn gì , lựa gì cho người yêu bé bỏng hoặc mẹ của mình trong những ngày đặc biệt của họ .",
    },
    {
      id: 2,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/dsc-98091-2.jpg?v:1528650357487",
      date: "11/06/2018",
      title: "Tỏa sáng mùa hè cùng trang sức bạc 925",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Mùa hè là mùa xách balo lên và thưởng ngoạn vài chuyến du lịch , trong hành trang du lịch của bạn ắt hẳn sẽ không thiếu những bộ cánh thật sexy ,kem chống nắng cho tiết hè oi bức .Nhưng bạn biết để nổi bật hơn hẳn là gì không ? Chỉ cần bỏ túi vài chiếc nhẫn,dây chuyền hoặc thêm 1 bộ lắc tay lắc chân thật phá cá...",
    },
    {
      id: 3,
      img: "https://bizweb.dktcdn.net/100/302/551/articles/trang-suc-bac-ca-tinh-5.jpg?v:1538118025923",
      date: "28/09/2018",
      title: "Trang sức bạc độc đáo, cá tính tạo nên cá tính riêng cho bạn",
      author: "Viết bởi KaT Boss",
      n_comments: "0",
      content:
        "Trang sức bạc độc đáo, cá tính tạo nên cá tính riêng cho bạn Trang sức bạc độc đáo, cá tính sẽ là gợi ý món quà bạn không nên bỏ qua trong những dịp đặc biệt trong năm như ngày sinh nhật hay thời gian tới đây là 20.10 hay Noel. KAT Jewelry hân hạnh gửi đến bạn những mẫu trang sức bạc cá tính-quà tặng noel độc đáo ch...",
    },
  ];
  return (
    <div className="collect">
      <img src="/img/silbar.jpg" className="instagram-img" />
      <Container>
        <Row>
          <Col>
            <h3>Bộ sưu tập</h3>
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <Row xs={1} sm={2} md={3} lg={3}>
            {dataCollect.map((item) => {
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
                      <Card.Text className="collect_card-limit">
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
