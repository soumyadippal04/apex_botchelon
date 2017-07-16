exports.run = (client, message, args) => {
    client.channels.get('331137647097544714').send(args.join(" ")).then(sent => {
		sent.react('👍');
		sent.react('👎');
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'v-announce',
  description: 'Announces a message in voting topics and adds a thumbsup and a thumbsdown.',
  usage: 'v-announce <message>'
}
