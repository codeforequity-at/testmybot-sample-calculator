const Botkit = require('botkit');
const BotanalyticsConfig = require('./BotanalyticsConfig.json')
const Botanalytics = require('botanalytics').FacebookMessenger('BOTANALYTICS_TOKEN', BotanalyticsConfig)

const _configureMonitoring = (controller) => {
  controller.middleware.receive.use((bot, message, next) => {
    Botanalytics.logIncomingMessage(message, (err) => {
      next();
    });
  });
  controller.middleware.send.use((bot, message, next) => {
    Botanalytics.logOutgoingMessage(message, message.channel || 'unknown', null, (err) => {
      next();
    } );
  });
}

module.exports = function(page_token, verify_token) {

  var controller = Botkit.facebookbot({
    access_token: page_token,
    verify_token: verify_token
  });

  controller.hears(['start', 'calc', 'calculate'], 'message_received', function(bot, message) {
    require('./skills/skillCalculator')(bot, message);
  });
  controller.hears(['cancel'], 'message_received', function(bot, message) {
  });

  controller.on('message_received', function(bot, message) {
    bot.reply(message, 'Try: `start` or `calculate`');
    return false;
  });

  _configureMonitoring(controller)

  return controller;
};
