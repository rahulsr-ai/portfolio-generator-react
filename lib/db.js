import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Connecton already statblised no need to connect again ✅");
    return;
  }

  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    if (connect.connection.readyState === 1) {
      console.log("DATABASE CONNECTED SUCCESSFULLY ✅");
      isConnected = true;
    } else {
      console.log("MONGO DB FALED TO CONNECT");
    }
  } catch (error) {
    console.log("error occured while connecting with db", error);
  }
};

export default connectDB;
