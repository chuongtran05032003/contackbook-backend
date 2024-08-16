const { es2025, es2024, es2021 } = require("globals");

module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
};