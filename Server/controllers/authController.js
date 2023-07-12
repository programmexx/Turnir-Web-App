const User = require("../database/models/userModel");
const { BadRequestError, NotFoundError, ForbiddenError } = require("../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  // check if all info are provided
  let { firstname, lastname, email, phone, password } = req.body;
  if (!firstname || !lastname || !email || !phone || !password) {
    throw new BadRequestError("Please Provide all required info");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  // create new user
  await User.create({ firstname, lastname, email, phone, password });

  res.json({
    msg: "Account created successfully",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // check if email and password is provided
  if (!email || !password) {
    throw new BadRequestError("Provide email and password");
  }

  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError(`User with email address ${email} does not exist`);
  }

  // check if password match
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ForbiddenError("Incorrect Password");
  }

  // create payload for jwt token
  const payload = { id: user._id };

  // create token
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

  // send token to user with cookie
  res
    .cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: false,
      signed: true,
    })
    .json({
      msg: "Log in successful",
      loggedIn: true,
    });

  res.json({
    msg: "login",
  });
};

const logout = async (req, res) => {
  res
    .cookie("token", "", {
      expires: new Date(Date.now() + 1000),
    })
    .json({ msg: "Successfully Logged Out!!!" });
};

module.exports = {
  login,
  logout,
  signup,
};
