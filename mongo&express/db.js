const mongoose = require("mongoose");
require("dotenv/config");

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error("DB ERROR: ", err);
          return;
        }
        console.log("MONGO DB IS CONNECTED");
      }
    );
  };
  connect();
};
