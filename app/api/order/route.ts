import OrderModel from "@/models/order";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

interface NewOrderRequest {
  id: string;
  title: string;
  image: string;
  color: string;
  price: string;
  quantity: string;
}
interface NewOrderResponse {
  _id: string;
  id: string;
  title: string;
  image: string;
  color: string;
  price: string;
  quantity: string;
}

type NewResponse = NextResponse<{ order?: NewOrderResponse; error?: string }>;

export const POST = async (request: Request): Promise<NewResponse> => {
  const {} = (await request.json()) as NewOrderRequest;
  await connect();
  // try {
  //     if()
  // } catch (error) {

  // }
};
