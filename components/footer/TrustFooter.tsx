import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrustFooter = () => {
  return (
    <div className="footer-container-item">
      <h3>اعتماد به ما</h3>
      <Link href="https://enamad.ir/">
        {" "}
        <Image
          src="/images/enamad.png"
          alt="enamad.ir"
          width={25}
          height={25}
        />{" "}
        enamad.ir
      </Link>
      <Link href="https://www.zarinpal.com/">
        {" "}
        <Image
          src="/images/zarinpal.png"
          alt="zarinpal.ir"
          width={25}
          height={25}
        />{" "}
        زرین پال
      </Link>
      <p>تمام سرفیس ها دارای گارانتی می باشد</p>
    </div>
  );
};

export default TrustFooter;
