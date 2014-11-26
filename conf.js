// conf.js
var ScreenShotReporter = require('protractor-screenshot-reporter');
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: '/tmp/screenshots'
    }));
  }
}
