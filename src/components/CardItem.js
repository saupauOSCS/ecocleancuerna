import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="Travel Image"
            src={props.src}
          />
        </figure>
      </li>
    </>
  );
}

export default CardItem;
