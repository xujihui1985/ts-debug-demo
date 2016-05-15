'use strict';
var chai = require('chai');
var fs = require('fs');
var path = require('path');
var expect = chai.expect;
var MyError = require('../built/errors').MyError;

describe('fs/readfile', function() {
	
	it('should read file', function(done) {
		fs.readFile(path.join(__dirname, '../package.json'),'utf8', function(err, data){
			expect(JSON.parse(data).name).to.equal('vscode-node-debug');
			done();
		});
	});
});

describe('error', function() {
  it('should get error code', function() {
    var myError = new MyError('hello');
    expect(myError.description).to.eq('this is a description');
  })
})