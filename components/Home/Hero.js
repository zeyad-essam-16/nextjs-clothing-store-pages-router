import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import Link from "next/link";

let windowWitdh;

// set doc height attribute to the window inner height value
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  windowWitdh = window.innerWidth;
  console.log(windowWitdh);
};

// only reset the inner height attribute if the window width changes to prevent layoutshift when the mobile browser bar disappears
const documentResizeHandler = () => {
  if (window.innerWidth !== windowWitdh) {
    documentHeight();
  }
};

const Hero = () => {
  useEffect(() => {
    documentHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", documentResizeHandler);
    return () => {
      window.removeEventListener("resize", documentResizeHandler);
    };
  }, {});

  return (
    <>
      <div className={classes.hero}>
        <div className={classes.backgroundVideo_wrapper}>
          <video autoPlay loop muted>
            <source
              src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/6kDjKAPWSG_HD.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={classes.discover}>
          <p>FALL FASHION 2022</p>
          <div className={classes.button}>
            <Link href="/products">Go Shopping</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
