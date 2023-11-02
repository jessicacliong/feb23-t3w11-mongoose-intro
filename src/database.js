const mongoose = require('mongoose');


//27017 default port 
/**
 * Connect or create & connect to a database.
 * @date 31/10/2023 - 20:20:12
 * @author Jess
 */
async function databaseConnect(){
	try {
		// DB connection can take some time, eg. if DB is in the cloud 
		await mongoose.connect(process.env.DB_URI);
		console.log("Database connected");
	} catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
     databaseConnect
}