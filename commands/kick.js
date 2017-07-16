exports.run = (client, message, [mention, ...reason]) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply("You aren't authorized to do this.")
  }
  if (message.mentions.users.size === 0)  {
    return message.reply("Mention a user to kick them!")
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if (!kickMember) {
    return message.reply("That user does not seem valid.")
  }
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't have permission to kick members.")
  }
  kickMember.kick().then(member => {
    message.channel.send(`${member.user.username} was succesfully kicked out!`)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks members. What else do you expect this to say?',
  usage: 'kick @user'
};
