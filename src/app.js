/**
 * @file app.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Welcome to Firebase RESTful API!',
    api: 'api/',
    author: 'Sanjay Sunil',
    github: 'https://github.com/sanjaysunil/firebase-restful-api'
  }, null, 2));
});

app.use('/api/', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
