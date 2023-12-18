import { Document, Model, Schema, model, models } from "mongoose";

interface CommentsDocument extends Document {
  headphoneId: string;
  name: string;
  email: string;
  text: string;
}

export const commentsSchema = new Schema<CommentsDocument, {}>(
  {
    headphoneId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = models.Comment
  ? models.Comment
  : model<CommentsDocument>("Comment", commentsSchema);
export default CommentModel as Model<CommentsDocument, {}>;
