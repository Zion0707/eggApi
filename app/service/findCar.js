const Service = require('egg').Service;
class FindCarService extends Service{
	async findCar(name){
		const res = await this.app.mysql.get('list',{ name : name });
		return {
			api:'findCar',
			code:0,
			msg:'success',
			list : [res]
		};
	}
} 
module.exports = FindCarService;