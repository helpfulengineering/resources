module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'prefer-object-spread', 'compat'],
  globals: {
    graphql: false,
  },
  rules: {
    // Prettier warnings
    'prettier/prettier': 'warn',

    // Suggested import order for packages
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    // Turn of preference of default export
    'import/prefer-default-export': 'off',

    // JSX allowed in .js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Allow props spreading on components
    'react/jsx-props-no-spreading': 'off',

    // Disable the formatting of JSX elements (it doesn't always know whats best!)
    'react/jsx-one-expression-per-line': 'off',

    // Turn off an annoying rule when using Gatsby's Link component
    'jsx-a11y/anchor-is-valid': 'off',

    // Turn off wrapping every emoji in <span> tags
    'jsx-a11y/accessible-emoji': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
