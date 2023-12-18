"use client";
import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { SWRResponse } from "swr";
interface Props {
  id: number;
}
interface DataComments {
  _id: string;
  headphoneId: string;
  name: string;
  email: string;
  text: string;
}
const CommentsForm = ({ id }: Props) => {
  const headphoneId = id.toString();
  const { data, isLoading, mutate, error } = useSWR<SWRResponse>(
    `/api/comments?headphoneId=${headphoneId}`,
    axios
  );
  const [err, setErr] = useState(false);

  if (isLoading) {
    console.log("loading");
  }
  if (error) {
    setErr(true);
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const text = e.target[2].value;
    try {
      await axios.post("/api/comments", {
        headphoneId,
        name,
        email,
        text,
      });
      mutate();
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="dev-main-comments">
      <form className="dev-form-container" onSubmit={submitHandler}>
        <div className="inputBox">
          <input required type="text" />
          <span>First name</span>
        </div>
        <div className="inputBox">
          <input required type="email" />
          <span>Email Address</span>
        </div>
        <div className="inputBox">
          <textarea
            rows={10}
            cols={49}
            required
            placeholder="Enter your massage"
          ></textarea>
        </div>
        <div className="dev-btns">
          <div className="btn1">
            <button type="submit">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </div>
      </form>
      <div className="dev-main-comments-info">
        {data
          ? data.data.map((item: DataComments) => (
              <div className="dev-main-comments-info-member" key={item?._id}>
                <h4>{item?.name}</h4>
                <p> {item?.text}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default CommentsForm;
