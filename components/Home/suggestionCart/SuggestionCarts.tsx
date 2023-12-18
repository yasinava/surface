import Image from "next/image";
import Link from "next/link";
import React from "react";
import SuggestionCart from "./SuggestionCart";
import { IoIosArrowBack } from "react-icons/io";
import { ProductResponse } from "../../../utils/type";

const getPosts = async () => {
  const data = await fetch("http://localhost:3000/api/get-product", {
    next: { revalidate: 30 },
  });
  const posts = await data.json();
  const filterPosts = posts.filter((item: ProductResponse) => item?.suggestion);
  return filterPosts;
};

const SuggestionCarts = async () => {
  const res = await getPosts();
  const newRes = res.splice(0, 3);

  return (
    <div className="suggestion-container">
      <div className="suggestion-texts">
        <h1>بهترین لپتاپ های پیشنهادی</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          pariatur?
        </p>
        <div>
          <Link href="/products">
            محصولات دیگر
            <IoIosArrowBack />
          </Link>
          <Link href="/accessories">
            لوازم جانبی
            <IoIosArrowBack />
          </Link>
        </div>
      </div>
      <div className="suggestion-boxs">
        {newRes.map((item: ProductResponse) => (
          <SuggestionCart data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionCarts;
