import { Model, Schema, model, models } from "mongoose";

interface OrderDocument {
  id: string;
  title: string;
  image: string;
  color: string;
  price: string;
  quantity: string;
}
export const orderSchema = new Schema<OrderDocument, {}>(
  {
    id: {
      type: String,
      required: true,
    },
    title: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: { type: String, required: true },
  },
  { timestamps: true }
);

const OrderModel = models.Order
  ? models.Order
  : model<OrderDocument>("Order", orderSchema);

export default OrderModel as Model<OrderDocument, {}>;
