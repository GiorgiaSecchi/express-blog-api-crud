function errorsHandler(err, req, res, next) {
  res.status(err.status ?? 500);
  res.json({
    error: err.status || 500,
    message: err.message,
  });
}
module.exports = errorsHandler;
