const Service = require('egg').Service;
class AddCarService extends Service{
	async addCar(name){
		const result = await this.app.mysql.insert('list',{name:name});
		return {
			api:'addCar',
			code:0,
			msg:'success'
		};
	}
}
module.exports = AddCarService;