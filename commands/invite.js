module.exports = {
    name: 'invite',
    description: 'Krijg de discord invite van de DaddyCoolNL Official Discord Server',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Discord Invite Link:")
      	.setDescription("https://discord.gg/jYSkRZHR2D")
      	.setColor("YELLOW")
    	message.channel.send({embeds:[embed]})
    }
}