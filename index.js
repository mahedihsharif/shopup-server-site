const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute=require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors=require("cors")
const port = process.env.PORT || 6500;
const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.taqt5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     
  })
  .then(console.log("MongoDB is running..."))
  .catch((err) => console.log(err));
  
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/api/checkout",stripeRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 