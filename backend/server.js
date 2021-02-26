const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(
  "mongodb+srv://khalildh:khalildh@cluster0.r0etj.mongodb.net/myInfo?retryWrites=true&w=majority",
  () => console.log("database connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routesUrls);

app.listen(4000, () => console.log("server is running"));
