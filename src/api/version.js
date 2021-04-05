const express = require('express');

const app = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    version: app.version
  }, null, 2));
});

module.exports = router;
