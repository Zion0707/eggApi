const Service = require('egg').Service;
class CarsListServer extends Service{
	async carsList(){
		//查所有车的数据
		const res = await this.app.mysql.select('list');
		return { 
			api:'carsList',
			code:0,
			msg:'success',
			list:res
		};
	}
}
module.exports = CarsListServer;