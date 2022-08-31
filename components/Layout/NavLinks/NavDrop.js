import React, { useEffect, useState } from "react";

import { Router } from "next/router";

import DropDown from "./DropDown";

import { BiChevronDown } from "react-icons/bi";

const NavDrop = ({ link }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hideDropDown = () => {
    setShowDropDown(false);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", hideDropDown);
    return () => {
      Router.events.off("routeChangeStart", hideDropDown);
    };
  }, []);

  return (
    <li
      onMouseEnter={() => {
        setShowDropDown(true);
      }}
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
    >
      <span>
        {link.text}{" "}
        <i>
          <BiChevronDown />
        </i>
      </span>
      {showDropDown && <DropDown dropDown={link.dropDown} />}
    </li>
  );
};

export default NavDrop;
