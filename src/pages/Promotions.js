import React from "react";
import Promo3x2 from "../assets/promo_3x2.jpg";
import PromoEdredones from "../assets/promo_Edredones.jpg";
import PromoFacebook from "../assets/promo_Facebook.jpg";
import PromoCamisas from "../assets/promo_Camisas.jpg";
import { Container, Row } from "react-bootstrap";
import CardItem from "../components/CardItem";

function Promotions() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div>
            <h2 className="card-title">Promociones</h2>
            <p className="card-text">
              <p>✨Abierto ✨</p>
              <p>Lunes a viernes de 8 A.M. a 6 P.M.</p>
              <p>Sábado de 9 A.M. a 4 P. M.</p>
              <p>
                Te esperamos en calle Rufino Tamayo #52, local 10, plaza Tamayo
                Acapantzingo, Cuernavaca
              </p>
            </p>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <CardItem
            src={PromoFacebook}
            text="Text"
            label="Label"
            path="/services"
          />
        </div>
      </div>
      <div className="row">
        <div className="cards">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem src={PromoCamisas} text="" label="" path="/services" />
              <CardItem src={Promo3x2} text="" label="" path="/services" />
              <CardItem
                src={PromoEdredones}
                text=""
                label=""
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
