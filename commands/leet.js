const leet = require('leet');
exports.run = (client, message, args) => {
  let text = leet.convert(args.join(" "));
  message.channel.send(text)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l33t'],
  permLevel: 0
}

exports.help = {
  name: 'leet',
  description: 'Converts boring regular text to 1337 like a boss.',
  usage: 'leet [text]'
}
