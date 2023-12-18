import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cache } from "react";

// cache(async () => {
//   try {
//     const Headphones = await axios.get("/api/add-product");
//     console.log(Headphones);
//     return Headphones.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const getHeadphones = createAsyncThunk(
  "cart/initialHeadphones",
  async () => {
    const res = await fetch("/api/add-product", { next: { revalidate: 3600 } });
    const data = res.json();
    return data;
  }
);
