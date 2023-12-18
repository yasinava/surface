"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { increaseHeadphone, decreaseHeadphone } from "@/Redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooke";
import Button from "../Button/Button";
import { Headphone } from "@/utils/type";
interface PropsProductType {
  data?: Headphone;
  props?: any;
}
const ProductImg: React.FC<PropsProductType> = ({ data, ...props }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);

  const [imageColor, setImageColor] = useState({
    id: data?.id.toString(),
    title: data?.title,
    image: data?.image,
    color: data?.color,
    price: data?.price,
    quantity: data?.quantity,
  });
  console.log(imageColor);
  const addToCard = async () => {};

  const decreaseFunc = () => {
    if (state.quantityCart > 1) {
      dispatch(decreaseHeadphone());
      // quantityProduct = quantityProduct - 1;
      // return quantityProduct;
    }
  };
  const increaseFunc = () => {
    dispatch(increaseHeadphone());
    // quantityProduct = quantityProduct + 1;
    // return quantityProduct;
  };
  return (
    <div>
      <div className="detail-image">
        <Image src={imageColor.image} alt="product" fill={true} />
      </div>
      <div className="detail-info-colors">
        <Button
          classname={
            imageColor.color === data.color
              ? "detail-info-colors-item select"
              : "detail-info-colors-item"
          }
          styled={{ backgroundColor: data.color }}
          onClick={() =>
            setImageColor({
              ...imageColor,
              image: data.image,
              color: data.color,
            })
          }
        >
          <Image src={data.image} alt="img" width={80} height={80} />
        </Button>
        {data.images.map((item, index) => (
          <Button
            key={index}
            classname={
              imageColor.color === item?.color
                ? "detail-info-colors-item select"
                : "detail-info-colors-item"
            }
            onClick={() =>
              setImageColor({
                ...imageColor,
                image: item?.image,
                color: item?.color,
              })
            }
          >
            <Image src={item?.image} alt="img" width={80} height={80} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
