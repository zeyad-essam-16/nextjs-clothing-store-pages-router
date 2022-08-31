import { getSession } from "next-auth/react";
import React from "react";
import SigninForm from "../../../components/Auth/SigninForm";

const SigninPage = () => {
  return <SigninForm />;
};

export default SigninPage;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
