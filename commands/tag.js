exports.run = (client, message, args) => {
    message.channel.send("Clan tag: #CU29Q0RP")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Prints the clan tag.',
  usage: 'tag'
};
