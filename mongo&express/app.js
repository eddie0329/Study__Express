const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./db.js");
const app = express();
const PORT = 3000;


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect db
db();

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT ${PORT}`);
});
// mongo "mongodb+srv://cluster0.r0klr.mongodb.net/<dbname>" --username user
