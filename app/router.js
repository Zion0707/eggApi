'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
 	const { router, controller } = app;
 	router.get('/', controller.home.index);
 	router.get('/api/carsList', controller.carsList.carsList);
 	router.post('/api/findCar', controller.findCar.findCar);
 	router.post('/api/addCar', controller.addCar.addCar);
 	router.post('/api/delCar', controller.delCar.delCar);
 	router.post('/api/updateCar', controller.updateCar.updateCar)
};
