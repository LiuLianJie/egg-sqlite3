const sqlite3 = require('sqlite3').verbose();

class sqlite3Helper {
	constructor(database){
		this.database = database;
		this.db = new sqlite3.Database(this.database);
	}

	get(tableName, options){
		return new Promise((resovle, reject)=>{
			//this.db
		})
	}

	run(sql, paramArray){
		return new Promise((resovle, reject)=>{
			this.db.run(sql, paramArray, (err)=>{
				if(err){
					reject(err);
				}else{
					resovle(true);
				}
			})
		});
	}

	all(sql, paramArray){
		return new Promise((resovle, reject)=>{
			this.db.all(sql, paramArray, (err, row)=>{
				if(err){
					reject(err);
				}else{
					resovle(row);
				}
			})
		})
	}
}

module.exports = sqlite3Helper;