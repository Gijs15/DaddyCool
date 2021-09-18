module.exports = {
    name: 'kledingglitch',
    description: 'Krijg informatie over gta kleding gltiches',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Alle informatie over kleding glitches:")
      	.addFields(
      	{ name: "De glitches zelf:", value: "~~!InvisibleTorso~~\n!CheckerboardOutfit\n!NooseOutfit\n!InvisibleArms\n!YellowRebreather\n!ColoredDuffelBags\n!BlackJoggers\n!RedJoggers\n!PurpleJoggers\n!OrangeJoggers\n!TanJoggers\n!ParamedicOutfit"},
      	{ name: "Een van de glitches is gepatched / werkt niet meer, wat moet ik doen?", value: "Pm Gijs#0001 en die zorgt ervoor dat de lijst wordt bijgewerkt."},
      	{ name: "Er is een nieuwe glitch! Hoe meld ik die?", value: "Pm Gijs#0001 en die zorgt ervoor dat de lijst wordt bijgewerkt."},
      	)
      	.setColor("#f1c40f")
    	.setFooter("Deze lijst wordt up-to-date gehouden.")
    	message.channel.send({embeds:[embed]})
    }
}