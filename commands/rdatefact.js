const request = require('request')
exports.run = (client, message, args) => {
  require("request")("http://numbersapi.com/random/date?json",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.text) {
                        message.channel.send(data.text)
}
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['randomDayFact'],
  permLevel: 0
}

exports.help = {
  name: 'rdatefact',
  description: 'Self explanatory',
  usage: 'rdatefact'
}
