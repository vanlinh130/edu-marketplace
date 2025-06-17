const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')

const allRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/products", productRoutes);
};

module.exports = allRoutes;
