const Discord = require('discord.js')
exports.run = async(client, msg) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .setColor(3447003)
  .setDescription(`Is a member in ${msg.guild.name}`)
  .addField('Joined discord', msg.author.createdAt.toLocaleString(), true)
  .addField(`Joined ${msg.guild.name}`, msg.member.joinedAt.toLocaleString(), true)
  .addField('Roles', msg.member.roles.map(r => r.name).join(", "))
  .setTimestamp()
  //command currently only works for the author

  try {
    await msg.channel.send({embed})
  } catch(e) {
    console.log(e)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ui'],
  permLevel: 0
}

exports.help = {
  name: 'userinfo',
  description: 'Shows guild information on the mentioned user',
  usage: 'userinfo'
}

