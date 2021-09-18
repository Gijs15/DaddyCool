const Discord = require('discord.js');
const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_MESSAGES'
	],
	presence: {
		status: 'dnd',
		activities: [
			{
				name: `DaddyCoolNL`,
				type: 'WATCHING'
			}
		]
	}
});

const prefix = "!";

client.once("ready", () => {
  console.log("Ready!");
});
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
client.once("disconnect", () => {
  console.log("Disconnect!");
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('TOKEN');
