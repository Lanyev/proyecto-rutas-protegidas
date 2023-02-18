const checkUserCredentials = require("./auth.controllers");
const response = require("../utils/responses.handler");
const jwt = require("jsonwebtoken");

const postLogin = (req, res) => {
  const { email, password } = req.body;
  checkUserCredentials(email, password)
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
          },
          "academlo",
          {
            expiresIn: "1h",
          }
        );
        response.success({
          status: 200,
          data: data,
          message: "Login success",
          res,
        });
      } else {
        response.error({
          status: 401,
          data: null,
          message: "Invalid credentials",
          res,
        });
      }
    })
    .catch((error) => {
      response.error({
        status: 401,
        data: error,
        res,
        message: "Something went wrong",
      });
    });
};

module.exports = postLogin;
