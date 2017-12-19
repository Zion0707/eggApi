const Controller = require('egg').Controller;
class AddCarController extends Controller{
	async addCar(){
		const ctx = this.ctx;
		//POST 请求参数是 request.body;
		const query = ctx.request.body;
		const result = await ctx.service.addCar.addCar(query.name);
		ctx.body = result;
	}
}
module.exports = AddCarController;