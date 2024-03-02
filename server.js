const mongoose = require("mongoose");

const app = require("./index");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(PORT, () => {
      console.log(`App listening on port ${port}!`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
