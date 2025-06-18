const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const orderItemsRoutes = require("./orderItemsRoutes");
const paymentRoutes = require("./paymentRoutes");

const allRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/order-items", orderItemsRoutes);
  app.use("/api/payments", paymentRoutes);
};

module.exports = allRoutes;
