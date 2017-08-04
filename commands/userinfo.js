const Discord = require('discord.js')
exports.run = async(client, msg) => {
const member = msg.mentions.members.first() || msg.member;
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    .setAuthor(member.user.username)
    .setDescription(`Is a member in ${msg.guild.name}. Status: ${member.user.presence.status}`)
    .addField(`Joined Discord`, member.user.createdAt.toLocaleString(), true)
    .addField(`Joined ${msg.guild.name}`, member.joinedAt.toLocaleString(), true)
    .addField('Roles', member.roles.map(r => r.name).join(", "));
  msg.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ui'],
  permLevel: 0
}

exports.help = {
  name: 'userinfo',
  description: 'Shows guild information on the mentioned user',
  usage: 'userinfo [mention]'
}

