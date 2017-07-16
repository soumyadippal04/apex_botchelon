const figletAsync = require("util").promisify(require("figlet"));

exports.run = async (client, msg, [banner]) => {
  const data = await figletAsync(banner);
  return msg.channel.send(data, { code: true });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'banner',
  description: 'Creates an ASCII banner from the string you supply',
  usage: 'banner <text>'
}
