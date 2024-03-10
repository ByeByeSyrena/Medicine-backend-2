const { ctrlWrapper, httpError } = require("../../../helpers");

const { User } = require("../../../models");

// Controller function to add an item to favorites
const addFavorite = async (req, res) => {
  const { _id } = req.body;
  const userId = req.user._id; // Assuming user ID is available in req.user after authentication

  // Find the user and update their favorites array
  const user = await User.findById(userId);
  if (!user) {
    return httpError(404, "User not found");
  }

  // Check if the item is already in favorites
  if (user.favorites.includes(_id)) {
    return httpError(400, "Item already in favorites");
  }

  // Add the item to favorites
  user.favorites.push(_id);
  await user.save();

  res.json({ message: "Item added to favorites" });
};

module.exports = { addFavorite: ctrlWrapper(addFavorite) };
