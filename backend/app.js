const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const universityRouter = require("./routes/universityRoutes");
const productRouter = require("./routes/productRoutes");
const addressRouter = require("./routes/addressRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");
const paymentRouter = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(express.json());
// app.use((req, res, next) => {
//   console.log("request body:", req.body);
//   next();
// });
// API routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/universities", universityRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users/:userId/addresses", addressRouter);
app.use("/api/v1/users/:userId/cart", cartRouter);
app.use("/api/v1/users/:userId/orders", orderRouter);
// app.use("/api/v1/orders/:orderId/payment", paymentRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
module.exports = app;
