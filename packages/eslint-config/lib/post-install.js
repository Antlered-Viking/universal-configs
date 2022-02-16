const fs = require("fs");
var npmAddScript = require('npm-add-script');
const packageFile = require('../package.json');

const lintScript = 'eslint --ignore-path .gitignore';
const fixScript = 'eslint --ignore-path .gitignore --fix';
const usrLintFile = './.eslintrc.json';

npmAddScript({ key: "lint", value: lintScript, force: true });
npmAddScript({ key: "lint:fix", value: fixScript, force: true });
try {
    fs.writeFileSync('package.json', JSON.stringify(packageFile, null, 2));
} catch (error) {
    console.error(error);
}

try {
    fs.copyFileSync(usrLintFile, '../.eslintrc.json');
} catch (error) {
    console.error(error);
}