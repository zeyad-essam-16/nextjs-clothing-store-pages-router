import React from "react";
import Link from "next/link";

import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <div>
      <div className={classes.empty}>
        <h1>Cart is empty.</h1>
        <Link href={"/products"}>Go Shopping</Link>
      </div>
    </div>
  );
};

export default EmptyCart;
