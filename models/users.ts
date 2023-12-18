import { Model, model, models, Document, Schema } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  phoneNumber: number;
  birthDay: string;
  address: string;
  password: string;
  role: "admin" | "user";
}

export const userSchema = new Schema<UserDocument, {}>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    birthDay: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const UserModel = models.Users ? models.Users : model("Users", userSchema);

export default UserModel as Model<UserDocument, {}>;
