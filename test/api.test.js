const request = require('supertest');

const app = require('../src/app');

describe('GET /api/', () => {
  it('Respond with information about the API and routes.', (done) => {
    request(app)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Welcome to Firebase RESTful API!',
        routes: {
          database: '/db',
          version: '/version'
        }
      }, done);
  });
});
