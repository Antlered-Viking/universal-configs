const fs = require("fs");

const packageFile = require('../package.json');
const formatScript = 'prettier --ignore-path --write --plugin-search-dir=. .';
const prettierEntry = '@antlered-viking/prettier-config';
packageFile.scripts.format = formatScript;
packageFile.prettier = prettierEntry;

try {
    fs.writeFileSync('package.json', JSON.stringify(packageFile, null, 2));
} catch (error) {
    console.error(error);
}