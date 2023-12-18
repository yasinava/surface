"use client";
import React, { useEffect, useState } from "react";
import { Validate } from "@/utils/validate";
import { TouchType, ValidateErrorType } from "@/utils/type";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDay: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [touch, setTouch] = useState<TouchType>({});
  useEffect(() => {
    setError(Validate(formData, "register"));
  }, [formData, touch]);
  const [error, setError] = useState<ValidateErrorType>({});
  const [errSubmit, setErrSubmit] = useState(false);

  const foucsHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouch({ ...touch, [e.target.name]: true });
  };
  const changHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.firstName[0] + " " + formData.lastName[0];
    const email = formData.email[0];
    const password = formData.password[0];
    const address = formData.address[0];
    const birthDay = formData.birthDay[0];
    const phoneNumber = Number(formData.phoneNumber[0]);
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        address,
        birthDay,
        phoneNumber,
      });
      res.status === 201 &&
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          birthDay: "",
          phoneNumber: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
      router.push("/dashboard/login?success=Account has been created:)");
    } catch (error) {
      setErrSubmit(true);
    }
  };
  return (
    <div className="register-form-container">
      <form className="form" onSubmit={submitHandler}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              required
              value={formData.firstName}
              name="firstName"
              onChange={changHandler}
              onFocus={foucsHandler}
              placeholder=""
              type="text"
              className="input"
            />
            <span
              className={
                error.firstName && touch.firstName ? "error-input" : ""
              }
            >
              Firstname
            </span>
          </label>

          <label>
            <input
              required
              value={formData.lastName}
              name="lastName"
              placeholder=""
              onChange={changHandler}
              onFocus={foucsHandler}
              type="text"
              className="input"
            />
            <span
              className={error.lastName && touch.lastName ? "error-input" : ""}
            >
              Lastname
            </span>
          </label>
        </div>

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
        <div className="flex">
          <label>
            <input
              required
              value={formData.birthDay}
              name="birthDay"
              placeholder=""
              type="text"
              onChange={changHandler}
              onFocus={foucsHandler}
              className="input"
            />
            <span
              className={error.birthDay && touch.birthDay ? "error-input" : ""}
            >
              BirthDay
            </span>
          </label>
          <label>
            <input
              required
              value={formData.phoneNumber}
              name="phoneNumber"
              placeholder=""
              type="number"
              onChange={changHandler}
              onFocus={foucsHandler}
              className="input"
            />
            <span
              className={
                error.phoneNumber && touch.phoneNumber ? "error-input" : ""
              }
            >
              PhoneNumber
            </span>
          </label>
        </div>
        <label>
          <input
            required
            value={formData.address}
            name="address"
            placeholder=""
            type="text"
            className="input"
            onChange={changHandler}
            onFocus={foucsHandler}
          />
          <span className={error.address && touch.address ? "error-input" : ""}>
            Address
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
        <label>
          <input
            required
            value={formData.confirmPassword}
            name="confirmPassword"
            placeholder=""
            type="password"
            className="input"
            onChange={changHandler}
            onFocus={foucsHandler}
          />
          <span
            className={
              error.confirmPassword && touch.confirmPassword
                ? "error-input"
                : ""
            }
          >
            Confirm password
          </span>
        </label>
        <button className="submit">Submit</button>
        {errSubmit ? (
          <p style={{ color: "red" }} onClick={() => setErrSubmit(false)}>
            please try again
          </p>
        ) : (
          ""
        )}
        <p className="signin">
          Already have an acount ? <a href="/dashboard/login">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
