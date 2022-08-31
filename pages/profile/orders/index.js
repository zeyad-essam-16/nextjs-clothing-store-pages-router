import { getSession } from "next-auth/react";
import React from "react";
import OrdersWrapper from "../../../components/Profile/Orders/OrdersWrapper";
import ProfileLinks from "../../../components/Profile/ProfileLinks";

const OrdersPage = () => {
  return (
    <>
      <ProfileLinks>
        <OrdersWrapper />
      </ProfileLinks>
    </>
  );
};

export default OrdersPage;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
