"use client";
import React from "react";
import { useAppSelector } from "@/Redux/hooke";
const page = () => {
  const cartHeadphones = useAppSelector((state) => state.cart);
  return (
    <div>
      <div style={{ marginTop: "200px" }}>
        {/* {cartHeadphones.headphones.map((item) => (
          <p>{item.title}</p>
        ))} */}
      </div>
    </div>
  );
};

export default page;
