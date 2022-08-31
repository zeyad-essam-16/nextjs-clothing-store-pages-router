import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AbsoluteLoading from "../../UI/Helpers/AbsoluteLoading";

import classes from "./OrderItem.module.css";

const OrderItem = ({ order, onCanel }) => {
  const [isCancling, setIsCanceling] = useState(false);

  const totalQuantity = order.orderInfo.items.reduce(
    (cur, item) => (cur += item.quantity),
    0
  );

  return (
    <li className={classes.order_item}>
      <div className={classes.order_header}>
        <div>
          <div className={classes.header_section}>
            <span>Order Summary</span>
            <span>
              {totalQuantity} {totalQuantity === 1 ? "product" : "products"}
            </span>
          </div>
          <div className={classes.header_section}>
            <span>order no:</span>
            <span>{order._id.slice(0, 7)}</span>
          </div>
        </div>
        <div>
          <div className={classes.header_section}>
            <span>order date:</span>
            <span>{order.orderDate}</span>
          </div>
          <div className={classes.header_section}>
            <span>total amout</span>
            <span>{order.orderInfo.totalPrice} EGP</span>
          </div>
        </div>
      </div>
      <div className={classes.order_images}>
        {order.orderInfo.items.map((item) => (
          <div
            key={`${item.slug}${item.size}`}
            className={classes.image_wrapper}
          >
            <Link href={`/product-details/${item.slug}`}>
              <a>
                <Image
                  width={170}
                  height={170}
                  alt="product image"
                  src={item.image}
                />
              </a>
            </Link>
            <span className={classes.quantity_count}>X{item.quantity}</span>
            <span className={classes.size_view}>size: {item.size}</span>
          </div>
        ))}
      </div>
      <div className={classes.order_actions}>
        {/* <Link href={`/profile/orders/${order._id}`}>
          Click for order details!
        </Link> */}
        <span>Order details!(N/A)</span>
        <div>
          <button
            disabled={isCancling}
            onClick={() => {
              setIsCanceling(true);
              onCanel(order._id);
            }}
          >
            Cancel Order
          </button>
          {isCancling && <AbsoluteLoading color="#fff" />}
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
