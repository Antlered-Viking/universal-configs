# `@antlered-viking/prettier-config`

ESLint, as configured by Antlered Viking

---

## Usage

First install the package as a dev dependency:

```bash
npm install @antlered-viking/prettier-config --dev
```

Then just create `.prettierrc.json` at the root of your project with the following contents:

```json
{
  "extends": ["@antlered-viking/prettier-config"]
  // your custom overrides here
}
```

That's actually it! Now when your project will use this config setup wherever Prettier gets used
