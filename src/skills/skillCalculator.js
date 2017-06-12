var add = require('../logic/scientificfunctions').add;

module.exports = function(bot, message) {

  bot.startConversation(message, function(err, convo) {
    if (err) return console.log('skillCalculator ERROR: ' + err);

    convo.say('I can do a very advanced scientific calculations for you ("Addition").');
    convo.ask('Please tell me the first number!', function(response, convo) {
      var number1 = parseInt(response.text);
      
      if (isNaN(number1)) {
        convo.say('"' + response.text + '" is not a number!');
        convo.repeat();
        convo.next();
      } else {
        convo.ask('Please tell me the second number!', function(response, convo) {
        
          var number2 = parseInt(response.text);
          
          if (isNaN(number2)) {
            convo.say('"' + response.text + '" is not a number!');
            convo.repeat();
            convo.next();
          } else {
            convo.say(number1 + ' + ' + number2 + ' = ' + add(number1, number2));
            
            convo.ask('Is this correct ?', [
              {
                pattern: 'yes',
                callback: function(response, convo) {
                  convo.say('I know.');
                  convo.next();
                }
              },
              {
                pattern: 'no',
                callback: function(response, convo) {
                  convo.say('You are wrong. I know that this is correct!');
                  convo.next();
                }
              },
              {
                default: true,
                callback: function(response, convo) {
                  convo.repeat();
                  convo.next();
                }
              }
            ]);
            convo.next();
          }
        });
        convo.next();
      }
    });
    convo.next();
  });
};
