const fs = require("fs");
var npmAddScript = require('npm-add-script');
const packageFile = require('../package.json');

packageFile.prettier = '@antlered-viking/prettier-config';
npmAddScript({ key: "format", value: 'prettier --ignore-path --plugin-search-dir=. .', force: true });
npmAddScript({ key: "format:fix", value: 'prettier --ignore-path --write --plugin-search-dir=. .', force: true });

try {
    fs.writeFileSync('package.json', JSON.stringify(packageFile, null, 2));
} catch (error) {
    console.error(error);
}