import React, { useEffect } from "react";

import Link from "next/link";

import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useSession } from "next-auth/react";

import ProfileIcon from "../Profile/ProfileControls/ProfileIcon";

import CartIcon from "../Cart/CartIcon";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

import classes from "./MainNavigation.module.css";
import Image from "next/image";

const MainNavigation = ({ onToggleMenu, menuIsOpened }) => {
  const { data: session, status } = useSession();

  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(userActions.setUser({ session }));
    } else {
      dispatch(userActions.removeUser());
    }
  }, [dispatch, session]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header_inner}>
          <div className={classes.mobile_button}>
            <button onClick={onToggleMenu}>
              {!menuIsOpened && (
                <i>
                  <IoMenuOutline />
                </i>
              )}
              {menuIsOpened && (
                <i>
                  <IoCloseOutline />
                </i>
              )}
            </button>
          </div>
          <div className={classes.contact}>
            <div className={classes.contact_link}>
              <Link href="/contact">
                <a>
                  <i>
                    <FiMessageSquare />
                  </i>
                  <span>Contact us</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.logo}>
            <Link href="/">
              <a className={classes.pc_logo}>
                <Image
                  src="/black-diamond-logo-pc.png"
                  width={2000}
                  height={201}
                  alt="logo"
                  layout="responsive"
                  priority={true}
                />
              </a>
            </Link>
            <Link href="/">
              <a className={classes.mobile_logo}>
                <Image
                  src="/bd-logo.png"
                  width={1500}
                  height={1000}
                  alt="logo"
                  layout="responsive"
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className={classes.actions}>
            <ul>
              <ProfileIcon />
              <CartIcon />
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
