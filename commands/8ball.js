const answers = ["Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell to the no.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!"];

exports.run = (client, msg, args) => msg.reply(msg.content.endsWith("?") ?
  `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
  "🎱 That doesn't look like a question, try again please.");

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }

  exports.help = {
    name: '8ball',
    description: 'Magic 8-Ball, does exactly what the toy does. (Results may vary)',
    usage: '8ball <question>'
  }
