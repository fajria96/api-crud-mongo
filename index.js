import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
const PORT = process.env.PORT || 5000;

const app = express();
const database = process.env.MONGO_URL || "mongodb://localhost:27017/eduwork";
mongoose.connect( database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (Error) => console.log(Error));
db.once("open", () => console.log("Sukses Koneksi ke Database..."));

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(PORT, () => console.log("Server Up and Running..."));
