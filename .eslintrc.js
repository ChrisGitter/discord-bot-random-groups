module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error'],
    },
};
