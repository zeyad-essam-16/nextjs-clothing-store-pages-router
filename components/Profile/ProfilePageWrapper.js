import React from "react";
import AccountSection from "./AccountSection";
import CartSection from "./CartSection";
import ProfileHero from "./ProfileHero";
import classes from "./ProfilePageWrapper.module.css";

const ProfilePageWrapper = () => {
  return (
    <div>
      <ProfileHero />
      <div className={classes.sections_wrapper}>
        <AccountSection />
        <CartSection />
      </div>
    </div>
  );
};

export default ProfilePageWrapper;
