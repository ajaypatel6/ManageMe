exports.allAccess = (req, res) => {
  res.status(200).send("Public Content");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Public Content");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Mod Content");
};
