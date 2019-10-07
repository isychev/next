const mongoose = require("mongoose");

const DATABASE_PORT = 27017;
const DATABASE_HOST = "localhost";

(async function connectToMongo() {
  mongoose.connect(
    `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/mydb`,
    {
      useNewUrlParser: true,
    },
    err => {
      if (err) {
        console.error("Error connect to mongo");
        setTimeout(connectToMongo, 500);
      } else {
        console.log("Successfully connected to mongo");
      }
    },
  );
})();

require("./models/user");
