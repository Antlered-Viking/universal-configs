const fs = require("fs");
const packagePath = '../../../package.json';
const npmAddScript = require('npm-add-script');
const packageFile = require(packagePath);

packageFile.prettier = '@antlered-viking/prettier-config';
npmAddScript({ key: "format", value: 'prettier --ignore-path --plugin-search-dir=. .', force: true });
npmAddScript({ key: "format:fix", value: 'prettier --ignore-path --write --plugin-search-dir=. .', force: true });

try {
    fs.writeFileSync(packagePath, JSON.stringify(packageFile, null, 2));
} catch (error) {
    console.error(error);
}