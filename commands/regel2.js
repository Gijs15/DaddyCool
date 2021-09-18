module.exports = {
    name: 'regel2',
    description: 'Serverregel nummer 2',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 2:")
      	.setDescription("**Geen zelfpromo/delen van links, ook niet in DM!**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}