const express = require("express");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", require("./route/userRoute"));

app.listen(3001, () => {
  console.log("server running on", 3001);
});

connectDb();