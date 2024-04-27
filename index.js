const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// routers
const userRoutes = require("./routes/userRoutes.js");
const orderRouter = require("./routes/orderRoutes.js");

// Connect Database
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database connection is successful");
});

app.use("/user", userRoutes);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send(`server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
