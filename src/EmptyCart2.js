import React from "react";
import { Link } from "react-router-dom";
import "./Apps.css";
import img from "./assets/images/empty3.png";



function EmptyCart() {
  return (
    <div>
      <h3 className="empty1"> Your Cart is Empty !</h3>
      <img className="imgempty1" src={img} ></img>
      <div className="shop">
        <Link to="/">
          <button className="shopping1"> CONTINUE SHOPPING</button>
        </Link>
      </div>

    </div>
  )

}
export default EmptyCart;
