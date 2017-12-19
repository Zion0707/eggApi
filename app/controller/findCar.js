const Controller = require('egg').Controller;
class FindCarController extends Controller{
	async findCar(){
		const ctx = this.ctx;
		//POST 请求参数是 request.body;
		const query = ctx.request.body;
		const result = await ctx.service.findCar.findCar(query.name);
		ctx.body = result;
	}
}
module.exports = FindCarController;