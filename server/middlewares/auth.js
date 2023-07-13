const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decode = jwt.verify(token.split(" ")[1], "masai");

      if (decode) {
        req.body.userRelation = decode.userRelation;
        next();
      } else {
        res.status(400).send({ err: "Invalid Token" });
      }
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  } else {
    res.status(400).send({ err: "Please Login" });
  }
};

module.exports = {
  auth,
};
