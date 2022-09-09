const express = require('express');
const { driverRouter, passagerRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use('/passager', passagerRouter);
app.use('/driver', driverRouter);

module.exports = app;