import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import HomePage from "../HomePage/homepage";
import jsonData from "../../db.json";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    const user = jsonData.login.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setLoggedInUser(user); // Lưu thông tin người dùng đã đăng nhập vào state
      setLoginError(""); // Đặt lại thông báo lỗi nếu có
    } else {
      setLoginError(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu."
      );
    }
  };
  return (
    <div className="login">
      {!loggedInUser ? (
        <Container>
          <Row>
            <h3>Đăng nhập tài khoản</h3>
            <Col>
              <p>Nếu bạn đã có tài khoản, đăng nhập tại đây.</p>
            </Col>
            <Col>
              <p>
                Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
                email.
              </p>
            </Col>
          </Row>
          <Form>
            <Row className="login_input">
              <Col>
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" />
              </Col>
            </Row>
            <Row className="login_input">
              <Col>
                <Form.Label>Mật khẩu *</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col>
                <Button className="login_get-password">Lấy lại mật khẩu</Button>
              </Col>
            </Row>
          </Form>
          <Row className="login_submit">
            <Col>
              <Button className="login_submit-btn" onClick={handleLogin}>
                Đăng nhập
              </Button>
              {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            </Col>
          </Row>
        </Container>
      ) : (
        <HomePage />
      )}
    </div>
  );
}
