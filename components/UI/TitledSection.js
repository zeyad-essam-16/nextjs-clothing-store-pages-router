import React from "react";

import classes from "./TitledSection.module.css";

const TitledSection = ({ title, children }) => {
  return (
    <section className={classes.titled_section}>
      <h2>{title}</h2>
      <div className={classes.content_wrapper}>{children}</div>
    </section>
  );
};

export default TitledSection;
