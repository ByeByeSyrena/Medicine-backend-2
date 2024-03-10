const { ctrlWrapper } = require("../../../helpers");

const currentUser = (req, res) => {
  const { email, role } = req.user;

  res.json({ email, role });
};

module.exports = { currentUser: ctrlWrapper(currentUser) };
