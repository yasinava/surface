import React from "react";
import Card from "../Card/Card";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { ProductResponse } from "@/utils/type";
const getPosts = async () => {
  const data = await fetch("http://localhost:3000/api/get-product", {
    next: { revalidate: 30 },
  });
  const posts = await data.json();
  const newPosts = await posts.filter((item) => item?.saveUp);
  return newPosts;
};
const OfferCardsHomePage = async () => {
  const res = await getPosts();
  const newRes = res.splice(0, 5);

  return (
    <div className="offer-cards-container">
      <div className="offer-cards-more">
        <h1>تخفیف ویژه</h1>
        <Link href="/products">
          <span>مشاهده همه</span>
          <IoIosArrowBack />
        </Link>
      </div>

      <div className="offer-cards">
        {newRes.map((item: ProductResponse) => (
          <Link href={`/products/${item._id}`} key={item._id}>
            <Card data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfferCardsHomePage;
