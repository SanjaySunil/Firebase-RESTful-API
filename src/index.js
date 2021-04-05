/**
 * @file index.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
