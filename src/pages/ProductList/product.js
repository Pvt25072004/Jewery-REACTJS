import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slice";
import jsonData from "../../db.json";
import { Link, Outlet } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import "./product.css";

export default function Product() {
  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  // const handleRemoveFromCart = (productId) => {
  //   dispatch(removeFromCart(productId));
  // };
  const {
    products_collection,
    products_selling,
    products_ring,
    products_necklace,
    products_bracelet,
    products_accessory,
    products_earring,
  } = jsonData;
  return (
    <div className="product">
      <img src="/img/silbar.jpg" className="whatnew-img" />
      <Row xs={1} md={3} className="g-4">
        {products_collection &&
          products_collection.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Link to={`/what-new/su-tap`}>
                    <Button variant="primary">
                      <IoMdAdd />
                    </Button>
                  </Link>

                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_ring &&
          products_ring.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">
                    <IoMdAdd />
                  </Button>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_necklace &&
          products_necklace.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">
                    <IoMdAdd />
                  </Button>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_bracelet &&
          products_bracelet.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">
                    <IoMdAdd />
                  </Button>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_accessory &&
          products_accessory.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">
                    <IoMdAdd />
                  </Button>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_selling &&
          products_selling.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Link to={`/what-new/su-tap`}>
                    <Button variant="primary">
                      <IoMdAdd />
                    </Button>
                  </Link>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
      <Row xs={1} md={3} className="g-4">
        {products_earring &&
          products_earring.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "100%", margin: "10px auto" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">
                    <IoMdAdd />
                  </Button>
                  <Button variant="primary">
                    <BiCartAdd />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
