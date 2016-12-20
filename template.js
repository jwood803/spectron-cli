const Application = require("spectron").Application;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const testPage = require('./test.page.js');

var page = new testPage();

var electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

if (process.platform === 'win32') {
    electronPath += '.cmd';
}

var appPath = path.join(__dirname, '..');

var app = new Application({
    path: electronPath,
    args: [appPath]
  });

global.before(function () {
  chai.should();
  chai.use(chaiAsPromised);
});

describe('Test Example', function () {
  beforeEach(function (done) {
      app.start().then(function() { 
        done(); 
      } 
    );
  });

  afterEach(function (done) {
    app.stop().then(function() {
      done();
    });
  });

  it('opens a window', function () {
    page.getWindowCount().should.eventually.equal(page.windowCount);
  });
});