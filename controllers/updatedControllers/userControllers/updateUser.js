const { ctrlWrapper, httpError } = require("../../../helpers");

const { User } = require("../../../models");

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  const result = await User.findOneAndUpdate(
    { _id: id },
    { name, role },
    {
      new: true,
    }
  );
  if (result) {
    res.json(result);
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { updateUser: ctrlWrapper(updateUser) };
