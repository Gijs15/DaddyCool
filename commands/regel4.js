module.exports = {
    name: 'regel4',
    description: 'Serverregel nummer 4',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
  	    .setTitle("Regel 4:")
   	   	.setDescription("**Plaats je bericht in het daarvoor bestemde kanaal zodat de server netjes en overzichtelijk blijft voor iedereen**")
    	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}