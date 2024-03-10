const { ctrlWrapper, httpError } = require("../../../helpers");
const { User } = require("../../../models");

const deleteFavorite = async (req, res) => {
  const { _id } = req.body;
  const userId = req.user._id;

  // Find the user and update their favorites array
  const user = await User.findById(userId);
  if (!user) {
    return httpError(404, "User not found");
  }

  // Check if the item is in favorites
  if (!user.favorites.includes(_id)) {
    return httpError(400, "Item not in favorites");
  }

  // Remove the item from favorites
  user.favorites = user.favorites.filter((fav) => fav !== _id);
  await user.save();

  res.json({ message: "Item removed from favorites" });
};

module.exports = { deleteFavorite: ctrlWrapper(deleteFavorite) };
