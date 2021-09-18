module.exports = {
    name: 'regel7',
    description: 'Serverregel nummer 7',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 7:")
      	.setDescription("**Profielfoto en/of naam van DaddyCoolNL dragen is verboden!**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}