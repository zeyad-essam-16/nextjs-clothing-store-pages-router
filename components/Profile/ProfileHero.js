import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

import classes from "./ProfileHero.module.css";

const ProfileHero = () => {
  const { userIsAuthinticated, session } = useSelector((state) => state.user);

  return (
    <div className={classes.profile_hero}>
      <div className={classes.background_image}>
        <div className="background_image">
          <Image
            src="/profile-hero.jpg"
            alt="background-image"
            width={2400}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </div>
      <div className={classes.user_info}>
        <div className={classes.user_image}>
          {session && session.user.name[0]}
        </div>
        <h3 className={classes.user_name}>
          {session && <span>{session.user.name}</span>}
        </h3>
      </div>
    </div>
  );
};

export default ProfileHero;
