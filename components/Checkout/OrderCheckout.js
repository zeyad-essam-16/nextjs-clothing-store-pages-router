import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import AbsoluteLoading from "../UI/Helpers/AbsoluteLoading";

import OrderSummary from "./OrderSummary";

import useInput from "../../lib/Hooks/use-input";

import { MdOutlineErrorOutline } from "react-icons/md";

import classes from "./OrderCheckout.module.css";

const validateName = (value) => value.trim().length !== 0;

const validateEmail = (value) =>
  value.trim().length !== 0 && value.includes("@");

const validatePhone = (value) => value.trim().length !== 0;

const validateAddress = (value) =>
  value.trim().length !== 0 && value.trim().length <= 200;

const OrederCheckout = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { userIsAuthinticated, session } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput(validatePhone);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput(validateAddress);

  const orderConfirmHandler = async (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid || !phoneIsValid || !addressIsValid) {
      console.log("invalid input");
      return;
    }
    setIsConfirming(true);

    const orderDate = new Date().toLocaleDateString("en-GB");

    const orderData = {
      orderDate,
      userEmail: session.user.email,
      customerInfo: {
        name: nameValue,
        email: emailValue,
        phoneNo: phoneValue,
        address: addressValue,
      },
      orderInfo: {
        items: cart.items.map((item) => {
          return {
            title: item.title,
            slug: item.slug,
            artNo: item.artNo,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            image: item.image,
          };
        }),
        totalPrice: cart.totalPrice,
      },
    };

    try {
      const confirmOrder = await fetch("/api/products/checkout", {
        method: "POST",
        body: JSON.stringify({ orderData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!confirmOrder.ok) {
        throw new Error("something went wrong");
      } else {
        dispatch(cartActions.resetCart());
        setIsConfirming(false);
        router.push("/profile/orders");
        console.log("order confirmed");
      }
    } catch (error) {
      console.log(error);
      setIsConfirming(false);
    }
  };

  return (
    <div className={classes.order_checkout}>
      <h2>Secure Checkout</h2>
      <div className={classes.order_wrapper}>
        <div className={classes.order_form}>
          <form onSubmit={orderConfirmHandler}>
            <div
              className={`${classes.form_control} ${
                nameHasError ? classes.error : ""
              }`}
            >
              <div className={classes.label_wrapper}>
                <label htmlFor="name">Name</label>
                <i>
                  <MdOutlineErrorOutline />
                </i>
              </div>
              <input
                type="text"
                id="name"
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
            </div>
            <div
              className={`${classes.form_control} ${
                emailHasError ? classes.error : ""
              }`}
            >
              <div className={classes.label_wrapper}>
                <label htmlFor="email">Email</label>
                <i>
                  <MdOutlineErrorOutline />
                </i>
              </div>
              <input
                type="email"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </div>
            <div
              className={`${classes.form_control} ${
                phoneHasError ? classes.error : ""
              }`}
            >
              <div className={classes.label_wrapper}>
                <label htmlFor="phone">Phone Number</label>
                <i>
                  <MdOutlineErrorOutline />
                </i>
              </div>
              <input
                type="text"
                id="phone"
                value={phoneValue}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
            </div>
            <div
              className={`${classes.form_control} ${classes.text_area} ${
                addressHasError ? classes.error : ""
              }`}
            >
              <div className={classes.label_wrapper}>
                <label htmlFor="address">Address</label>
                <i>
                  <MdOutlineErrorOutline />
                </i>
              </div>
              <textarea
                maxLength={200}
                id="address"
                value={addressValue}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              ></textarea>
            </div>
            <div className={classes.button_wrapper}>
              <button disabled={isConfirming}>Confirm Order</button>
              {isConfirming && <AbsoluteLoading color="#fff" />}
            </div>
          </form>
        </div>
        <div className={classes.order_summary}>
          <h3>Order Summary</h3>
          <OrderSummary
            order={{ items: cart.items, totalPrice: cart.totalPrice }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrederCheckout;
