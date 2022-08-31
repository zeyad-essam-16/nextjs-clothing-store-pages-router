import React, { useEffect, useState } from "react";

import classes from "./NewsletterForm.module.css";

let interval;

const NewsletterForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [userCreated, setUserCreated] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (!enteredEmail.includes("@")) {
      setError("invalid input");
      return;
    }
    setUserCreated(null);
    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "something went wrong");
      }
      console.log(data);
      setUserCreated(data.message);
      setEnteredEmail("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [enteredEmail]);

  useEffect(() => {
    interval = setInterval(() => {
      setUserCreated(null);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [userCreated]);

  return (
    <>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <input
          value={enteredEmail}
          type="email"
          id="e-mail"
          placeholder="Enter Your Email Address"
          onChange={(e) => {
            setEnteredEmail(e.target.value);
          }}
        />
        <button>SIGN UP</button>
      </form>
      <div className={classes.messages_wrapper}>
        {userCreated && <p className={classes.success}>{userCreated}</p>}
        {loading && !error && <p>Loading ...</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default NewsletterForm;
