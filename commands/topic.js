module.exports = {
    name: 'topic',
    description: 'Krijg een random topic',
    execute(client, message, args, Discord) {
		const topics = require('../data/topics.json');
      	message.channel.send(`${topics[Math.floor(Math.random() * topics.length)]}`)
    }
}