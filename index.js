const express = require('express');
const cors = require('cors');

// const pack = require('../package');
const config = require('./src/config');
const routes = require('./src/api');

const app = new express();

// Parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Parses incoming requests with JSON payloads
app.use(express.json());

// Enables cross origin resource sharing
app.use(cors());

// Loads api routes
app.use(config.api.prefix, routes());

// Handles errors from application level
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message
  });
});

const start = async () => {
  app.listen(config.port, () => {
    console.log(`App listening on Port : ${config.port}`);
  });
};

(async () => start())();
