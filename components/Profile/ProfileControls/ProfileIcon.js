import React, { useEffect, useState } from "react";
import { Router } from "next/router";

import ProfileMenu from "./ProfileMenu";

import classes from "./ProfileIcon.module.css";

import { BsPerson } from "react-icons/bs";

import { useSelector } from "react-redux";

const ProfileIcon = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const { userIsAuthinticated, session } = useSelector((state) => state.user);

  const toggleProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  const handleRouteChange = () => {
    setOpenProfileMenu(false);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <li
      className={`${classes.icon_wrapper} ${
        userIsAuthinticated && classes.logged_in
      }`}
    >
      <i onClick={toggleProfileMenu}>
        <BsPerson />
      </i>
      {openProfileMenu && <ProfileMenu />}
    </li>
  );
};

export default ProfileIcon;
