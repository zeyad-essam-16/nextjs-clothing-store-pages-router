import React, { useRef } from "react";
import Link from "next/link";

import classes from "./NavigationTap.module.css";
import slideAnimation from "../../../lib/slideAnimation.module.css";

import { CSSTransition } from "react-transition-group";

import { BiChevronLeft } from "react-icons/bi";

const NavigationTab = ({ list, title, onClose, isOpened }) => {
  const animatedNodeRef = useRef();

  return (
    <CSSTransition
      in={isOpened}
      mountOnEnter
      unmountOnExit
      timeout={400}
      classNames={slideAnimation}
      nodeRef={animatedNodeRef}
    >
      <div className={classes.tab_wrapper} ref={animatedNodeRef}>
        <div className={classes.navigation_tab}>
          <div className={classes.tab_header}>
            <i onClick={onClose}>
              <BiChevronLeft />
            </i>
            <div className={classes.icon}></div>
            <h2>{title}</h2>
          </div>
          <div>
            <ul>
              {list.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.url}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default NavigationTab;
