# `@antlered-viking/prettier-config`

PrettierRC, as configured by Antlered Viking

---

## Usage

First install the package as a dev dependency:

```bash
npm i -D @antlered-viking/prettier-config --dev
# or if you use yarn
yarn add -D @antlered-viking/prettier-config
```

Then just create `.prettierrc.json` at the root of your project with the following contents:

```json
{
  "prettier": "@antlered-viking/prettier-config"
}
// your custom overrides here
```

That's actually it! Now when your project will use this config setup wherever Prettier gets used
