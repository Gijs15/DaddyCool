module.exports = {
    name: 'blacklist',
    description: 'Krijg informatie over de gta blacklist',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
      	.setTitle("Hieronder staat de uitleg over de GTA blacklist:")
      	.addFields(
      	{ name: "Wat is een blacklisted auto?", value: "Dit is een script van Rockstar zelf dat het plaatsen van bijvoorbeeld een 200 meter groot vliegtuig in een garage van 30 meter tegenhoud. Als een auto is geblacklisted is het **onmogelijk** om deze auto toch nog in je garage te krijgen, ook als je glitched."},
      	{ name: "Welke auto's zijn allemaal blacklisted?", value: "De lijst hiervoor is enorm lang en heeft ook een speciaal command: !blacklistlist of !bll"},
      	{ name: "Soort van blacklist", value: "3 Auto's, de Clown van, de Mighty Bush en de McGill Olsen zijn niet geblacklisted, maar daar is wel iets anders mee aan de hand. Als je deze auto's in je garage probeert te zetten dan lukt dat prima. Maar als je vervolgens weer een nieuwe sessie joined, zie je dat deze auto's zijn veranderd in een normale straatauto."},
      	{ name: "Speciale auto's die niet geblacklisted zijn:", value: "Als je een manier vind om deze auto's in je garage te zetten dan blijven deze in je garage en worden ze niet weggehaald.\nLijst:\n- Bunker Caddy (PS4 / XBOX1 Only)\n- Rallytruck (Dune Offroad Truck)\n- Minitank\n- Festival Bus\n- Lost Slamvan\n- Terrorbyte"}
      	)
      	.setColor("#f1c40f")
    	.setThumbnail('https://i.imgur.com/Gx49s1V.jpg')
    	message.channel.send({embeds:[embed]})
    }
}