const Controller = require('egg').Controller;
class carsListController extends Controller{
	async carsList(){
		const ctx = this.ctx;
		//从server层拿到list的数据，返回给控制层
		const result = await ctx.service.carsList.carsList();
		ctx.body = result;
	}
}
module.exports = carsListController; 