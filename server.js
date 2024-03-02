const mongoose = require("mongoose");

const app = require("./index");

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

const port = 3001;

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
