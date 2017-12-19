const Controller = require('egg').Controller;
class UpdateCarController extends Controller{
	async updateCar(){
		const ctx = this.ctx;
		//POST 请求参数 request.body
		const query = ctx.request.body;
		const result = await ctx.service.updateCar.updateCar(query.id, query.name);
		ctx.body = result;
	}
}
module.exports = UpdateCarController;