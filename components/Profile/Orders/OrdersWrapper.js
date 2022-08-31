import React, { useEffect, useState } from "react";
import PageLoading from "../../UI/Helpers/PageLoading";
import OrdersList from "./OrdersList";

import classes from "./OrdersWrapper.module.css";

const OrdersWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState();
  const [error, setError] = useState(null);

  const getUserOrders = async () => {
    try {
      const result = await fetch("/api/user/getorders");
      const userOrders = await result.json();
      setOrders(userOrders.orders.reverse());
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const cancelOrderHandler = async (orderId) => {
    try {
      let result = await fetch("/api/user/cancelorder", {
        method: "post",
        body: JSON.stringify({ orderId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw new Error("something went wrong");
      } else {
        let updatedOrders = orders.filter((order) => order._id !== orderId);
        setOrders(updatedOrders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className={classes.orders_Wrapper}>
      <h2>my orders.</h2>
      {orders && orders.length !== 0 && (
        <OrdersList orders={orders} onCancel={cancelOrderHandler} />
      )}
      {orders && orders.length === 0 && (
        <div className="center">you have no orders</div>
      )}
      {error && <div className="center">something went wrong!</div>}
    </div>
  );
};

export default OrdersWrapper;
