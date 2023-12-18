import UserModel from "@/models/users";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  phoneNumber: number;
  birthDay: string;
  address: string;
  password: string;
}
interface NewUserResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
}
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (request: Request): Promise<NewResponse> => {
  console.log("we came to server");
  const user = (await request.json()) as NewUserRequest;
  const hashPassword = await bcrypt.hash(user?.password, 5);
  const newUser = {
    ...user,
    password: hashPassword,
  };
  console.log(user?.phoneNumber);
  await connect();
  console.log("connected.");
  try {
    const oldUser = await UserModel.findOne({ email: user?.email });
    console.log("olduser is =>");
    if (!oldUser) {
      console.log("olduser is not true");
      console.log(newUser);
      await UserModel.create({ ...newUser });
      console.log("its created....");
      return new NextResponse("your account has been created", {
        status: 201,
      });
    } else {
      console.log(oldUser);
      return new NextResponse("is email already used", {
        status: 422,
      });
    }
  } catch (error) {
    throw new Error("not connect");
  }
};
