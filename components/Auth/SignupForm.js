import Link from "next/link";
import React, { useState } from "react";

import useInput from "../../lib/Hooks/use-input";
import AbsoluteLoading from "../UI/Helpers/AbsoluteLoading";

import classes from "./AuthForm.module.css";

const validateName = (value) => value.trim().length !== 0;

const validateEmail = (value) =>
  value.trim().length !== 0 && value.includes("@");

const validatePassword = (value) => value.length >= 7;

async function createUser(email, password, name) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const SignupForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [createdUser, setCreatedUser] = useState(null);
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
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(validatePassword);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(null);
    setCreatedUser(null);

    if (!emailIsValid || !passwordIsValid || !nameIsValid) {
      console.log("invalid input");
      setError("Invalid Input!");
      return;
    }
    setLoading(true);
    try {
      const result = await createUser(emailValue, passwordValue, nameValue);
      nameReset();
      emailReset();
      passwordReset();
      if (result.message === "Created user!") {
        setCreatedUser(true);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message || "something went wrong!");
    }
    setLoading(null);
  };

  return (
    <div className={classes.form_wrapper}>
      <h1>Sign Up.</h1>

      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes.form_control} ${
            emailHasError ? classes.has_error : ""
          }`}
        >
          <label htmlFor="email">Email:</label>
          <input
            autoFocus
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
        </div>
        <div
          className={`${classes.form_control} ${
            nameHasError ? classes.has_error : ""
          }`}
        >
          <label htmlFor="user-name">Name:</label>
          <input
            type="text"
            id="user-name"
            min={7}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
        </div>
        <div
          className={`${classes.form_control} ${
            passwordHasError ? classes.has_error : ""
          }`}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            min={7}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordValue}
          />
        </div>
        <div className={classes.button_wrapper}>
          <button disabled={loading}>Sign Up</button>
          {loading && <AbsoluteLoading color="#fff" />}
        </div>
        <div className={classes.notification_wrapper}>
          {error && <p className="error">{error}</p>}
          {createdUser && <p className="success">Successfully created user!</p>}
        </div>
        <Link href="/auth/signin">
          <a>Already Have An Account . Sign In ?</a>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
