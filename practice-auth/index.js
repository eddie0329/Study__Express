const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.json());

// Connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("CONNECTED TO DB")
);

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log(`Sever is running at ${PORT}`));
