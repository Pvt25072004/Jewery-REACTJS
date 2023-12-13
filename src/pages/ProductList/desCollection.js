import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { BiCartAdd } from "react-icons/bi";
import jsonData from "../../db.json";

export default function DesCollection() {
  const { products_collection_des } = jsonData;
  return (
    <div className="descollection">
      <h3>Mô tả</h3>
      {products_collection_des &&
        products_collection_des.map((product) => (
          <Card style={{ width: "100%", margin: "10px auto" }} key={product.id}>
            <Card.Img variant="top" src={product.image} alt={product.name} />

            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
              <Button variant="primary">
                <BiCartAdd />
              </Button>
            </Card.Body>
            <Card.Img variant="top" src={product["img-1"]} alt={product.name} />
          </Card>
        ))}
    </div>
  );
}
