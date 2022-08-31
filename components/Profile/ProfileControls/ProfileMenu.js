import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { useSelector } from "react-redux";

import classes from "./ProfileMenu.module.css";

const ProfileMenu = () => {
  const { userIsAuthinticated, session } = useSelector((state) => state.user);

  return (
    <div className={classes.menu_wrapper}>
      {session && <h4>{session.user.name}</h4>}
      <ul className={classes.profile_links}>
        {session && (
          <>
            <li>
              <Link href="/profile">My Account</Link>
            </li>
            <li>
              <Link href="/profile/orders">My Orders</Link>
            </li>
            <li
              className={classes.logout}
              onClick={() => {
                signOut();
              }}
            >
              Log Out
            </li>
          </>
        )}
        {!session && (
          <>
            <li>
              <Link href="/auth/signin">Sign In</Link>
            </li>
            <li>
              <Link href="/auth/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileMenu;
