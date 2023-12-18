import ProductModel from "@/models/product";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const start = Number(new URLSearchParams(url.searchParams).get("_start"));
  const limit = Number(new URLSearchParams(url.searchParams).get("_limit"));
  console.log(limit);
  console.log(start);
  await connect();
  try {
    let products = (await ProductModel.find()).slice(start, start + limit);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
