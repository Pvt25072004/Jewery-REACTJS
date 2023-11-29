import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./layouts.css";

export default function NavLayout() {
  return (
    <div className="nav_layout">
      <Navbar expand="lg" className="bg-body-tertiary nav_layout__child">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="nav__item">
                TRANG CHỦ
              </Nav.Link>
              <NavDropdown title="TRANG SỨC" className="nav__item">
                <NavDropdown.Item href="">WHAT'S NEW</NavDropdown.Item>
                <NavDropdown.Item href="">NHẪN BẠC</NavDropdown.Item>
                <NavDropdown.Item href="">BÔNG TAI BẠC</NavDropdown.Item>
                <NavDropdown.Item href="">DÂY CHUYỀN BẠC</NavDropdown.Item>
                <NavDropdown.Item href="">LẮC BẠC</NavDropdown.Item>
                <NavDropdown.Item href="">PHỤ KIỆN RỜI</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className="nav__item">
                INSTAGRAM
              </Nav.Link>
              <Nav.Link href="" className="nav__item">
                BỘ SƯU TẬP
              </Nav.Link>
              <NavDropdown title="BÀI VIẾT" className="nav__item">
                <NavDropdown.Item href="">MẸO NHỎ</NavDropdown.Item>
                <NavDropdown.Item href="">SỰ KIỆN</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="THÔNG TIN" className="nav__item">
                <NavDropdown.Item href="">HƯỚNG DẪN</NavDropdown.Item>
                <NavDropdown.Item href="">BẢO QUẢN & BẢO HÀNH</NavDropdown.Item>
                <NavDropdown.Item href="">GIAO HÀNG & ĐỔI TRẢ</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="KAT JEWELRY" className="nav__item">
                <NavDropdown.Item href="">VỀ CHÚNG TÔI</NavDropdown.Item>
                <NavDropdown.Item href="">CHÍNH SÁCH</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className="nav__item">
                LIÊN HỆ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
