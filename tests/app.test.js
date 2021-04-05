const request = require('supertest');

const app = require('../src/app');

describe('app', () => {
  it('Responds with not found message.', (done) => {
    request(app)
      .get('/invalid-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('Respond with route to API.', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Welcome to Firebase RESTful API!',
        api: 'api/'
      }, done);
  });
});
