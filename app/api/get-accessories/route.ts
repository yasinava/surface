import AccessoriesModels from "@/models/accessories";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  await connect();
  try {
    let products = await AccessoriesModels.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
