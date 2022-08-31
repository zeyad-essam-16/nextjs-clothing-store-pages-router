import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MainNavigation from "./MainNavigation";
import MobileNav from "./MobileNav/MobileNav";
import NavLinks from "./NavLinks/NavLinks";
import { productsLinks } from "../../lib/navLinks";

import { useDispatch, useSelector } from "react-redux";
import { getSession } from "next-auth/react";
import { cartActions } from "../../store/cartSlice";

import Footer from "./Footer";

import classes from "./Layout.module.css";

// storing user cart timeout
let storeCartTimeOut;

const Layout = ({ children }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [initial, setInitial] = useState(true);

  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);

  // handle user cart
  const getUserCart = async () => {
    dispatch(cartActions.setIsLoading(true));
    const session = await getSession();
    if (session) {
      try {
        const response = await fetch("/api/user/getcart");
        if (!response.ok) {
          throw new Error("custom error");
        }
        const userCart = await response.json();

        dispatch(cartActions.replaceCart(userCart));
      } catch (error) {
        console.log(error.message || "something went wrong");
      }
    } else {
      const userCart = localStorage.getItem("cart");

      if (userCart) {
        dispatch(cartActions.replaceCart(JSON.parse(userCart)));
      }
    }
    dispatch(cartActions.setIsLoading(false));
    setInitial(false);
  };

  const storeUserCart = async () => {
    const session = await getSession();
    if (session) {
      const response = await fetch("/api/user/storecart", {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  // get cart on initial load
  useEffect(() => {
    getUserCart();
  }, []);

  // set cart on cart change
  useEffect(() => {
    if (initial) {
      return;
    }
    storeCartTimeOut = setTimeout(() => {
      storeUserCart();
    }, 400);

    return () => {
      clearTimeout(storeCartTimeOut);
    };
  }, [cart]);

  const toggleMobileMemu = () => {
    setShowMobileNav(!showMobileNav);
  };

  // hide mobile menu on url changes
  const hideMobileMenu = () => {
    setShowMobileNav(false);
  };

  // set showMobileNav to false on route change to reenable scroll
  useEffect(() => {
    router.events.on("routeChangeStart", hideMobileMenu);
    return () => {
      router.events.off("routeChangeStart", hideMobileMenu);
    };
  }, [router.events]);

  // disable scroll when mobile menu is open
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);

  // close mobile menu when resize window to re enable scroll
  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setShowMobileNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MainNavigation
        onToggleMenu={toggleMobileMemu}
        menuIsOpened={showMobileNav}
      />
      <NavLinks links={productsLinks} />
      <MobileNav isOpened={showMobileNav} onClose={hideMobileMenu} />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
