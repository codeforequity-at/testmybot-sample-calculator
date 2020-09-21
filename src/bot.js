const Botkit = require('botkit');
const Botanalytics = require('botanalytics').FacebookMessenger(process.env.BOTANALYTICS_TOKEN, {
  "baseUrl": process.env.BOTANALYTICS_BASE_URL,
  ...(process.env.BOTANALYTICS_DEBUG ? {debug: process.env.BOTANALYTICS_DEBUG === 'true'} : {})
})
console.log('Botanalytics initialized');

const _configureMonitoring = (controller) => {
  console.log('Botanalytics monitoring configured');
  controller.middleware.receive.use((bot, message, next) => {
    console.log(`Botanalytics incoming message: ${JSON.stringify(message)}`)
    Botanalytics.logIncomingMessage(message, (err) => {
      next();
    });
  });

  controller.middleware.send.use((bot, message, next) => {
    console.log(`Botanalytics outgoing message: ${JSON.stringify(message)}`)
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
