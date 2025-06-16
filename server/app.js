const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const allowedOrigins = [
  'http://localhost:3000',               // local dev
  process.env.CLIENT_ORIGIN   // production
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));

app.use(express.json());
const allRoutes = require("./routes");
allRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));