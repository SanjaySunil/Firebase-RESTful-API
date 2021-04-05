/**
 * @file middlewares.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found');
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: err.message,
  }, null, 2));
}

module.exports = {
  notFound,
  errorHandler
};
