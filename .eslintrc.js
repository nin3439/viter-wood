module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "warn",
  },
  overrides: [],
};
