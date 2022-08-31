import React from "react";

import classes from "./CheckOut.module.css";
import LinkButton from "../UI/Buttons/LinkButton";

const CheckOut = ({ totalPrice }) => {
  return (
    <div className={classes.checkout}>
      <h2>Order Summary</h2>
      <div className={classes.checkout_inner}>
        <div className={classes.order_subtotal}>
          <span>Subtotal</span>
          <span>EGP {totalPrice.toFixed(2)}</span>
        </div>
        <div className={classes.order_total}>
          <span>Order Total</span>
          <span>EGP {totalPrice.toFixed(2)}</span>
        </div>
        <div className={classes.delevery_info}>
          <span>Excluding delivery</span>
          <span>Inclusive of VAT</span>
        </div>
        <LinkButton text="go to checkout" url="/checkout" width="100%" />
      </div>
    </div>
  );
};

export default CheckOut;
