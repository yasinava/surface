import Link from "next/link";
import React from "react";
import { ProductResponse } from "../../utils/type";

const getProduct = async () => {
  const data = await fetch("http://localhost:3000/api/get-product", {
    next: { revalidate: 30 },
  });
  const posts = await data.json();
  return posts;
};
const NewSurfaces = async () => {
  const product = await getProduct();
  const newProduct = product.splice(0, 9);
  return (
    <div className="footer-container-item">
      <h3>جدید ترین</h3>
      <div>
        {newProduct
          ? newProduct.map((item: ProductResponse) => (
              <Link href={`/products/${item?._id}`} key={item?._id}>
                {item?.title}
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default NewSurfaces;
