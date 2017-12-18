const Service = require('egg').Service;
class FindCarService extends Service{
	async findCar(name){
		const res = await this.app.mysql.get('list',{ name : name });
		return { res };
	}
} 
module.exports = FindCarService;