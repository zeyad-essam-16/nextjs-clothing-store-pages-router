import React, { useRef } from "react";

import { productsLinks } from "../../../lib/navLinks";
import MobileLink from "./MobileLink";
import MobileDrop from "./MobileDrop";

import classes from "./MobileNav.module.css";
import opacityAnimation from "../../../lib/opacityAnimation.module.css";
import { CSSTransition } from "react-transition-group";

import { useSelector } from "react-redux";

import Link from "next/link";
import { signOut } from "next-auth/react";

const MobileNav = ({ isOpened, onClose }) => {
  const { userIsAuthinticated, session } = useSelector((state) => state.user);
  const animatedNodeRef = useRef();

  return (
    <>
      <CSSTransition
        in={isOpened}
        timeout={400}
        classNames={opacityAnimation}
        mountOnEnter
        unmountOnExit
        nodeRef={animatedNodeRef}
      >
        <div className={classes.mobilenav_wrapper} ref={animatedNodeRef}>
          <div className={classes.mobile_nav}>
            <ul>
              {productsLinks.map((link) =>
                link.dropDown ? (
                  <MobileDrop key={link.text} link={link} />
                ) : (
                  <MobileLink key={link.text} link={link} />
                )
              )}
            </ul>
            <ul>
              {session && (
                <>
                  <li>
                    <Link href="/profile">
                      <a>My Account / {session.user.name}</a>
                    </Link>
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
                    <span>Log Out</span>
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
        </div>
      </CSSTransition>
    </>
  );
};

export default MobileNav;
