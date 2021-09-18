module.exports = {
    name: 'gctfkanaal',
    description: 'Krijg informatie over het gctf kanaal',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Uitleg over het gctf kanaal:")
      .setDescription("Okay luitjes ook even hier zodat hij niet vergeten word. Zoals milfhunter ook al geroepen heeft in de give cars to friends chat. Is het vanaf heden in deze chat alleen maar fotos uploaden van wat je ook daadwerkelijk gift of een screentje als bedankje naar 1 van de members die dat voertuig aan jou heeft gegeven. Overige fotos zullen verwijderd worden door 1 van de moderators.\nBen je opzoek naar een auto ken je het daar uiteraard vragen en hopelijk is er dan iemand die deze dan met je deelt.\nNiet meer spammen en carshowen daar aub. Ook vragen over andere glitches zoals dupen etc. verwijzen wij jullie naar de #🎮gta-lounge.\n   Hulp over hoe te geven en ontvangen hoort uiteraard wel in deze chat.\nThx voor jullie inzet en medewerking!")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}