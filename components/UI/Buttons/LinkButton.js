import Link from "next/link";
import React from "react";

import classes from "./LinkButton.module.css";

const LinkButton = ({ text, url, width }) => {
  return (
    <Link href={url}>
      <a className={classes.link_button} style={{ width }}>
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
