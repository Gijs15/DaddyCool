module.exports = {
    name: 'dadjoke',
    description: 'Krijg een random dadjoke',
    execute(client, message, args, Discord) {
  		const dadjoke = require('../data/dadjoke.json');
        message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`)
    }
}