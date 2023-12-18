import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/Lalezar-Font/TTF/Lalezar-Regular.ttf",
  display: "swap",
});

const HomePicture = () => {
  return (
    <div className="homepic-container">
      <div className="homepic">
        <Image src="/images/r31.jpg" alt="home-img" fill={true} />
        <div className="homepic-laptop">
          <div className="homepic-laptop-img">
            <Image src="/images/laptop.png" alt="surface-studio" fill={true} />
          </div>
        </div>
        <div className="homepic-text">
          <h1 className={myFont.className}> افق شارجه</h1>
          <p className={myFont.className}>
            <span>خرید عمده لپتاپ از شارجه</span>
            <span>
              شرکت افق شارجه وارد کننده لپتاپ سرفیس از آمریکا و کانادا
            </span>
            <span>فروش عمده سرفیس در امارات</span>
          </p>
          <div className="homepic-text-buttons">
            <Link href="/products">مشاهده محصولات</Link>
          </div>
        </div>
        <div className="homepic-link">
          <Link href="/accessories">
            <span>لوازم جانبی</span>
            <IoIosArrowBack />
          </Link>
          <Link href="/contact">
            <span>درباره ما</span>
            <IoIosArrowBack />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePicture;
