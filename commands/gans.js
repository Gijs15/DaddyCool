module.exports = {
    name: 'gans',
    description: 'Laat de bot een gans emoji versturen',
    execute(client, message, args, Discord) {
		message.channel.send("<:gans:727947748317331506>")
    }
}