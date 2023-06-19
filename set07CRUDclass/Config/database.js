const mongoose = require("mongoose");

const Set07DB = "mongodb://0.0.0.0:27017/Set07Database";
const Set07DBs = "mongodb://127.0.0.0:27017/Set07Database";
const Set07DBs1 = "mongodb://localhost/Set07Database";

// const Database = async () => {
//   try {
//     const db = await mongoose.connect(Set07DB);
//     console.log(`connected`, db.connection.host);
//   } catch (error) {
//     console.log("An error has just occured", error);
//   }
// };

mongoose
  .connect(Set07DB)
  .then(() => {
    console.log(`connected`);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
