# `@antlered-viking/eslint-config`

ESLint, as configured by Antlered Viking

---

## Usage

First install the package as a dev dependency:

```bash
npm i -D @antlered-viking/eslint-config
# or if you use yarn
yarn add -D @antlered-viking/eslint-config
```

Then just create `.eslintrc.json` at the root of your project with the following contents:

```json
{
  "extends": ["@antlered-viking/eslint-config"]
  // your custom overrides here
}
```

That's actually it! Now when your project will use this config setup wherever ESLint gets used
