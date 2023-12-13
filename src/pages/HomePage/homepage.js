import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GrPrevious, GrNext } from "react-icons/gr";
import Carousel from "react-bootstrap/Carousel";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      {/* Slider */}
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/slider_1.jpg?1699007615400"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/slider_2.jpg?1699007615400"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/slider_3.jpg?1699007615400"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* About */}
      <Container className="hp__container">
        <Row>
          <Col sm={8} className="hp__container--img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/service_about_1.jpg?1699007615400" />
          </Col>
          <Col sm={4} className="hp__container--intro">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/service_about_2.jpg?1699007615400" />
            <h3>
              Đeo trang sức là cách thể hiện bạn mà không cần một lời nói nào.
            </h3>
            <p>
              Cuộc đời đó có bao lâu mà hững hờ, hãy cứ đeo trang sức như chưa
              từng được đeo.
            </p>
          </Col>
        </Row>
      </Container>
      {/* Slogan */}
      <Container className="hp__container--slogan" data-aos="fade-down">
        <Row>
          <Col>
            Wearing jewelry is the way to express who you are... without saying
            a word.
          </Col>
        </Row>
      </Container>
      {/* Info update */}
      <Container className="hp__container--info">
        <Row>
          <Col className="hp__container--info-img">
            <img src="/img/h1.jpg" />
          </Col>
          <Col className="hp__container--info-img">
            <img src="/img/h2.jpg" />
          </Col>
          <Col className="hp__container--info-img">
            <img src="/img/h3.jpg" />
          </Col>
          <div className="hp__container--info-click">
            <Button variant="secondary" type="submit">
              <GrPrevious />
            </Button>{" "}
            <Button variant="secondary" type="submit">
              <GrNext />
            </Button>{" "}
          </div>
        </Row>
      </Container>
      {/* Born */}
      <Container className="hp__container-born">
        <Row>
          <h2 className="hp__container-born-title">
            TRANG SỨC BẠC THÀNH LẬP TỪ 2012
          </h2>
          <Col sm={4} className="hp__container-born-intro">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/service_about3_2.jpg?1699007615400" />
            <img
              src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/service_about3_3.jpg?1699007615400"
              className="hp__container-born-intro-img"
            />
          </Col>
          <Col sm={8} className="hp__container-born-img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/service_about3_1.jpg?1699007615400" />
          </Col>
        </Row>
      </Container>
      {/* Best seller */}
      <Container className="hp__container--bestseller">
        <Row>
          <h2 className="hp__container-born-title">BESTSELLER</h2>
          <Col className="hp__container-bestseller-img hp__product">
            <img src="https://bizweb.dktcdn.net/thumb/grande/100/302/551/products/compressed-resized-crop-necklace-bi-2104-5-017-1.jpg?v=1663668997657" />
            <p>N BIG CIRCLE GEM LAUREL</p>
            <p>590.000₫</p>
          </Col>
          <Col className="hp__container-bestseller-img hp__product">
            <img src="https://bizweb.dktcdn.net/thumb/grande/100/302/551/products/compressed-cropped-resized-bi-2110-2-088-20681-1.jpg?v=1641927299740" />
            <p>N BIG CIRCLE GEM LAUREL</p>
            <p>590.000₫</p>
          </Col>
          <Col className="hp__container-bestseller-img hp__product">
            <img src="https://bizweb.dktcdn.net/thumb/grande/100/302/551/products/dsc6913-1-copy.jpg?v=1599426773953" />
            <p>N BIG CIRCLE GEM LAUREL</p>
            <p>590.000₫</p>
          </Col>
          <div className="hp__container-bestseller-click">
            <Button variant="secondary" type="submit">
              <GrPrevious />
            </Button>{" "}
            <Button variant="secondary" type="submit">
              <GrNext />
            </Button>{" "}
          </div>
        </Row>
      </Container>
      {/* Blog tips and hint*/}
      <Container className="hp__container--blog">
        <Row>
          <h2 className="hp__container-born-title">BLOG TIPS & HINT</h2>
          <Col className="hp__container-bestseller-img">
            <img src="https://bizweb.dktcdn.net/thumb/large/100/302/551/articles/qua-tang-sinh-nhat-cao-cap-0.jpg?v=1644986537327" />
            <p>10+ quà tặng sinh nhật cao cấp, ý nghĩa cho mọi đối tượng</p>
          </Col>
          <Col className="hp__container-bestseller-img">
            <img src="https://bizweb.dktcdn.net/thumb/large/100/302/551/articles/900x900-kat-4802-4.jpg?v=1530120343987" />
            <p>
              Tác dụng không tưởng của bạc 925 sẽ làm bạn bất ngờ - KaT Jewelry
            </p>
          </Col>
          <Col className="hp__container-bestseller-img">
            <img src="https://bizweb.dktcdn.net/thumb/large/100/302/551/articles/katjewelry-062174294016-n.jpg?v=1530120422670" />
            <p>Dị ứng bạc từ đâu, nguyên nhân thật sự có phải do bạc ?</p>
          </Col>
          <div className="hp__container-bestseller-click">
            <Button variant="secondary" type="submit">
              <GrPrevious />
            </Button>{" "}
            <Button variant="secondary" type="submit">
              <GrNext />
            </Button>{" "}
          </div>
        </Row>
      </Container>
      {/* About Kat Jewelry */}
      <Container className="hp__container--about">
        <Row>
          <h2 className="hp__container-born-title">ABOUT KAT JEWELRY</h2>
          <Col className="hp__container-about-img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/testimonial3.jpg?1699007615400" />
            <p>10 năm hoạt động</p>
          </Col>
          <Col className="hp__container-about-img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/testimonial1.jpg?1699007615400" />
            <p>150.000+ Khách hàng</p>
          </Col>
          <Col className="hp__container-about-img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/testimonial2.jpg?1699007615400" />
            <p>12 Cửa hàng</p>
          </Col>
          <div className="hp__container-about-click">
            <Button variant="secondary" type="submit">
              <GrPrevious />
            </Button>{" "}
            <Button variant="secondary" type="submit">
              <GrNext />
            </Button>{" "}
          </div>
        </Row>
      </Container>
      {/* Feedback */}
      <Container className="hp__container--feedback">
        <h2 className="hp__container-born-title">KHÁCH HÀNG FEEDBACK</h2>
        <Button variant="outline-primary">Feedback Us</Button>{" "}
        <Row>
          <Col className="hp__container-about-img">
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                baedhm
                <BsFillPatchCheckFill className="hp__container-about-tick" />
              </Card.Title>
              <Card.Title>November 18, 2023</Card.Title>
              <Card.Img
                variant="top"
                src="https://embedsocial.com/admin/mediacdn/feed-media/18273/18273854191094146/image_0.webp"
              />
              <Card.Body>
                <Card.Text>
                  Áp dụng sale từ ngày 11/11 - 11/12 thui nhaa cả nhà, mn tranh
                  thủ qua katjewelry để được tặng quà xinh nhéee
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="hp__container-about-img">
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                gnart.__
                <BsFillPatchCheckFill className="hp__container-about-tick" />
              </Card.Title>
              <Card.Title>October 15, 2023</Card.Title>
              <Card.Img
                variant="top"
                src="https://embedsocial.com/admin/mediacdn/feed-media/17903/17903111624854309/image_0.webp"
              />
              <Card.Body>
                <Card.Text>
                  Tiền thì em hong thiếu Nhưng nhiều thì em hong kó 😭
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="hp__container-about-img">
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                _tduongw
                <BsFillPatchCheckFill className="hp__container-about-tick" />
              </Card.Title>
              <Card.Title>September 05, 2023</Card.Title>
              <Card.Img
                variant="top"
                src="https://embedsocial.com/admin/media/feed-media/18281/18281311852178916/image_0.webp"
              />
              <Card.Body>
                <Card.Text>
                  Một chiếc vòng xinh xắn với ý nghĩa vĩnh cửu từ katjewelry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="hp__container-about-img">
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                _sarah_108
                <BsFillPatchCheckFill className="hp__container-about-tick" />
              </Card.Title>
              <Card.Title>June 25, 2023</Card.Title>
              <Card.Img
                variant="top"
                src="https://embedsocial.com/admin/media/feed-media/18069/18069139561390590/image_0.jpeg"
              />
              <Card.Body>
                <Card.Text>
                  Vòng tay vĩnh viễn, xu hướng mới của giới trẻ mọi người đã có
                  chưa 😗 Cùng đến katjewelry tậu ngay một em vòng đôi với Mỹ
                  Hạnh nha
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="outline-primary">Xem thêm feedback</Button>{" "}
      </Container>
      {/* Social */}
      <Container className="hp__container-social">
        <h2 className="hp__container-social-title">
          Follow On Instagram #Katjewelry <button>VISIT INSTAGRAM PAGE</button>
        </h2>
        <Row>
          <Col className="hp__container-social-img-left">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_2.jpg?1699007615400" />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_1.jpg?1699007615400" />
            <br />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_3.jpg?1699007615400" />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_4.jpg?1699007615400" />
          </Col>
          <Col className="hp__container-social-img">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_5.jpg?1699007615400" />
          </Col>
          <Col className="hp__container-social-img-right">
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_6.jpg?1699007615400" />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_7.jpg?1699007615400" />
            <br />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_8.jpg?1699007615400" />
            <img src="https://bizweb.dktcdn.net/100/302/551/themes/758295/assets/instagram_image_9.jpg?1699007615400" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
