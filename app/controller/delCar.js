const Controller = require('egg').Controller;
class DelCarController extends Controller{
	async delCar(){
		const ctx = this.ctx;
		//POST 请求是 request.body
		const query = ctx.request.body;
		const result = await ctx.service.delCar.delCar(query.id);
		ctx.body = result;
	}
}
module.exports = DelCarController;