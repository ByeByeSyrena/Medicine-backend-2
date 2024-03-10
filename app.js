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
const { configs } = require("./configs");
const { URL_PREFIX } = require("./constants");
const { environment } = configs;

const formatsLogger = process.env.NODE_ENV === "development" ? "dev" : "short";

if (environment === "development") {
  app.use(logger(formatsLogger));
}
app.use(cors());
app.use(express.json());

app.use(`${URL_PREFIX}/pharmacies`, pharmaciesRouter);
app.use(`${URL_PREFIX}/orders`, ordersRouter);
app.use(`${URL_PREFIX}/users`, usersRouter);
app.use(`${URL_PREFIX}/newpharmacies`, newPharmacyRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
