import React from "react";
import { useSelector } from "react-redux";
import TitledSection from "../UI/TitledSection";

import classes from "./AccountSection.module.css";

const AccountSection = () => {
  const { userIsAuthinticated, session } = useSelector((state) => state.user);
  return (
    <TitledSection title="my account">
      <div className={classes.content_wrapper}>
        <div>
          <h4>Email :</h4>
          <span>{session && session.user.email}</span>
        </div>
        <div>
          <h4>name :</h4>
          <span>{session && session.user.name}</span>
        </div>
      </div>
    </TitledSection>
  );
};

export default AccountSection;
