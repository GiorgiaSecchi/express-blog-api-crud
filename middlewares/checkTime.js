function checkTime(req, res, next) {
  const now = new Date();
  const nowText = now.toLocaleString();
  console.log("Sei passato in questo middleware il");
  console.log(nowText);

  // vado alla prossima funzione
  next();
}

module.exports = checkTime;
