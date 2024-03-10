const jwt = require("jsonwebtoken");

const { User } = require("../models");

const { httpError, ctrlWrapper } = require("../helpers");
const { configs } = require("../configs");

const { secretKey } = configs;

const checkUserToken = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    httpError(401, "Not authorized");
    return;
  }

  const { id } = jwt.verify(token, secretKey);
  const user = await User.findById(id);
  if (!user || !user.token || user.token !== token) {
    httpError(401, "Not authorized");
    return;
  }

  req.user = user;
  next();
};

module.exports = { checkUserToken: ctrlWrapper(checkUserToken) };
