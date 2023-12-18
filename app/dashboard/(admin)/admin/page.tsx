"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR, { SWRResponse } from "swr";

interface ImagesTypeResponse {
  _id: string;
  image: string;
}
interface OtherModelsTypeResponse {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
}
interface ProductResponse {
  _id: string;
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
  images: ImagesTypeResponse[];
  otherModels: OtherModelsTypeResponse[];
}

const page = () => {
  const { data, isLoading, error, mutate } = useSWR<SWRResponse>(
    "/api/add-product",
    axios
  );

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return (
      <div>
        error occured: <div>{error.message}</div>
        <Link href="/dashboard/admin/add-product">add product</Link>
      </div>
    );
  }

  const newData = data.data;
  console.log(newData);
  return (
    <div className="admin-store">
      {newData.map((item: ProductResponse) => (
        <div key={item?._id} className="admin-store-item">
          <div className="admin-store-item-img">
            <Image
              loader={() => item.image}
              src={item.image}
              alt="image"
              fill={true}
            />
          </div>
          <div className="admin-store-item-details">
            <h3>{item?.title}</h3>
            <div>
              <button>delete</button>
              <Link href={`/dashboard/admin/${item?._id}`}>
                <button>update</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
