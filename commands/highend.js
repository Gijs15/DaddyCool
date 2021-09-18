module.exports = {
    name: 'highend',
    description: 'Krijg informatie over high end vehicles',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
      .setTitle("Uitleg over High End vehicles:")
      .addFields(
      { name: "Algemene uitleg:", value: "Als een auto High End is, betekend dit dat je deze auto niet kunt customizen of in je garage kunt zetten, tenzij je de auto koopt. Alle DLC vehicles zijn standaard gemarkeerd als High End.\n De High End regel telt niet in Story Mode!"},
      { name: "High End auto's in je garage", value: "Als je de auto koopt via Legendarymotorsport.com word hij zoals normaal in je garage geplaatst.\n High End vehicles staan niet op de blacklist list, dit betekend dat je High End straatauto's ook in je garage kunt zetten met behulp van glitches."},
      { name: "Lijst met alle High End auto's:", value: "Omdat deze lijst zo groot is, is er een apart command voor: `!HighEndList`"},
      )
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}