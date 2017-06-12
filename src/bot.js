var Botkit = require('botkit');

module.exports = function(page_token, verify_token) {

  var controller = Botkit.facebookbot({
    access_token: page_token,
    verify_token: verify_token
  });

  controller.hears(['start', 'calc', 'calculate'], 'message_received', function(bot, message) {
    require('./skills/skillCalculator')(bot, message);
  });

  controller.on('message_received', function(bot, message) {
    bot.reply(message, 'Try: `start` or `calculate`');
    return false;
  });
  
  return controller;
};