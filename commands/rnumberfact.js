const request = require('request')
exports.run = (client, message, args) => {
  require("request")("http://numbersapi.com/random/year?json",
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
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'rnumberfact',
  description: 'Gives you math nerds a random fact about numbers.',
  usage: 'rnumberfact'
}
