exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let role = message.guild.roles.find('name', args[0]);
  if (!role) return message.reply('That role could not be found.');
  if(message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
    member.removeRole(role).catch(console.error);
    message.channel.send(`Removed role ${role.name} from ${member.user.username}!`)
  } else {
    message.channel.send("You aren't authorised to do that, you pleb!")
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['removerole'],
  permLevel: 2
};

exports.help = {
  name: 'dr',
  description: `Removes a role from the mentioned user.`,
  usage: 'dr [Rolename] [mention]'
};
