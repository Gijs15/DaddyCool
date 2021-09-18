module.exports = {
    name: 'apilatency',
    description: 'Krijg de api latency',
    execute(client, message, args, Discord) {
		message.channel.send(`API Latency is ${Math.round(client.ws.ping)}ms.\nAPI latency is the total amount of time that it is taken by an API system to respond to an API call. This time is calculated from the moment a request is received by the API gateway, till that specific moment when the first response is returned to that same client.`)
    }
}
