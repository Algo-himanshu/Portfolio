const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const { readdirSync } = fs;

require("dotenv").config(); //import dotenv

mongoose
  .connect(process.env.MONGO_URI) //.connect(mongo_uri(which is in .env file))
  .then(() => {
    console.log("DB Connected!!");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR -> ", err.message);
  });

//MiddleWares
app.use(express.json({ limit: "5mb" })); //A middleware which parses JSON data from the request body, making it available in the req.body property
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded form data,making it available in the req.body property.
app.use(cors());

const port = process.env.PORT;
console.log(port);
//autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`))); //readdirSync("./routes"):=>reurnds array of file_names

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
