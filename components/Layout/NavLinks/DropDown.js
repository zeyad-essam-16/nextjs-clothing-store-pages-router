import React, { useEffect } from "react";
import Link from "next/link";

import classes from "./DropDown.module.css";

const DropDown = ({ dropDown }) => {
  return (
    <div className={classes.dropdown_wrapper}>
      <div className={classes.dropdown_inner}>
        <h3>{dropDown.title}</h3>
        <ul>
          {dropDown.links.map((link) => (
            <li key={link.text}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
