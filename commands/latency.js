module.exports = {
    name: 'latency',
    description: 'Krijg de latency van de bot',
    execute(client, message, args, Discord) {
		message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.\nLatency is the delay between a user's action and a web application's response to that action, often referred to in networking terms as the total round trip time it takes for a data packet to travel`)
    }
}