import React, { useEffect, useState } from "react";

import AbsoluteLoading from "../UI/Helpers/AbsoluteLoading";

import useInput from "../../lib/Hooks/use-input";

import { MdOutlineErrorOutline } from "react-icons/md";

import classes from "./ContactForm.module.css";

const validateName = (value) => value.trim().length !== 0;

const validateEmail = (value) =>
  value.trim().length !== 0 && value.includes("@");

const validateMessage = (value) =>
  value.trim().length !== 0 && value.trim().length <= 500;

let timeOut;

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput(validateMessage);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!nameIsValid || !emailIsValid || !messageIsValid) {
      console.log("invalid input");
      setStatus("invalid input");
      return;
    }
    setStatus("LOADING");
    try {
      const result = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: messageValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw new error("something went wrong !");
      }
      setStatus("SUCCESS");
    } catch (error) {
      setStatus("ERROR");
    }
    nameReset();
    emailReset();
    messageReset();
  };

  useEffect(() => {
    if (
      status === "SUCCESS" ||
      status === "ERROR" ||
      status === "invalid input"
    ) {
      timeOut = setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [status]);

  return (
    <div className={classes.form_wrapper}>
      <h1>Send Your Message !</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.inputs_wrapper}>
          <div
            className={`${classes.form_control} ${
              nameHasError ? classes.error : ""
            }`}
          >
            <div className={classes.label_wrapper}>
              <label htmlFor="name">Name</label>
              <i>
                <MdOutlineErrorOutline />
              </i>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              autoComplete="off"
            />
          </div>
          <div
            className={`${classes.form_control} ${
              emailHasError ? classes.error : ""
            }`}
          >
            <div className={classes.label_wrapper}>
              <label htmlFor="email">email</label>
              <i>
                <MdOutlineErrorOutline />
              </i>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              autoComplete="off"
            />
          </div>
        </div>
        <div
          className={`${classes.form_control} ${
            messageHasError ? classes.error : ""
          }`}
        >
          <div className={classes.label_wrapper}>
            <label htmlFor="text-area">Message</label>
            <i>
              <MdOutlineErrorOutline />
            </i>
          </div>
          <textarea
            rows={10}
            id="text-area"
            name="text-area"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          ></textarea>
        </div>

        <div className={classes.form_submit}>
          <button disabled={status === "LOADING"}>Submit !</button>
          {status === "LOADING" && <AbsoluteLoading color="#fff" />}
        </div>
      </form>
      <div className={classes.status_wrapper}>
        {status === "invalid input" && (
          <p className={classes.error}>Invalid Input.</p>
        )}
        {status === "ERROR" && (
          <p className={classes.error}>Something went wrong!</p>
        )}
        {status === "SUCCESS" && (
          <p className={classes.success}>Message Sent Succesfully.</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
