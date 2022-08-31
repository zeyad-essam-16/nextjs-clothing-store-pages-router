import { getSession } from "next-auth/react";
import React from "react";
import SignupForm from "../../../components/Auth/SignupForm";

const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;

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
