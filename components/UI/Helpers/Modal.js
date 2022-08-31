import { useRef } from "react";
import classes from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import opacityAnimation from "../../../lib/opacityAnimation.module.css";
import slideAnimation from "../../../lib/slideAnimation.module.css";
import { CSSTransition } from "react-transition-group";

export const Backdrop = (props) => {
  const backdropNodeRef = useRef();
  return (
    <CSSTransition
      in={props.isOpened}
      timeout={400}
      classNames={opacityAnimation}
      mountOnEnter
      unmountOnExit
      nodeRef={backdropNodeRef}
    >
      <div
        className={classes.backdrop}
        onClick={props.onClose}
        ref={backdropNodeRef}
      />
    </CSSTransition>
  );
};

const ModalOverlay = (props) => {
  const overlayNodeRef = useRef();
  return (
    <CSSTransition
      in={props.isOpened}
      timeout={400}
      classNames={slideAnimation}
      mountOnEnter
      unmountOnExit
      nodeRef={overlayNodeRef}
    >
      <div className={classes.modal} ref={overlayNodeRef}>
        <div className={classes.modal_header}>
          <h4>{props.title}.</h4>
          <i onClick={props.onClose}>
            <AiOutlineClose />
          </i>
        </div>
        <div className={classes.content}>{props.children}</div>
      </div>
    </CSSTransition>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} isOpened={props.isOpened} />
      <ModalOverlay
        onClose={props.onClose}
        title={props.title}
        isOpened={props.isOpened}
      >
        {props.children}
      </ModalOverlay>
    </>
  );
};

export default Modal;
