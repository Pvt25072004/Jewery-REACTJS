import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <Container>
        <Row>
          <Col>
            <h3>Đăng ký tài khoản</h3>
            <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây</p>
          </Col>
        </Row>
        <Form>
          <Row className="register_input">
            <Col>
              <Form.Label>Họ *</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              <Form.Label>Tên *</Form.Label>
              <Form.Control />
            </Col>
          </Row>
          <Row className="register_input">
            <Col>
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" />
            </Col>
            <Col>
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control type="password" />
            </Col>
          </Row>
        </Form>
        <Row className="register_submit">
          <Col>
            <Button className="register_submit-btn">Đăng ký</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
