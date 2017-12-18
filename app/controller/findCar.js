const Controller = require('egg').Controller;
class FindCarController extends Controller{
	async findCar(){
		const ctx = this.ctx;
		const query = ctx.request.query;
		const car = await ctx.service.findCar.findCar(query.name);
		ctx.body = car;
	}
}
module.exports = FindCarController;