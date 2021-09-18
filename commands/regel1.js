module.exports = {
    name: 'regel1',
    description: 'Serverregel nummer 1',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 1:")
      	.setDescription("**Niet schelden!**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}