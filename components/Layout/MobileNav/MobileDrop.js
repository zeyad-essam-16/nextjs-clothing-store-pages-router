import React, { useState, useRef } from "react";

import { BiChevronRight } from "react-icons/bi";

import classes from "./MobileDrop.module.css";

import NavigationTab from "./NavigationTab";

const MobileDrop = ({ link }) => {
  const [showNavigationTap, setShowNavigationTap] = useState(false);

  const toggleNavigationTap = () => {
    setShowNavigationTap(!showNavigationTap);
  };

  const hideNavigationTap = () => {
    setShowNavigationTap(false);
  };

  return (
    <li className={classes.mobile_link}>
      <div
        className={classes.navigationTap_toggle}
        onClick={toggleNavigationTap}
      >
        <p>{link.text}</p>
        <i>
          <BiChevronRight />
        </i>
      </div>
      <NavigationTab
        title={link.text}
        list={link.dropDown}
        onClose={hideNavigationTap}
        isOpened={showNavigationTap}
      />
    </li>
  );
};

export default MobileDrop;
