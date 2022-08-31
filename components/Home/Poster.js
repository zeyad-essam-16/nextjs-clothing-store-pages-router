import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Poster.module.css";

const Poster = ({ pcImage, mobileImage, text, linkUrl, linkText }) => {
  return (
    <div className={classes.poster}>
      <div className={`${classes.image_wrapper} ${classes.pc_image}`}>
        <Image
          src={pcImage}
          alt="poster image"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          priority
        />
      </div>
      <div className={`${classes.image_wrapper} ${classes.mobile_image}`}>
        <Image
          src={mobileImage}
          alt="poster image"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 0%"
          priority
        />
      </div>
      <div className={classes.discover}>
        <p>{text}</p>
        <div className={classes.button}>
          <Link href={linkUrl}>{linkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default Poster;
