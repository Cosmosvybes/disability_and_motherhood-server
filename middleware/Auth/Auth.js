const jwt = require("jsonwebtoken");

exports.Auth = (req, res, next) => {
  const headerToken = decodeURIComponent(req.header("Authorization"));
  const token = headerToken.split(" ")[1];
  try {
    if (!token) {
      return res.status(401).send({ response: "Sign in to proceed" });
    }
    const data = jwt.verify(token, "secret");
    req.user = data.email;
    next();
  } catch (error) {
    res.status(403).send({ response: "session expired" });
  }
};
