module.exports = {
    name: 'uitlegmods',
    description: 'Krijg uitleg over gta mods',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Wat zijn GTA mods?")
      	.setDescription("Een mod of modificatie is een aanpassing van de programmeercode van een game. Dit geknoei kan voor goede en slechte doeleinden gebruikt worden. De gangbaarste mod is de zogenaamde 'trainer'. Deze dient om makkelijk te cheaten en je bijvoorbeeld onsterfelijk te maken. Sommige mods zijn slechts cosmetisch en laten de game er beter uitzien. Andere introduceren nieuwe gameplay elementen of brengen inhoud terug die de ontwikkelaar heeft weggestopt. Je kunt het zo gek niet bedenken of iemand heeft er een mod van gemaakt. Bij games met een online component zoals GTA Online wordt het echter grimmiger wanneer mods gebruikt worden om te cheaten. **Daarom staat Rockstart vooralsnog afkeurend tegenover modificaties.**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}