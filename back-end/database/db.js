import mongoose from "mongoose";

const Connection = async (username, password) => {
  const url = `mongodb+srv://${username}:${password}@crud-app.qhfzboz.mongodb.net/`;

  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully...");
  } catch (error) {
    console.log("Error while connection to database", error);
  }
};

export default Connection;
