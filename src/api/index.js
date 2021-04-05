const express = require('express');

const version = require('./version');
const database = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Welcome to Firebase RESTful API!',
    routes: {
      database: '/db',
      version: '/version'
    }
  }, null, 2));
});

router.use('/db', database);
router.use('/version', version);

module.exports = router;
