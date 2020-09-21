module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'never'],
    eqeqeq: 'warn',
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'max-len': ['error', { code: 120 }],
    'new-cap':'warn',
    'no-caller':'error',
    'no-eval':'warn',
    'no-extra-label':'warn',
    'no-tabs': 'warn',
    'no-unused-expressions': 'warn',
    'no-var':'warn',
    'prefer-const':'warn',
    'quote-props':['warn', 'as-needed'],
    quotes: ['warn','single',{avoidEscape: true,allowTemplateLiterals: true}],
    semi: ['warn','always',{omitLastInOneLineBlock: true}],
    '@typescript-eslint/brace-style': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/method-signature-style':['warn','method'],
    '@typescript-eslint/no-empty-function': 'off',
  },
  ignorePatterns:[
    '**/node_modules/**',
    '**/*.d.ts',
  ],
};
