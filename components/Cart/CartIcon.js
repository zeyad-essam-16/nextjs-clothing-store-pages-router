import React from "react";

import Link from "next/link";

import { useSelector } from "react-redux";

import { BsCart2 } from "react-icons/bs";

import classes from "./CartIcon.module.css";

const CartIcon = () => {
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.items.reduce(
    (cur, item) => (cur += item.quantity),
    0
  );

  return (
    <li className={classes.cart_icon}>
      <Link href="/cart">
        <a>
          <i>
            <BsCart2 />
          </i>
        </a>
      </Link>
      {cart.items.length > 0 && <span>{totalQuantity}</span>}
    </li>
  );
};

export default CartIcon;
