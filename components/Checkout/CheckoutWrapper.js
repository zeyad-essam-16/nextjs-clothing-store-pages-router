import React from "react";

import { useSelector } from "react-redux";
import PageLoading from "../UI/Helpers/PageLoading";
import OrderCheckout from "./OrderCheckout";

import classes from "./CheckoutWrapper.module.css";

const CheckoutWrapper = () => {
  const cart = useSelector((state) => state.cart);

  const cartIsEmpty = cart.totalPrice === 0;

  return (
    <>
      {cart.isLoading && <PageLoading />}
      {!cart.isLoading && cartIsEmpty && (
        <div className={classes.no_items}>
          <h3>Checkout.</h3>
          <p>you have no items in your cart</p>
        </div>
      )}
      {!cart.isLoading && !cartIsEmpty && <OrderCheckout />}
    </>
  );
};

export default CheckoutWrapper;
