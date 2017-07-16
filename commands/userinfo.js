const Discord = require('discord.js')
exports.run = (client, msg, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor(0x00AE86);
  .setThumbnail(msg.author.avatar);
  .addField('Joined Discord on', `${msg.author.createdAt}`);
  .setTimestamp()
  msg.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ui'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Displays user information & statistics',
  usage: 'userinfo'
};
