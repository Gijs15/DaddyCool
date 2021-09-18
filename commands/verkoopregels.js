module.exports = {
    name: 'verkoopregels',
    description: 'Krijg uitleg over de gta verkoopregels',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Verkoopregels:")
      	.setDescription("Maximaal 8 auto's per 30 uur verkopen, maar niet meer dan 2 stuks in 2 uur tijd!")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}