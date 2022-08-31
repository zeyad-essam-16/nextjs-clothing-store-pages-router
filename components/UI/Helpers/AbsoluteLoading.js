import React from "react";

import classes from "./AbsoluteLoading.module.css";

import ClipLoader from "react-spinners/ClipLoader";

const AbsoluteLoading = ({ color }) => {
  return (
    <div className={classes.loading_wrapper}>
      <ClipLoader color={color} size={24} />
    </div>
  );
};

export default AbsoluteLoading;
