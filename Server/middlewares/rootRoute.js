const rootRoute = async (req, res) => {
  res.json({
    msg: "Home",
  });
};
module.exports = { rootRoute };
