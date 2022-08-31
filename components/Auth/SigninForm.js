import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { signIn } from "next-auth/react";

import useInput from "../../lib/Hooks/use-input";

import classes from "./AuthForm.module.css";

import { HiChevronRight } from "react-icons/hi";
import AbsoluteLoading from "../UI/Helpers/AbsoluteLoading";

const validateEmail = (value) =>
  value.trim().length !== 0 && value.includes("@");

const validatePassword = (value) => value.length >= 7;
const SigninForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

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

    if (!emailIsValid || !passwordIsValid) {
      console.log("invalid input");
      setError("Invalid Input !");
      return;
    }
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: emailValue,
      password: passwordValue,
    });

    setLoading(false);

    if (!result.error) {
      router.replace("/");
      router.reload();
    } else {
      setError(result.error);
      console.log(result.error);
    }
  };

  return (
    <div className={classes.form_wrapper}>
      <h1>Sign In.</h1>

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
          <button disabled={loading}>Sign In</button>
          {loading && <AbsoluteLoading color="#fff" />}
        </div>
        <div className={classes.notification_wrapper}>
          {error && <p className="error">{error}</p>}
        </div>
        <Link href="/auth/signup">
          <a>
            Create New Account <HiChevronRight />
          </a>
        </Link>
      </form>
    </div>
  );
};

export default SigninForm;
