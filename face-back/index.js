const express = require("express");
const app = express();
const routes = require("./routes/router");
const dbConnect = require("./DB/dbConnection");

const cors = require("cors");

const PORT = process.env.PORT || 5001;

// To parse the request body, you need to use middleware that can handle it.
// In the case of Express.js, you would use the body-parser middleware or the built-in express.json() middleware
app.use(express.json());
app.use(cors());

app.use("/api", routes);

const start = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`app is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
