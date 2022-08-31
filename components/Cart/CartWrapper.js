import React from "react";

import { useSelector } from "react-redux";
import PageLoading from "../UI/Helpers/PageLoading";
import CartDetails from "./CartDetails";
import EmptyCart from "./EmptyCart";

const CartWrapper = () => {
  const cart = useSelector((state) => state.cart);

  const cartIsEmpty = cart.totalPrice === 0;

  if (cart.isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {!cart.isLoading && cartIsEmpty && <EmptyCart />}
      {!cart.isLoading && !cartIsEmpty && <CartDetails cart={cart} />}
    </>
  );
};

export default CartWrapper;
