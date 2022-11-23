import React from "react";
import imgServicios from "../assets/servicios.jpg";
import imgServ1 from "../assets/serv-01.jpg";
import imgServ2 from "../assets/serv-02.jpg";
import imgServ3 from "../assets/serv-03.jpg";
import CardItem from "../components/CardItem";
import "../styles/Services.css";
import { Col, Container, Row } from "react-bootstrap";

function Services() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className="container">
              <div className="row">
                <h2> Servicios en local</h2>

                <p>TODO EN UN MISMO LUGAR!!!</p>

                <ul className="contenido__ul">
                  <li>Tintorería.</li>
                  <li>Lavado de prendas de piel y gamuza.</li>
                  <li>Lavado de vestidos de novia.</li>
                  <li>Lavado de edredones y colchas.</li>
                  <li>Lavado rellenos de pluma.</li>
                  <li>Lavandería ropa general.</li>
                  <li>Planchado.</li>
                  <li>Compostura de ropa.</li>
                </ul>
                <p>
                  Permítanos atenderle, puede comunicarse al teléfono que
                  aparece en esta página o visitarnos personalmente. ¡Le
                  aseguramos limpieza a conciencia en cada una de sus prendas!
                  ¡Venga y descubra cómo le facilitamos el cuidado de su ropa!
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <CardItem
              src={imgServicios}
              text="Text"
              label="Label"
              path="/services"
            />
          </Col>
        </Row>
        <Row>
          <div className="cards">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src={imgServ1}
                  text="Text"
                  label="Label"
                  path="/services"
                />
                <CardItem src={imgServ2} text="" label="" path="/services" />
                <CardItem src={imgServ3} text="" label="" path="/services" />
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Services;
