import React from "react";
import OrderItem from "./OrderItem";

import classes from "./OrdersList.module.css";

const OrdersList = ({ orders, onCancel }) => {
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} onCanel={onCancel} />
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
