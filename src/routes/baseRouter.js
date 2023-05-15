const { Router } = require('express');
const routeConstants = require('../constants/routeConstants');
const router = Router();

module.exports = rootRouter => {
  rootRouter.use(routeConstants.BASE, router);
  router.get('/', (req, res, next) => {
    return res.json({
      success: true,
      data: {
        message: 'hello world'
      }
    });
  });
};
