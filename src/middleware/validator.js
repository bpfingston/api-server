'use strict';

module.exports = function (req, res, next) {
  let { item } = req.query;
  if (item) {
    next();
  } else {
    res(500);
    next('no food exists');
  }
};
