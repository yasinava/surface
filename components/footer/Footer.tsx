import React from "react";
import TrustFooter from "./TrustFooter";
import BlogFooter from "./BlogFooter";
import NewSurfaces from "./NewSurfaces";
import ConnectUsFooter from "./ConnectUsFooter";
import AccessoriesFooter from "./AccessoriesFooter";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-info">
        <div className="footer-container-info-flex">
          <TrustFooter />
          <NewSurfaces />
          <BlogFooter />
          <AccessoriesFooter />
        </div>
        <ConnectUsFooter />
      </div>
      <div className="footer-container-address">
        <p>(شش)آدرس شرکت : امارات \ شارجه صنایع ۶ </p>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
