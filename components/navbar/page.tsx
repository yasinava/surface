// "use client";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { getServerSession } from "next-auth";
import SearchComponent from "../searchComponent/SearchComponent";
import Image from "next/image";

const navRoute = [
  {
    href: "/contact",
    name: "درباره ما",
    id: 4,
  },
  {
    href: "/blog",
    name: "وبلاگ",
    id: 2,
  },
  {
    href: "/accessories",
    name: "لوازم جانبی",
    id: 3,
  },
  {
    href: "/products",
    name: "محصولات",
    id: 1,
  },
];

const Navbar = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <div className="nav-container">
      <div className="nav-info">
        <Link href="/cart" className="nav-info-cart">
          سبد خرید
          <BsCart3 />
        </Link>
        {session?.user?.email ? (
          <Link href="/dashboard" className="nav-info-dashboard">
            <span>{session.user.name}</span>
            <span>
              <CiUser />
            </span>
          </Link>
        ) : (
          <Link className="nav-info-dashboard" href="/dashboard">
            <span>ثبت نام | ورود</span>
            <span>
              <CiUser />
            </span>
          </Link>
        )}
      </div>
      <div className="nav-searchBox">
        <SearchComponent />
      </div>
      <div className="nav-menu">
        <Link href="/inventory" className="nav-inventory">
          استعلام موجودی
        </Link>
        {navRoute.map((nav) => (
          <Link href={nav.href} key={nav.id}>
            {nav.name}
          </Link>
        ))}
        <Link href="/">صفحه اصلی</Link>
        <Link href="/" className="nav-menu-logo">
          <div>
            <Image src="/images/logo3.png" alt="ofogh" fill={true} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
