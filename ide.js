/**
 * Setup TestMyBot and wire it with Botkit
 */
var botkitHelper = require('testmybot/helper/botkit');

botkitHelper.wireWithBotkit(() => require('./src/bot')('page_token', 'verify_token'));

require('testmybot-ide');
