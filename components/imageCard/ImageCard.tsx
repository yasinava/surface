"use client";
import Image from "next/image";
import React from "react";

const ImageCard = ({ data }) => {
  return (
    <Image
      loader={() => data?.image}
      src={data?.image}
      alt={data?.title}
      fill={true}
    />
  );
};

export default ImageCard;
