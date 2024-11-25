function checkTime(req, res, next) {
  const now = new Date();
  const nowText = now.toLocaleDateString();
  console.log(nowText);

  // vado alla prossima funzione
  next();
}

module.exports = checkTime;
