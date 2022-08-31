import React, { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

import classes from "./NavLinks.module.css";
import NavLink from "./NavLink";
import NavDrop from "./NavDrop";

const NavLinks = ({ links }) => {
  const [direction, setDirection] = useState("");
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    isScrollingDown && setDirection("down");
    isScrollingUp && setDirection("up");
  }, [isScrollingDown, isScrollingUp]);
  return (
    <div
      className={`${classes.navlinks_wrapper} ${
        direction === "down" && classes.hide
      }`}
    >
      <div className={classes.nav_links}>
        <ul>
          {links.map((link) =>
            link.dropDown ? (
              <NavDrop key={link.text} link={link} />
            ) : (
              <NavLink key={link.text} link={link} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
