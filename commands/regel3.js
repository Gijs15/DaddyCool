module.exports = {
    name: 'regel3',
    description: 'Serverregel nummer 3',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
  	    .setTitle("Regel 3:")
      	.setDescription("**DaddyCoolNL tag is niet toegestaan**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}