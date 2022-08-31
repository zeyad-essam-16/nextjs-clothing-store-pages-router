import React, { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

import { BiChevronDown } from "react-icons/bi";

import classes from "./ProfileLinks.module.css";
import Image from "next/image";

const ProfileLinks = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  // mobile menu toggle function
  const toggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleUrlChange = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleUrlChange);
    return () => {
      router.events.off("routeChangeStart", handleUrlChange);
    };
  }, []);

  return (
    <div className={classes.links_wrapper}>
      <div className={classes.profile_links}>
        <div className={classes.logo}>
          <Link href="/">
            <a>
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
        <div className={classes.links_list}>
          <h3 className={classes.menu_toggle} onClick={toggleMenuHandler}>
            <span>Menu</span>
            <i className={menuIsOpen ? classes.active : ""}>
              <BiChevronDown />
            </i>
          </h3>
          <ul className={`${menuIsOpen ? classes.active : ""}`}>
            <li>
              <Link href="/profile">
                <a
                  className={
                    router.pathname == "/profile" ? classes.active : ""
                  }
                >
                  Overview
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile/orders">
                <a
                  className={
                    router.pathname == "/profile/orders" ? classes.active : ""
                  }
                >
                  My Orders
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLinks;
