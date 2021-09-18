module.exports = {
    name: 'regel5',
    description: 'Serverregel nummer 5',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 5:")
      	.setDescription("**Traden is verboden op onze server, want als je niet trade kun je ook niet gescammed worden...:wink: Jullie mogen wel geven ontvangen of ruilen. Maar Traden is verboden!**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}