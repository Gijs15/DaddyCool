module.exports = {
    name: 'regel8',
    description: 'Serverregel nummer 8',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 8:")
      	.setDescription("**NSFW profielfoto's niet toegestaan. Ook beledigende/belastende/vulgaire/racistische namen niet toegestaan. Graag hier zelf zorg voor dragen.**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}