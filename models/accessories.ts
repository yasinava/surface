import { Document, Model, Schema, model, models } from "mongoose";

interface AccessoriesDocument extends Document {
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: number;
  saveUp: number;
  images: ImagesType[];
}
interface ImagesType {
  image: string;
}

export const accessoriesSchema = new Schema<AccessoriesDocument, {}>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    oldPrice: { type: Number },
    saveUp: { type: Number },
    images: [{ image: String }],
  },
  { timestamps: true }
);

const AccessoriesModels = models.Accessories
  ? models.Accessories
  : model("Accessories", accessoriesSchema);
export default AccessoriesModels as Model<AccessoriesDocument, {}>;
