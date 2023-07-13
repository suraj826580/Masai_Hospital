const express = require("express");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/userRoute");
const { employeeRoute } = require("./routes/employeeRoute");
const cors = require("cors");
const { auth } = require("./middlewares/auth");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/", userRoute);
// ---------------------------------
app.use(auth);

app.use("/employee", employeeRoute);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server is Running on Port No ${process.env.PORT}`);
});
