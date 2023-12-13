import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./layouts.css";

export default function NavLayout() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`nav_layout ${isScroll ? "sticky" : ""}`}
      data-aos="fade-down"
    >
      <Navbar expand="lg" className="bg-body-tertiary nav_layout__child">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="" className="nav__item">
              <Link className="nav-link" to={`/`}>
                TRANG CHỦ
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav__item">
              <Link className="nav-link" to={`/trang-suc`}>
                TRANG SỨC
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav__item">
              <Link className="nav-link" to={`/instagram`}>
                INSTAGRAM
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav__item">
              <Link className="nav-link" to={`/bo-suu-tap`}>
                BỘ SƯU TẬP
              </Link>
            </Nav.Link>
            <NavDropdown title="BÀI VIẾT" className="nav__item">
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/meo-nho`}>
                  MẸO NHỎ
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/su-kien`}>
                  SỰ KIỆN
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="THÔNG TIN" className="nav__item">
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/huong-dan-do-size`}>
                  HƯỚNG DẪN ĐO SIZE
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/bao-hanh-bao-quan`}>
                  BẢO QUẢN & BẢO HÀNH
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/giao-hang-doi-hang`}>
                  GIAO HÀNG & ĐỔI TRẢ
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="KAT JEWELRY" className="nav__item">
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/ve-chung-toi`}>
                  VỀ CHÚNG TÔI
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="nav__item-list">
                <Link className="nav-link" to={`/chinh-sach`}>
                  CHÍNH SÁCH
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="nav__item">
              <Link className="nav-link" to={`/lien-he`}>
                LIÊN HỆ
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// function Header({ soluong, setShowCart }) {
//   const onShowCartHandler = () => {
//     setShowCart(true);
//   };
//   return (
//     <div className={classes.row}>
//       <div className={classes.logo}>My Shop</div>
//       <div className={classes.cart} onClick={onShowCartHandler}>
//         <i className="fa fa-shopping-bag" aria-hidden="true"></i>

//         <span className={classes.cartamount}>
//           <sup>{soluong}</sup>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Header;
