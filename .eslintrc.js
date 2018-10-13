module.exports = {
  globals: {
    APP_ID: true,
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'jest'],
  settings: {
    // 'import/resolver': 'webpack',
    'import/resolver': {
      webpack: { 
        config: './build/webpack.config.dev.js',
      },
    },
    'import/resolver': {
      webpack: { 
        config: './build/webpack.config.prod.js',
      },
    },
    'import/parser': 'babel-eslint',
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': [2, { commonjs: false }],
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/mouse-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['invalidHref'],
      },
    ],
  },
};
