import React from "react";

import CartItem from "./CartItem";

import classes from "./CartDetails.module.css";
import CheckOut from "./CheckOut";

const CartDetails = ({ cart }) => {
  const totalQuantity = cart.items.reduce(
    (cur, item) => (cur += item.quantity),
    0
  );

  return (
    <div className={classes.details_wrapper}>
      <div className={classes.cart_items}>
        <h2>My Shopping Bag: ({totalQuantity} Items)</h2>
        <div className={classes.list_wrapper}>
          <ul>
            {cart.items.map((item) => (
              <CartItem key={item.id + item.size} item={item} />
            ))}
          </ul>
        </div>
      </div>
      <CheckOut totalPrice={cart.totalPrice} />
    </div>
  );
};

export default CartDetails;
