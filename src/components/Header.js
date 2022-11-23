import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <a href="/">
              <img className="imgHeader" src={Logo} alt="ECOCLEAN Cuernavaca" />
            </a>
          </Col>
          <Col md={5}>
            <div>
              <h4 className="d-flex justify-content-end">
                ecocleancuerna@gmail.com
              </h4>
              <h4 className="d-flex justify-content-end">
                Tel. (777) 312 23 54
              </h4>
              <h4 className="d-flex justify-content-end">
                <img
                  src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"
                  alt="logoWA"
                />
                777-224-5849
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
