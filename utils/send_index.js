const sendIndex = (req, res) => {
  res.sendfile("public/index.html");
};

module.exports = sendIndex;
