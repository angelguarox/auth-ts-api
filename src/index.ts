import dotenv from 'dotenv';
dotenv.config();

import app from './app';

async function main(){
	await app.listen(app.get('port'));
	console.log(`SERVER IS RUNNING\nLOCALHOST: ${app.get('port')}\nDOCKER: 5000`);
}

import './database/database';
main();