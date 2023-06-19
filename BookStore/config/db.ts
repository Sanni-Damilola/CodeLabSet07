import mongoose from "mongoose";

const book_storeDB = "mongodb://127.0.0.1:27017/book-store";

mongoose.connect(book_storeDB);
mongoose.connection
  .once("open", () => {
    console.log(`database is connected ${mongoose.connection.host}`);
  })
  .on("error", (err) => {
    console.log("A error occured in connecting to database", err);
  });

export default mongoose;
