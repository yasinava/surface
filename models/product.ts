import { Document, Model, Schema, model, models } from "mongoose";

interface ImagesType {
  image: string;
}
interface OtherModelsType {
  title: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
}
interface ProductDocument extends Document {
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
  suggestion: string;
  new: string;
  images: ImagesType[];
  otherModels: OtherModelsType[];
}

export const productSchema = new Schema<ProductDocument, {}>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    oldPrice: { type: String },
    saveUp: { type: String },
    intelCorei: { type: String },
    ram: { type: String },
    hard: { type: String },
    graphic: { type: String },
    screen: { type: String },
    suggestion: { type: String },
    new: { type: String },
    images: [{ image: String }],
    otherModels: [
      {
        title: String,
        price: Number,
        quantity: Number,
        oldPrice: String,
        saveUp: String,
        intelCorei: String,
        ram: String,
        hard: String,
        graphic: String,
        screen: String,
      },
    ],
  },
  { timestamps: true }
);

const ProductModel = models.Product
  ? models.Product
  : model("Product", productSchema);
export default ProductModel as Model<ProductDocument, {}>;
