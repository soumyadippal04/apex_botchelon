exports.run = async (client, msg, [...choices]) => {
  const validChoices = choices.filter(x => x);
  return msg.reply(validChoices.length === 1 ?
    "You only gave me one choice, dummy." :
    `I think you should go with "${choices[Math.floor(Math.random() * choices.length)]}"`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'choice',
  description: 'Makes a decision for you given some choices.',
  usage: 'choice <string>'
}
