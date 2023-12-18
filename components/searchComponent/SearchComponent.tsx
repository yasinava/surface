"use client";
import { debounce } from "@/utils/Debounce";
import axios from "axios";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SearchComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [surfaceSearch, setSurfaceSearch] = useState([]);
  const [accessoriesSearch, setAccessoriesSearch] = useState([]);
  const [inpValue, setInpValue] = useState("");
  const changeHandler = debounce((value: string) => getDevice(value), 1500);
  const getDevice = async (value: string) => {
    const surface = await axios.get("/api/get-product");
    const accessories = await axios.get("/api/get-accessories");
    if (value.length) {
      const SurfaceSearched = surface.data?.filter((item) =>
        item?.title.includes(value.toLocaleLowerCase())
      );
      const accessoriesSearched = accessories.data?.filter((item) =>
        item?.title.includes(value.toLocaleLowerCase())
      );
      setInpValue(value);
      setSurfaceSearch(SurfaceSearched);
      setAccessoriesSearch(accessoriesSearched);
    } else {
      setSurfaceSearch([]);
      setAccessoriesSearch([]);
      setInpValue("");
    }
  };
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const searchHandler = () => {
    if (inpValue.length > 0) {
      router.push("/search" + "?" + createQueryString("device", inpValue));
      setInpValue("");
      setSurfaceSearch([]);
      setAccessoriesSearch([]);
    } else {
      router.push("/");
    }
  };
  return (
    <div className="search-container">
      <form className="form">
        <label htmlFor="search">
          <input
            required
            placeholder="search your laptop or accessories ... "
            id="search"
            type="text"
            onChange={(e) => changeHandler(e.target.value)}
          />
          <div className="icon">
            <svg
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="swap-on"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="swap-off"
              onClick={searchHandler}
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <button
            type="reset"
            className="close-btn"
            onClick={() => {
              setSurfaceSearch([]);
              setAccessoriesSearch([]);
              setInpValue("");
            }}
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
      </form>
      <div
        className={
          surfaceSearch.length || accessoriesSearch.length
            ? "searched-list"
            : "searched-none"
        }
      >
        {surfaceSearch.map((item) => (
          <Link
            href={`/products/${item?._id}`}
            key={item?._id}
            onClick={() => setSurfaceSearch([])}
          >
            {item?.title}
          </Link>
        ))}
        {accessoriesSearch.map((item) => (
          <Link
            href={`/accessories/${item?._id}`}
            key={item?._id}
            onClick={() => setSurfaceSearch([])}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
