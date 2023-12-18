import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ConnectUsFooter = () => {
  return (
    <div className="connect-us-container">
      <div className="connect-us-container-social">
        <div className="connect-us-instagram">
          <div className="connect-us-instagram-details">
            <div>
              <span className="connect-us-instagram-details-pic">
                <Image src="/images/logo2.png" alt="instagram" fill={true} />
              </span>
              <span className="connect-us-instagram-details-names">
                <p>افق شارجه</p>
                <Link href="/">ofogh_laptop@</Link>
              </span>
            </div>
            <span className="connect-us-instagram-details-icon">
              <AiFillInstagram />
            </span>
          </div>
          <p>شرکت وارد کننده سرفیس از آمریکا و کانادا</p>
        </div>
        <div className="connect-us-whatsapp">
          <Link href="https://web.whatsapp.com/send?phone=989115188704">
            <IoLogoWhatsapp />
            +989115188704
          </Link>
        </div>
        <span className="connect-us-phone-number">
          <FaPhone />
          +989112800075
        </span>
      </div>
    </div>
  );
};

export default ConnectUsFooter;
