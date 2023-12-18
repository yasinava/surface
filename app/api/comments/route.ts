import connect from "@/utils/db";
import CommentModel from "@/models/comments";
import { NextResponse } from "next/server";

interface CommentRequest {
  headphoneId: string;
  name: string;
  email: string;
  text: string;
}
interface CommentResponse {
  _id: string;
  headphoneId: string;
  name: string;
  email: string;
  text: string;
}

type NewCommentResponse = NextResponse<{
  comment?: CommentResponse;
  error?: string;
}>;
export const POST = async (request: Request): Promise<NewCommentResponse> => {
  const { name, email, text, headphoneId } =
    (await request.json()) as CommentRequest;
  await connect();
  const newComment = {
    headphoneId,
    name,
    email,
    text,
  };
  const userComment = await CommentModel.findOne({ email: email });

  try {
    if (userComment) {
      const addComment = new CommentModel({ ...newComment });
      addComment.save();
      console.log("saved");
      return new NextResponse("created new comment in db", {
        status: 201,
      });
    }
    console.log("await for create");
    await CommentModel.create({ ...newComment });
    console.log("created");
    return new NextResponse("created new comment in db", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("not creating", {
      status: 500,
    });
  }
};

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const headphoneId = new URLSearchParams(url.searchParams).get("headphoneId");
  console.log(typeof headphoneId);
  await connect();
  try {
    const comments = await CommentModel.find({ headphoneId: headphoneId });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
