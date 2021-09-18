module.exports = {
    name: 'regel9',
    description: 'Serverregel nummer 9',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 9:")
      	.setDescription("**Neem gezelligheid en bier mee**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}