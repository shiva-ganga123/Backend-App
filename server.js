const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node API</h1>");
});

app.get("/blog", (req, res) => {
  res.send("This is blog's page where you can find blogs.");
});

mongoose
  .connect(
    "mongodb+srv://Shivaganga29:Shiva290799@clusterforapi.cu7egww.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Running on port 3000...");
    });
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log(error);
  });
