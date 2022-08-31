import React from "react";
import AbsoluteLoading from "./AbsoluteLoading";

import classes from "./PageLoading.module.css";

const PageLoading = () => {
  return (
    <div className={classes.loading}>
      <AbsoluteLoading color="#000" />
    </div>
  );
};

export default PageLoading;
