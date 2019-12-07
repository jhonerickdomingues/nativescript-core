module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        //'plugin:vue/essential',
        'plugin:vue/recommended', //nível da regra
        // '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "semi": "error",
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }],
        "vue/script-indent": ["error", 2, { "baseIndent": 1 }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
