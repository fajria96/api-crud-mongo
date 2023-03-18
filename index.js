const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/ProductRoute");
// const ProductRoute2 = require("./routes/ProductRoute2");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// --- Use Mongoose ---
const database =
  process.env.MONGO_URL ||
  'mongodb://fajriatun:hHIQ7azDPSh7yufM@ac-9xvgiaf-shard-00-00.dew2u1j.mongodb.net:27017,ac-9xvgiaf-shard-00-01.dew2u1j.mongodb.net:27017,ac-9xvgiaf-shard-00-02.dew2u1j.mongodb.net:27017/eduwork?ssl=true&replicaSet=atlas-mdm299-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (Error) => console.log(Error));
db.once("open", () => console.log("Sukses Koneksi ke Mongodb..."));
app.use("/", ProductRoute);

// --- Use MongoDB Native ---
// app.use("/", ProductRoute2);
// app.use((req, res, next) => {
//   res.status(404);
//   res.send({
//     status: "failed",
//     message: "Ressource " + req.originalUrl + " Not found",
//   });
// });

app.listen(PORT, () => console.log("Server Up and Running..."));
