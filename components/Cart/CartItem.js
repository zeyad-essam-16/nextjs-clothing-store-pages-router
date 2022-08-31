import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import classes from "./CartItem.module.css";

import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItem(item.id));
  };
  return (
    <li className={classes.cart_item}>
      <Link href={`/product-details/${item.slug}`}>
        <a>
          <div className={classes.image_wrapper}>
            <Image
              src={item.image}
              alt="product image"
              width={656}
              height={656}
            />
          </div>
          <div className={classes.item_info}>
            <div className={classes.info_header}>
              <h2>{item.title}</h2>
              <div className={classes.item_price}>{item.price} EGP</div>
            </div>
            <div className={classes.info_bottom}>
              <div className={classes.item_quantity}>Qnt: {item.quantity}</div>
              <div className={classes.item_size}>Size: {item.size}</div>
            </div>
          </div>
        </a>
      </Link>
      <div className={classes.item_actions}>
        <div className={classes.icon} onClick={deleteItemHandler}>
          <i>
            <RiDeleteBin6Line />
          </i>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
