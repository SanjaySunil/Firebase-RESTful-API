/**
 * @file .eslintrc.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
    'no-console': 0,
  }
};
