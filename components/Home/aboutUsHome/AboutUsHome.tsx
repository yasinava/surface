import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { TfiCreditCard } from "react-icons/tfi";

const AboutUsHome = () => {
  return (
    <div className="about-home-container">
      <div className="about-home-container-item">
        <span>
          <AiFillSafetyCertificate />
        </span>
        <h3>گارانتی سرفیس ها</h3>
      </div>
      <div className="about-home-container-item">
        <span>
          <BiSupport />
        </span>
        <h3>پاسخگوی شما 23-7</h3>
      </div>
      <div className="about-home-container-item">
        <span>
          <TfiCreditCard />
        </span>
        <h3>پرداخت امن</h3>
      </div>
      <div className="about-home-container-item">
        <span>
          <FaRegHandshake />
        </span>
        <h3>خرید بدون واسطه از شارجه</h3>
      </div>
    </div>
  );
};

export default AboutUsHome;
