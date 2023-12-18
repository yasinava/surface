import Link from "next/link";
import React from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>با ما همراه باشید</h1>
      <div className="contact-us-container-details">
        <div className="contact-us-details">
          <div>
            <AiFillInstagram />
            <p>frontscript</p>
          </div>
          <div>
            <FaTwitter />
            <p>yasinevz</p>
          </div>
          <div>
            <IoLogoWhatsapp />
            <p>+989303711924</p>
          </div>
          <div>
            <FaTelegramPlane />
            <p>+989303711924</p>
          </div>
        </div>
        <div className="platforms-contact-us">
          <div className="platforms-contact-us-instagram">
            <Link href="https://www.instagram.com/frontscript/">
              <div className="card">
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
                  </svg>
                </div>
                <strong> Instagram</strong>
                <div className="card__body">در اینستاگرام همراه ما باشید</div>
                <span>Follow us</span>
              </div>
            </Link>
          </div>
          <div className="platforms-contact-us-twitter">
            <Link href="https://twitter.com/yasinevz">
              <div className="card">
                <div className="icon">
                  <FaTwitter />
                </div>
                <strong> Twitter</strong>
                <div className="card__body">در توییتر همراه ما باشید</div>
                <span>Follow us</span>
              </div>
            </Link>
          </div>
          <div className="platforms-contact-us-whats-app">
            <Link href="https://web.whatsapp.com/send?phone=989303711924">
              <div className="card">
                <div className="icon">
                  <IoLogoWhatsapp />
                </div>
                <strong> Whatsapp</strong>
                <div className="card__body">در واتساپ همراه ما باشید</div>
                <span>Connect Us</span>
              </div>
            </Link>
          </div>
          <div className="platforms-contact-us-telegram">
            <Link href="tg:\/\/join?invite=https://t.me/+agvy4q46URkxOTc0">
              <div className="card">
                <div className="icon">
                  <FaTelegramPlane />
                </div>
                <strong> Telegram</strong>
                <div className="card__body">در تلگرام همراه ما باشید</div>
                <span>Connect Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
