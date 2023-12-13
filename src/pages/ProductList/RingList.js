import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import ringApi from "../../api/ringApi";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { BiCartAdd } from "react-icons/bi";
import "./product.css";
import jsonData from "../../db.json";

function RingList() {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    ringApi
      .getAll()
      .then((response) => {
        setRings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const { products_ring } = jsonData;
  return (
    <div className="ringlist">
      <img src="/img/silbar-nhan.jpg" className="ringlist-img" />
      <h3>NHẪN BẠC</h3>
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
                    <HiOutlineMagnifyingGlassPlus />
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

export default RingList;
