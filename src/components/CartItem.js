import React from "react";
import Colors from "./Colors";
import Sizes from "./Sizes";

function CartItem(props) {
    console.log(props.color);
  return (
    <div className="cart-item-container">
      <div className="product-container">
        <div className="product-image">
          <img src={props.imageLink} alt="" />
        </div>
        <div className="product-info">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="price-container">
        <h3>Price</h3>
        <p>{props.price}</p>
      </div>
      <div className="color-container">
        <h3>Color</h3>
        <Colors color={props.color} />
      </div>
      <div className="size-container">
        <h3>Size</h3>
        <Sizes size={props.size} />
      </div>
      <div className="quantity-container">
        <h3>Quantity</h3>
        <div className="quantity">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
      <div className="Total">
        <h3>Total</h3>
        <p>2000PKR</p>
      </div>
    </div>
  );
}

export default CartItem;
