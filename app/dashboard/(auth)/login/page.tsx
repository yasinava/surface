"use client";

import React, { useEffect, useState } from "react";
import { Validate } from "@/utils/validate";
import { TouchType, ValidateErrorType } from "@/utils/type";
import { signIn, useSession } from "next-auth/react";
const page = () => {
  const { status, data } = useSession();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorSubmit, setErrorSubmit] = useState("");
  const [touch, setTouch] = useState<TouchType>({});
  const [error, setError] = useState<ValidateErrorType>({});

  useEffect(() => {
    setError(Validate(formData, "login"));
  }, [formData, touch]);

  const changHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const foucsHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouch({ ...touch, [e.target.name]: true });
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    const res = await signIn("credentials", { email, password });
    if (res?.error) return setErrorSubmit(res?.error);
  };
  if (status === "loading") {
    return <div className="loading-loginSession">loading.......</div>;
  }

  return (
    <div className="register-form-container">
      <form className="form" onSubmit={submitHandler}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <label>
          <input
            required
            value={formData.email}
            name="email"
            placeholder=""
            onChange={changHandler}
            onFocus={foucsHandler}
            type="email"
            className="input"
          />
          <span className={error.email && touch.email ? "error-input" : ""}>
            Email
          </span>
        </label>
        <label>
          <input
            required
            value={formData.password}
            name="password"
            placeholder=""
            type="password"
            className="input"
            onChange={changHandler}
            onFocus={foucsHandler}
          />
          <span
            className={error.password && touch.password ? "error-input" : ""}
          >
            Password
          </span>
        </label>
        <button className="submit">Submit</button>
        {errorSubmit}
        <p className="signin">
          create account <a href="/dashboard/register">Sign up</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
