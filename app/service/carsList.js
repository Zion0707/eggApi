const Service = require('egg').Service;
class CarsListServer extends Service{
	async carsList(){
		//查所有车的数据
		const carsList = await this.app.mysql.select('list');
		return { carsList };
	}
}
module.exports = CarsListServer;