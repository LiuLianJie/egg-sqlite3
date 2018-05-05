'use strict';

const mock = require('egg-mock');

describe('test/sqlite3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sqlite3-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sqlite3')
      .expect(200);
  });
  
  it('should GET /insert', () => {
    return app.httpRequest()
      .get('/insert')
  });
  
  it('should GET /delete', () => {
    return app.httpRequest()
      .get('/delete')
  });

  it('should GET /delete', () => {
    return app.httpRequest()
      .get('/udpate')
  });
  
  it('should GET /run', () => {
    return app.httpRequest()
      .get('/run')
  });

});
