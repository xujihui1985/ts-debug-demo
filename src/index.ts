'use strict';

import * as _ from 'lodash';
import * as commander from 'commander';
import * as inquirer from 'inquirer';
import * as co from 'co';
import {spawn, execSync} from 'child_process';
var fs = require('fs');

interface NodePackage {
	name: string;
	version: string;
	description: string;
	main: string;
	scripts: Map<string, string>;
	author: string;
	license: string;
	dependencies: {[key:string]:string};
	devDependencies: Map<string, string>;
}

co(function* () {
	let res: NodePackage = yield readFile('./package.json');
	console.log(res.dependencies);
	for(let dep in res.dependencies) {
		console.log(dep);
	}
});
let lsla = spawn('ls', ['-la'], {
	cwd: __dirname
});
lsla.stdout.pipe(process.stdout);


function readFile(fileName: string): Promise<NodePackage> {
	return new Promise((resolve, reject)=>{
		fs.readFile(fileName, 'utf8', (err, data)=>{
			if(err) {
				reject(err);
				return;
			}
			try {
				let result: NodePackage = JSON.parse(data);
				resolve(result);
			} catch(e) {
				reject(e);
			}
		})
	});
}

