'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
   	console.log("db :",this.ctx.app.db);
    this.ctx.body = 'hi, ' + this.app.plugins.sqlite3.name;
  }

  async run() {
  	const res = await this.ctx.app.db.all("select * from sc_user");
  	//const res = await this.ctx.app.db.run("insert into sc_user(username, password, reate_time) values (1,2,111)");
  	console.log("res :",res);
  }

  async fetch(){
  	const res = await this.ctx.app.db.all("select * from sc_user");
  	//const res = await this.ctx.app.db.run("insert into sc_user(username, password, reate_time) values (1,2,111)");
  	console.log("res :",res);
  }
 
  async insert(){
  	const {db} =  this.ctx.app;
  	const res = await db.run("insert into sc_user(username, password, reate_time) values (?,?,?)",['jliu','lj33', Date.now()]);
  	console.log("res :",res);
  }

  async delete(){
  	const {db} = this.ctx.app;
  	const res = await db.run("delete from sc_user where id = ?",2);
  	console.log("res:",res);
  }

  async udpate(){
  	const {db} = this.ctx.app;
  	const res = await db.run("update sc_user set username = ? where id = ?",['update',3]);
  	console.log("res:",res);
  }
}

module.exports = HomeController;
