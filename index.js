const Discord = require('discord.js');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

const client = new Discord.Client();

client.config = require('./config.json');
require('./modules/functions.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
(async function() {

  const cmdFiles = await readdir('./commands/');
  client.log('log', `Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    try {
      const props = require(`./commands/${f}`);
      client.log('log', `Loading Command: ${props.help.name}. ✔`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    } catch (e) {
      client.log(`Unable to load command ${f}: ${e}`);
    }
  });

  const evtFiles = await readdir('./events/');
  client.log('log', `Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split('.')[0];
    const event = require(`./events/${file}`);
    client.log('log', `Loading Event: ${eventName}. ✔`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  client.login(client.config.token);

}());
