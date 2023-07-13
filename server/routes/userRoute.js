const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModal");

const userRoute = Router();

userRoute.post("/signup", async (req, res) => {
  const userCredential = req.body;

  try {
    if (
      (userCredential.email,
      userCredential.password,
      userCredential.confirm_password)
    ) {
      bcrypt.hash(userCredential.password, 5, async (err, hash) => {
        if (hash) {
          const userDetails = new UserModel({
            ...userCredential,
            password: hash,
            confirm_password: hash,
          });

          await userDetails.save();
          res.status(200).send({ msg: "User Registered" });
        } else {
          res.status(200).send({ msg: err });
        }
      });
    } else {
      res.status(200).send({ msg: "Check Your Credentials" });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  try {
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ userRelation: user._id }, "masai", {
            expiresIn: "2h",
          });
          res.status(200).send({ msg: "Login Successfully", token });
        } else {
          res.status(200).send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.status(200).send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

module.exports = { userRoute };
