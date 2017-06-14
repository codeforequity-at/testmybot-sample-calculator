const Jasmine = require('jasmine');
const reporters = require('jasmine-reporters');
const botkitHelper = require('testmybot/helper/botkit');

botkitHelper.wireWithBotkit(() => require('./src/bot')('page_token', 'verify_token'));

var junitReporter = new reporters.JUnitXmlReporter({
  savePath: __dirname,
  consolidateAll: true
});

const jasmine = new Jasmine();
jasmine.addReporter(junitReporter);
jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.execute();