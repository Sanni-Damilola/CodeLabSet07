import config from "mongoose";

const book_storeDB = "mongodb://127.0.0.1:27017/book-store";

config.connect(book_storeDB);
config.connection
  .once("open", () => {
    console.log(`database is connected ${config.connection.host}`);
  })
  .on("error", (err) => {
    console.log("A error occured in connecting to database", err);
  });

export default config;
