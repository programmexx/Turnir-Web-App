const { CustomError } = require("../errors");

const errorHandler = async (error, req, res, next) => {
  console.log(error);
  if (error instanceof CustomError) {
    return res.status(error.status).json({ msg: error.message });
  }
  if (error.code === 11000) {
    return res.status(400).json({
      msg: ` ${Object.keys(error.keyValue)} Already Exists`,
    });
  }
  return res.status(500).json({
    msg: "Internal Server Error",
  });
};

module.exports = errorHandler;
