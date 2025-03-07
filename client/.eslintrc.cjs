/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    //project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  "rules": {
  "@typescript-eslint/no-misused-promises": [2, {
    "@typescript-eslint/no-unsafe-assignment": "error",
    "checksVoidReturn": {
      "attributes": false
    }
  }]
},
}
