const mongoConnect = require("./database/connection");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/index.route");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const main = async () => {
  await mongoConnect.connectToDb();
};

main();
app.listen(process.env.PORT);
