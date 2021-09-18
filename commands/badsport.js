module.exports = {
    name: 'badsport',
    description: 'Krijg informatie over de discord versie van bad sport',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Bad Sport Informatie")
      	.addFields(
        { name: 'Algemeen:', value: 'Als je maar 3 kanalen ziet kan dat kloppen, je hebt dan namelijk de bad sport role gekregen. Dit houdt in dat je tijdelijk alleen maar in 1 kanaal kunt praten, alle updates en andere kanalen zijn voor jou niet zichtbaar! Het is dus een straf, en die word uitgedeeld in plaats van een kick / mute. Als je bad sport tijd erop zit halen wij de rol weer weg en kun je weer in alle kanalen praten. Wij weten zelf wel wanneer de tijd voorbij is :wink:' },
        { name: 'Regels:', value: 'In de #🐶bad-sport-lounge worden nog steeds de normale regels gehandhaafd. Deze zijn te vinden in de #📌regels. Als je in de Bad sport lounge weer de regels overtreed, dan krijg je een zwaardere straf!' },
        { name: 'Overig:', value: '1. Alleen de gebruikers met de bad sport rol en staffleden kunnen hierin lezen en/of typen.     2. De duur van je bad sport word **niet** vermeld!'}
      	)
      	.setColor("RED")
    	.setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    	message.channel.send({embeds:[embed]})
    }
}
