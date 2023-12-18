import mongoose from "mongoose";
const connect = async () => {
  try {
    if (process.env.MONGO !== undefined) {
      await mongoose.connect(process.env.MONGO);
    } else {
      console.log("No MONGO_URI provided");
    }
  } catch (err) {
    throw Error("error");
  }
};

export default connect;
