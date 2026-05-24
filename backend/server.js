require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));

app.use(express.json());

app.use("/api/data", dataRoutes);


const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
