module.exports = {
    name: 'tvfoto',
    description: 'Uitleg tvfoto',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Uitleg over foto's in deze server:")
    	.setDescription("**Gelieve geen foto van je tv maken, als ik tv's wil zien ga ik wel naar de mediamarkt!** Weet je niet hoe je een screenshot post? Maak een ingame screenshot, stuur deze door aan iemand of 2e account via psn messenger dan zit hij in je telefoon... Of maak ingame een snapmatic en deel deze op socialclub, vanuit daar kan je hem weer downloaden en hier posten.")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}