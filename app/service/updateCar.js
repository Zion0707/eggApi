const Service = require('egg').Service;
class UpdateCarService extends Service{
	async updateCar(id,name){
		const row = {
			id : id,
			name : name
		}
		const result = await this.app.mysql.update('list', row);
		return {
			api:'updateCar',
			code:0,
			msg:'success',
			res : result
		};
	}
}
module.exports = UpdateCarService;