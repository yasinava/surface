import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Card from "../Card/Card";
import { AccessoriesResponse } from "../../utils/type";

const getPosts = async () => {
  const data = await fetch("http://localhost:3000/api/get-accessories", {
    next: { revalidate: 900 },
  });
  const posts = await data.json();
  return posts;
};
const Accessories = async () => {
  const res = await getPosts();
  const newRes = res.splice(0, 5);

  return (
    <div className="offer-cards-container">
      <div className="offer-cards-more">
        <h1>لوازم جانبی </h1>
        <Link href="/accessories">
          <span>مشاهده همه</span>
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="offer-cards">
        {newRes.map((item: AccessoriesResponse) => (
          <Link href={`/products/${item._id}`} key={item._id}>
            <Card data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
