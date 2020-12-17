module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module',
      allowImportExportEverywhere: true
    },
    env: {
      browser: true,
    },
    plugins: [
      'html'
    ],
    extends: [
      'standard',
      'plugin:vue/recommended'
    ],
    rules: {
        "no-unused-vars": "off",
        "no-new": 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": ['error', 2],
        "vue/html-indent": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/component-name-in-template-casing": 0,
        "vue/html-self-closing": 0,
        "no-tabs": 0,
        "vue/max-attributes-per-line": ["error", {
            "singleline": 4,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }],
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "comma-dangle": ["error", "never"],
    }
  }