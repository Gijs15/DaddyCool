module.exports = {
    name: 'nitroperks',
    description: 'Krijg de api latency',
    execute(client, message, args, Discord) {
   		let embed = new Discord.MessageEmbed()
      	.setTitle("Hieronder staan alle voordelen van Discord Nitro:")
      	.setDescription("- Geanimeerde emoji's gebruiken\n- Hogere uploadlimiet\n- Custom tag (bijv. Gijs#0000)\n- Betere stream kwaliteit\n- Betere scherm delen kwaliteit\n- Emoji's van andere servers gebruiken\n- Custom badges toevoegen\n- 2 Gratis server boosts (te gebruiken op elke server)")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}