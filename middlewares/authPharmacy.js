const jwt = require("jsonwebtoken");

const { newPharmacy } = require("../models");

const { httpError, ctrlWrapper } = require("../helpers");
const { configs } = require("../configs");

const { secretKey } = configs;

const checkPharmacyToken = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    httpError(401, "Not authorized");
    return;
  }

  const { id } = jwt.verify(token, secretKey);
  const pharmacy = await newPharmacy.findById(id);
  if (!pharmacy || !pharmacy.token || pharmacy.token !== token) {
    httpError(401, "Not authorized");
    return;
  }

  req.pharmacy = pharmacy;
  next();
};

module.exports = { checkPharmacyToken: ctrlWrapper(checkPharmacyToken) };
