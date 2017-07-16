const request = require('request')
exports.run = (client, msg, args) => {
  require("request")("http://api.icndb.com/jokes/random",
		function(err, res, body) {
			var data = JSON.parse(body);
			if (data && data.value && data.value.joke) {
			msg.channel.send(data.value.joke)
			}
		});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chucknorris'],
  permLevel: 0
}

exports.help = {
  name: 'chuckNorris',
  description: 'Gives a random Chuck Norris joke',
  usage: 'chuckNorris'
}
