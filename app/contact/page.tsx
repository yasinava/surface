import ContactUs from "@/components/ContactUs/ContactUs";
import Developer from "@/components/developers/Developer";
import WhyUs from "@/components/whyUs/WhyUs";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <WhyUs />
      <ContactUs />
      <Developer />
    </div>
  );
};

export default Contact;
