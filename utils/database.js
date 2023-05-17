import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      isConnected = true;
      console.log("MongoDB connected");
    })
    .catch((err) => console.log("err", err));
};
