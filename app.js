const sqlite3Helper = require('./lib/sqlite3Helper');

module.exports = app => {
	console.log('app.config',app.config.sqlite3);
	const config = app.config.sqlite3;
	app.beforeStart(async () =>{
		app.db = new sqlite3Helper(config.database);
	});
}