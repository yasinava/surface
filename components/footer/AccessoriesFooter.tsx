import { AccessoriesResponse } from "@/utils/type";
import Link from "next/link";
import React from "react";

const getAccessories = async () => {
  const data = await fetch("http://localhost:3000/api/get-accessories", {
    next: { revalidate: 900 },
  });
  const posts = await data.json();
  return posts;
};

const AccessoriesFooter = async () => {
  const access = await getAccessories();
  const newAccess = access.splice(0, 9);

  return (
    <div className="footer-container-item">
      <h3>لوازم جانبی</h3>
      <div>
        {newAccess
          ? newAccess.map((item: AccessoriesResponse) => (
              <Link href={`/accessories/${item?._id}`} key={item?._id}>
                {item?.title}
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default AccessoriesFooter;
