const { es2025, es2024 } = require("globals");

module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2024: true,
    },
    extends: ['eslint:recommended', 'prettier'],
};