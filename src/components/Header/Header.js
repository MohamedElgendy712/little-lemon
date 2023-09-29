import React from "react";
import "./Header.css";

import restaurantFood from "../../images/restaurantfood.jpg";

function Header(props) {
  return (
    <header className="header-container">
      <div>
        <h1>{props.cafeTitle}</h1>
        <h3>{props.cafeLocation}</h3>
        <p>{props.cafeDescription}</p>
        <button>{props.cafeButtonName}</button>
      </div>
      <div>
        <img
          className="header-image"
          src={props.image === "restaurantFood" ? restaurantFood : null}
          alt="restaurant food"
        />
      </div>
    </header>
  );
}

export default Header;
