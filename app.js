var shell = require('shelljs');
var fs = require('fs');
var path = require('path');
var UUID = require('pure-uuid');

const id = new UUID(4).format();
const directory = path.join('.', 'uploads', id);
const uploadDirectory = path.join('.', 'uploads');
var outPath = directory + '/';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}
fs.mkdirSync(outPath);
// console.log(sails.config.variables.mongodb);

shell.exec('mongodump --uri mongodb://localhost:27017/test -o ' + outPath, function(code, stdout, stderr) {
  if (code !== 0) return reject(stderr);
  console.log('code',code);
  console.log('srdout', stdout);
  console.log(stderr);
});