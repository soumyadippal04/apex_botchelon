module.exports = (client, guild) => {
  client.channels.get("336452692178108446").send(`Left ${guild.name}. Currently in ${client.guilds.size} servers!`)
}
