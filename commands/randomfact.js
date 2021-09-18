module.exports = {
    name: 'randomfact',
    description: 'Krijg een random fact',
    execute(client, message, args, Discord) {
  		const randomfact = require('../data/randomfact.json');
        message.channel.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
    }
}