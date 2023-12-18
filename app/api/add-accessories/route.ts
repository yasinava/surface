import AccessoriesModels from "@/models/accessories";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

interface ImagesTypeRequest {
  image: string;
}
interface ImagesTypeResponse {
  _id: string;
  image: string;
}
interface ProductRequest {
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  images: ImagesTypeRequest[];
}
interface ProductResponse {
  _id: string;
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  images: ImagesTypeResponse[];
}
type NewProductResponse = NextResponse<{
  product?: ProductResponse;
  error?: string;
}>;

export const POST = async (request: Request): Promise<NewProductResponse> => {
  const accessories = (await request.json()) as ProductRequest;
  const product = { ...accessories };

  await connect();
  console.log("connect!");
  try {
    const oldProduct = await AccessoriesModels.findOne({
      title: product?.title,
    });
    console.log("old product =>");
    if (!oldProduct) {
      console.log("old product  is not true");

      await AccessoriesModels.create({ ...product });
      console.log("product is created");
      return new NextResponse("created this product", { status: 201 });
    } else {
      return new NextResponse(
        "you have already created this product with this title",
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    return new NextResponse("try again ", { status: 500 });
  }
};

export const GET = async (request: Request) => {
  await connect();
  try {
    let products = await AccessoriesModels.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
