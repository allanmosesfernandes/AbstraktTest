/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Set the line-break style to "unix" (LF)
    "linebreak-style": ["error", "windows"],
    // Enforce double quotes for string literals
    quotes: ["error", "double"],
    // eslint-disable-next-line react/jsx-filename-extension
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
