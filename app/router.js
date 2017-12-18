'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
 	const { router, controller } = app;
 	router.get('/', controller.home.index);
 	router.get('/api/carsList', controller.carsList.carsList);
 	router.get('/api/findCar', controller.findCar.findCar);
 	router.post('/api/addCar', controller.addCar.addCar);
};
