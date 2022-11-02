module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:sort/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'sort', 'sort-keys-fix'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
