exports.run = (client, message, [mention, ...reason]) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.reply("You aren't authorized to do this.")
  }
  if (message.mentions.users.size === 0)  {
    return message.reply("Mention a user to ban them!")
  }
  let banMember = message.guild.member(message.mentions.users.first());
  if (!banMember) {
    return message.reply("That user does not seem valid.")
  }
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("I don't have permission to ban members.")
  }
  banMember.ban().then(member => {
    message.channel.send(`${member.user.username} was succesfully banned!`)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans members. Swings the hammer! :hammer:',
  usage: 'ban @user'
};
