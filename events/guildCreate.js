module.exports = (client, guild) => {
  guild.defaultChannel.send(`= Apex Botchelon =
    • Thanks for inviting me to your guild! Let's hope I'm really useful to you!
    • I'm assuming you've invited me with the correct permissions. If a command doesn't work for any apparent reason, check my permissions again.
    • To use moderator commands: You'll need 2 roles configured. "Admin" for administrator commands, and "Mod" for moderation. Make sure you give them to people you trust!
    • The bot is currently in Alpha state, so please bear errors and report them to Stitch#9441. Send Stitch feedback as well.
    • Use -help to get started! Have fun!
    `, {code: "asciidoc"})
  client.channels.get("336452692178108446").send(`Joined ${guild.name}! Currently in ${client.guilds.size} servers!`)
};
