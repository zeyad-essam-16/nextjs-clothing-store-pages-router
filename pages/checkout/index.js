import { getSession } from "next-auth/react";
import React from "react";
import CheckoutWrapper from "../../components/Checkout/CheckoutWrapper";

const index = () => {
  return <CheckoutWrapper />;
};

export default index;

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
