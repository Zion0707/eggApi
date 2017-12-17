const Controller = require('egg').Controller;
class ListController extends Controller{
	async index(){
		const ctx = this.ctx;
		const id = ctx.params.id;
		const list = await ctx.service.list.find(id);
		ctx.body = list;
	}
}
module.exports = ListController;