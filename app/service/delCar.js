const Service = require('egg').Service;
class DelCarService extends Service{
	async delCar(id){
		const result = await this.app.mysql.delete('list',{id:id});
		return {
			api:'delCar',
			code:0,
			msg:'success',
			res : result
		};
	}
}
module.exports = DelCarService;