import Image from "next/image";
import React from "react";

const LogoDetails = [
  {
    id: 1,
    image: "/image/contactImage/support.png",
    title: "هفت روز هفته به صورت ۲۴ ساعته",
    desc: "ما در اینجا هستیم تا به شما در هر شرایطی کمک کنیم. لطفا با ما تماس بگیرید و مشکلات خود را با ما به اشتراک بگذارید. ما تلاش می‌کنیم همیشه بهترین خدمات را به شما ارائه دهیم و به رضایت کامل شما برسیم. با تشکر از انتخاب شما!",
  },
  {
    id: 2,
    image: "/image/contactImage/guaranteed.png",
    title: "ضمانت اصل بودن کالا",
    desc: "ما گارانتی می‌کنیم که تمام محصولات ما اصل و 100٪ اورجینال هستند. در صورت نارضایتی، می‌توانید کالای خریداری‌ شده را بازگشت دهید و ما هزینه بازگشت کالا را بر عهده خواهیم گرفت.",
  },
  {
    id: 3,
    image: "/image/contactImage/return-box.png",
    title: "هفت روز مهلت تست",
    desc: " لطفا با ما تماس بگیرید تا راهنمایی‌ لازم را درباره فرایند بازگشت کالا ارائه بدهیم. ما از خدمات و محصولاتی که ارائه می‌دهیم اطمینان داریم و می‌خواهیم شما کاملا راضی باشید.",
  },
  {
    id: 5,
    image: "/image/contactImage/enamad-logo.png",
    title: "ENAMAD",
    desc: "دارای گواهی نامه اعتبار برای کسب کار های انلاین",
  },
];

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <h1>چرا ما را انتخاب کنید؟</h1>
      <div className="why-us-details-container">
        <div className="why-us-details">
          {LogoDetails.map((item) => (
            <div key={item.id} className="why-us-detail">
              <span className="why-us-detail-logo">
                <Image src={item.image} alt="png-logo" width={40} height={40} />
              </span>
              <h5 className="why-us-detail-title">{item.title}</h5>
              <p className="why-us-detail-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="why-us-details-container-zarinpal">
          <Image
            src="/image/contactImage/zarinpal-badge.png"
            alt="zarinpal"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
