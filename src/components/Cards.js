import React from "react";
import "../styles/Services.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>

      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src="../images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
          <CardItem
            src="../images/img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
