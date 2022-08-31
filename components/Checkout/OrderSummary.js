import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./OrderSummary.module.css";

const OrderSummary = ({ order }) => {
  return (
    <>
      <div className={classes.items_view}>
        <ul>
          {order.items.map((item) => (
            <li key={item.id + item.size}>
              <div className={classes.product_image}>
                <Link href={`/product-details/${item.slug}`}>
                  <a>
                    <Image
                      width={656}
                      height={656}
                      src={item.image}
                      alt="product image"
                    />
                  </a>
                </Link>
              </div>
              <div className={classes.product_info}>
                <div className={classes.info_top}>
                  <Link href={`/product-details/${item.slug}`}>
                    <a>
                      <h4>{`${item.quantity} x ${item.title} `}</h4>
                    </a>
                  </Link>
                  <span>{item.price} EGP</span>
                </div>
                <div className={classes.info_bottom}>
                  <span>Size: {item.size}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.order_details}>
        <div className={classes.order_subtotal}>
          <span>Subtotal</span>
          <span>EGP {order.totalPrice.toFixed(2)}</span>
        </div>
        <div className={classes.order_total}>
          <span>Order Total</span>
          <span>EGP {order.totalPrice.toFixed(2)}</span>
        </div>
        <div className={classes.delevery_info}>
          <span>Excluding delivery</span>
          <span>Inclusive of VAT</span>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
