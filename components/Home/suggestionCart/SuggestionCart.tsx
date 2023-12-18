import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCpu } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";
import { IoBatteryFull } from "react-icons/io5";
import ImageCard from "@/components/imageCard/ImageCard";

const SuggestionCart = ({ data }) => {
  return (
    <div className="suggestion-box">
      <div className="suggestion-box-img">
        <div>
          <ImageCard data={data} />
        </div>
      </div>
      <div className="suggestion-box-info">
        <h1>{data?.title}</h1>
        <span>{data?.price} تومان</span>
        <p>{data?.desc}</p>
      </div>
      <div className="suggestion-box-details">
        <span>
          <MdScreenshotMonitor />
          {data?.screen}
        </span>
        <span>
          <BsCpu />
          {data?.intelCorei}
        </span>
        <span>
          <IoBatteryFull />
          nice 90 up
        </span>
        <span>
          <span>RAM</span>
          {data?.ram}
        </span>
      </div>
      <div className="suggestion-box-btn">
        <Link href={`/products/${data?._id}`}>
          <button>اطلاعات بیشتر و ادامه فرایند خرید</button>
        </Link>
      </div>
    </div>
  );
};

export default SuggestionCart;
