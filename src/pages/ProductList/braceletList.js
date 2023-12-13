import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slice";
import { IoMdAdd } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import jsonData from "../../db.json";
import "./product.css";

export default function BraceletList() {
  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  // const handleRemoveFromCart = (productId) => {
  //   dispatch(removeFromCart(productId));
  // };
  const { products_bracelet } = jsonData;
  return (
    <div className="braceletlist">
      <img src="/img/silbar-vong.jpg" className="braceletlist-img" />
      <h3>LẮC BẠC</h3>
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
    </div>
  );
}
