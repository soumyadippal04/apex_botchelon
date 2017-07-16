const d20 = require('d20')
exports.run = (client, msg, args) => {
  if (suffix.split("d").length <= 1) {
			msg.channel.send(msg.author + " rolled a " + d20.roll(suffix || "10"));
		}
		else if (suffix.split("d").length > 1) {
			var eachDie = suffix.split("+");
			var passing = 0;
			for (var i = 0; i < eachDie.length; i++){
				if (eachDie[i].split("d")[0] < 50) {
					passing += 1;
				};
			}
			if (passing == eachDie.length) {
				msg.channel.send(msg.author + " rolled a " + d20.roll(suffix));
			}  else {
				msg.channel.send(msg.author + " tried to roll too many dice at once!");
			}
		}
	}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'rolldie',
  description: 'roll one die with x sides, or multiple dice using d20 syntax. Default value is 10',
  usage: '[# of sides] or [# of dice]d[# of sides]( + [# of dice]d[# of sides] + ...)'
}
