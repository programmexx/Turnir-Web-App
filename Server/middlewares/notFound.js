const notFound = async (req, res) => {
  res.json({
    msg: "route not found",
  });
};
module.exports = { notFound };
