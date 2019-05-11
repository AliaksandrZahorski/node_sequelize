const express = require("express");
// const path = require("path");

const db = require("./config/db");
const sendIndex = require("./utils/send_index");
// db.sync();

db.authenticate()
  .then(() => console.log("DB is connected..."))
  .catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Index'));
app.use(express.static("./public"));
app.use("/tir", require("./routes/tir"));

app.all("/*", sendIndex);

app.listen(PORT, () => console.log(`Start at port: ${PORT}`));
