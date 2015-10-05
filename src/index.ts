import fs = require('fs');

fs.readFile('./package.json', 'utf8', (err: NodeJS.ErrnoException, data: string)=> {
	console.log(data);
})