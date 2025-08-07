require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/product.js");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to DB for seeding.");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB().then(() => {
  console.log("Closing connection.");
  mongoose.connection.close();
});
