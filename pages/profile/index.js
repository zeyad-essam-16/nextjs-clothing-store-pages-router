import React from "react";

import { getSession } from "next-auth/react";
import ProfilePageWrapper from "../../components/Profile/ProfilePageWrapper";
import ProfileLinks from "../../components/Profile/ProfileLinks";

const ProfilePage = () => {
  return (
    <ProfileLinks>
      <ProfilePageWrapper />
    </ProfileLinks>
  );
};

export default ProfilePage;

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
