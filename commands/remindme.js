const ms = require('ms');
exports.run = (client, message, args) => {
  let time = args.slice(0).join(' ');
  let reminder = args.slice(1).join(' ');
  if (!time) return message.reply('You must set a duration for the reminder in either hours, minutes or seconds');
  if (!reminder) return message.reply("Tell me what I'm supposed to remind you!")
  let validUnlocks = ['release', 'unlock'];

  if (validUnlocks.includes(time)) {
    message.author.send(`Reminding you to do: ${reminder}`);
  } else {
    message.channel.send(`Reminder set! I will remind you in ${ms(ms(time), { long:true })}`)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'remindme',
  description: 'Work in progress',
  usage: 'remindme <reminder>'
};
