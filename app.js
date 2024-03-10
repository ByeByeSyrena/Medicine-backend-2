const logger = require("morgan");
const cors = require("cors");

const express = require("express");

require("dotenv").config();

const app = express();

const {
  pharmaciesRouter,
  ordersRouter,
  usersRouter,
  newPharmacyRouter,
} = require("./routers");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/pharmacies", pharmaciesRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);
app.use("/newpharmacies", newPharmacyRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
