module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
}
