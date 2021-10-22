'use strict';

const express = require('express');
// const foodRoute = require('./routes/food');
// const restaurantRoute = require('./routes/restaurant');
const app = express();
const logger = require('./middleware/logger');
const e404 = require('./error-handlers/404');
const e500 = require('./error-handlers/500');
const apiRoute = require('./routes/api.js');

app.use(express.json());
app.use(logger);

app.use(apiRoute);
// app.use('/restaurant', restaurantRoute);
// app.use('/food', foodRoute);

app.use(e404);
app.use(e500);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server listening on', port));
  },
};