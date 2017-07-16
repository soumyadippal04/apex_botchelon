exports.run = (client, message, args) => {
    client.channels.get('331133485446070291').send(args.join(" "))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'announce',
  description: 'Announces a message.',
  usage: 'announce <message>'
};
