const { Router } = require('express');

const baseRouter = require('./routes/baseRouter');

module.exports = () => {
  const rootRouter = Router();
  baseRouter(rootRouter);
  return rootRouter;
};
