"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
//import * as _ from 'lodash';
//import * as commander from 'commander';
//import * as inquirer from 'inquirer';
//import * as co from 'co';
//import { spawn } from 'child_process';
require("source-map-support/register");
const fs = require("fs");
const path_1 = require("path");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const packageExists = yield exists(path_1.join(__dirname, '../package.json'));
        console.log(packageExists);
        try {
            let res = yield readFile(path_1.join(__dirname, '../package.json'));
            for (const key of Object.keys(res.dependencies)) {
                console.log(key);
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                let result = JSON.parse(data);
                if (result) {
                    throw new Error('dafdsf');
                }
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
function exists(fileName) {
    return new Promise(resolve => fs.exists(fileName, resolve));
}
main();
//# sourceMappingURL=index.js.map