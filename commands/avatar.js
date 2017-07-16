exports.run = (client, message, args) => {
  if (message.mentions.users.size === 0) {
            return message.reply(message.author.avatarURL);
        }
        let user = message.mentions.users.first();

        if (!user.avatarURL) {
          return message.reply("This user does not have an avatar.")
        }
        message.channel.send(user.avatarURL)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avi', 'a'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: `Displays the mentioned user's avatar.`,
  usage: 'avatar [mention]'
};
