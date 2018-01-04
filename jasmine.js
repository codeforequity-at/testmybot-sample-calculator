const bot = require('testmybot');

bot.helper.botkit().wireWithBotkit(() => require('./src/bot')('page_token', 'verify_token'));
bot.helper.jasmine().generateJUnit();
