'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/run', controller.home.run);
  router.get('/insert', controller.home.insert);
  router.get('/delete', controller.home.delete);
  router.get('/udpate', controller.home.udpate);
};
