'use strict';

function logger (req, res, next) {
  console.log(req.method);
  next();
}

module.exports = logger;