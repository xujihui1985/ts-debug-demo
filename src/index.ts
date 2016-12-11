//import * as _ from 'lodash';
//import * as commander from 'commander';
//import * as inquirer from 'inquirer';
//import * as co from 'co';
//import { spawn } from 'child_process';
import 'source-map-support/register';
import * as fs from 'fs';
import { join } from 'path';

interface NodePackage {
	name: string;
	version: string;
	description: string;
	main: string;
	scripts: Object;
	author: string;
	license: string;
	dependencies: Object;
	devDependencies: Object;
}

async function main() {
	const packageExists = await exists(join(__dirname, '../package.json'));
	console.log(packageExists);

	try {
		let res = await readFile(join(__dirname, '../package.json'));
		for (const key of Object.keys(res.dependencies)) {
			console.log(key);
		}
	} catch (e) {
		console.log(e);
	}
	
}

function readFile(fileName: string): Promise<NodePackage> {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, 'utf8', (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			try {
				let result: NodePackage = JSON.parse(data);
				if (result) {
					throw new Error('dafdsf');
				}
				resolve(result);
			} catch (e) {
				reject(e);
			}
		})
	});
}

function exists(fileName: string): Promise<boolean> {
	return new Promise(resolve => fs.exists(fileName, resolve));
}

main();