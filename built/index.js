'use strict';
var co = require('co');
var child_process_1 = require('child_process');
var fs = require('fs');
co(function* () {
    let res = yield readFile('./package.json');
    console.log(res.dependencies);
    for (let dep in res.dependencies) {
        console.log(dep);
    }
});
let lsla = child_process_1.spawn('ls', ['-la'], {
    cwd: __dirname
});
lsla.stdout.pipe(process.stdout);
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                let result = JSON.parse(data);
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
//# sourceMappingURL=index.js.map