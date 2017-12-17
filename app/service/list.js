const Service = require('egg').Service;
class ListService extends Service{
	async find(id){
		const list = await this.app.mysql.get('list',{id:id});
		return { list };
	}	
}
module.exports = ListService;