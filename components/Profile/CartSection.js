import React from "react";
import { useSelector } from "react-redux";

import TitledSection from "../UI/TitledSection";
import LinkButton from "../UI/Buttons/LinkButton";

import classes from "./CartSection.module.css";

const CartSection = () => {
  const cart = useSelector((state) => state.cart);

  const cartIsEmpty = cart.items.length === 0 || !cart.items;

  return (
    <TitledSection title="my cart service">
      {cartIsEmpty && (
        <div className={classes.empty_wrapper}>
          <p>No items in your cart...</p>
          <LinkButton text="go shopping" url="/products" width="100%" />
        </div>
      )}
      {!cartIsEmpty && (
        <>
          <div className={classes.items_count}>
            You have {cart.items.length} items in your cart
          </div>
          <LinkButton text="go to cart" url="/cart" width="100%" />
        </>
      )}
    </TitledSection>
  );
};

export default CartSection;
