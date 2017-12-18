const Controller = require('egg').Controller;
class FindCarController extends Controller{
	async findCar(){
		const ctx = this.ctx;
		//GET 请求参数是 request.query;
		const query = ctx.request.query;
		const result = await ctx.service.findCar.findCar(query.name);
		ctx.body = result;
	}
}
module.exports = FindCarController;