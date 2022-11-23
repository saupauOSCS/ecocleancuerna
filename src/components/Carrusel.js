import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgHome1 from "../assets/home-01.jpg";
import imgHome2 from "../assets/home-02.jpg";
import imgHome3 from "../assets/home-03.jpg";
import imgHome4 from "../assets/home-04.jpg";

function Carrusel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={imgHome1} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={imgHome2} alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={imgHome3} alt="Image Three" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={imgHome4} alt="Image Four" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
