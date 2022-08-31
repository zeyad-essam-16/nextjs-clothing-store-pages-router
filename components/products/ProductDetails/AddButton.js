import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../../store/cartSlice";

import AbsoluteLoading from "../../UI/Helpers/AbsoluteLoading";

import { GrStatusGood } from "react-icons/gr";

import { AiOutlineShoppingCart } from "react-icons/ai";

import classes from "./AddButton.module.css";

let itemStatusTimeOut;

const AddButton = ({ product, selectedSize, onSizeError }) => {
  const cart = useSelector((state) => state.cart);

  const cartIsLoading = cart.isLoading;

  const dispatch = useDispatch();

  const [isAdding, setIsAdding] = useState();

  const [addItemStatus, setAddItemStatus] = useState(null);

  const addToCartHandler = async () => {
    if (!selectedSize) {
      onSizeError("please select size");
      return;
    }
    setIsAdding(true);

    try {
      const result = await fetch("/api/products/checkavailability", {
        method: "POST",
        body: JSON.stringify({
          productArtNo: product.artNo,
          productSize: selectedSize,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw new error("something went wrong !");
      }
      dispatch(
        cartActions.addItem({
          id: product.title + selectedSize,
          databaseId: product._id,
          title: product.title,
          price: +product.price,
          size: selectedSize,
          artNo: product.artNo,
          quantity: 1,
          image: product.images[0],
          slug: product.slug,
        })
      );
      setAddItemStatus("SUCCESS");
      setIsAdding(false);
    } catch (error) {
      console.log(error);
      setAddItemStatus("ERROR");
      setIsAdding(false);
    }
  };

  useEffect(() => {
    itemStatusTimeOut = setTimeout(() => {
      setAddItemStatus(null);
    }, 3000);

    return () => {
      clearTimeout(itemStatusTimeOut);
    };
  }, [addItemStatus]);

  return (
    <div className={classes.add_button}>
      {addItemStatus === "ERROR" && (
        <p className={classes.error}>Something went wrong</p>
      )}
      {addItemStatus === "SUCCESS" && (
        <p className={classes.success}>
          <i>
            <GrStatusGood />
          </i>
          <span>Item added to your cart</span>
        </p>
      )}
      <button onClick={addToCartHandler} disabled={cartIsLoading || isAdding}>
        Add to cart
        <i>
          <AiOutlineShoppingCart />
        </i>
      </button>
      {cartIsLoading && <AbsoluteLoading color="#fff" />}
      {isAdding && <AbsoluteLoading color="#fff" />}
    </div>
  );
};

export default AddButton;
