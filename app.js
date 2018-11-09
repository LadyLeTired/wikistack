const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const layout = require("./views/layout.js");
// const { db } = require("./models");
const models = require("./models");

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });

app.use("/user", require("./routes/user.js"));
app.use("/wiki", require("./routes/wiki.js"));

app.get("/", (req, res) => {
  // console.log(layout("Hello World"));
  res.redirect("/wiki");
});

const syncAndRunQueries = async () => {
  try {
    await models.Page.sync({
      force: true
    });

    await models.User.sync({
      force: true
    });

    const PORT = 9000;
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

syncAndRunQueries();
