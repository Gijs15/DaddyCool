module.exports = {
    name: 'gctf1seater',
    description: 'Krijg informatie over de gctf 1 seater glitch',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    	.setTitle("Gctf 1 seater Work Around:")
        .setDescription("- Word onzichtbaar net zoals normaal\n- Laat je vriend op de auto schieten totdat de auto in de fik gaat.\n- Net voordat hij explodeert moet je snel instappen.\n- Om hem te saven moet je in je MOC blijven en dan moet je vriend Morse Mutual bellen.\n- Als dat gedaan is moet je uit de MOC lopen en dan naar je nachtclub toegaan, om er vervolgens in en uit te gaan.")
    	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}