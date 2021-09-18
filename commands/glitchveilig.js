module.exports = {
    name: 'glitchveilig',
    description: 'Krijg uitleg over hoe je veilig kunt glitchen',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setColor("#f1c40f")
        .setTitle("Hoe zorg je ervoor dat je nooit wordt gereset / gemoneywiped:")
        .setDescription("Er is natuurlijk nooit een garantie dat het nooit gaat gebeuren, maar hiermee ben je wel het veiligst.\n- Glitch nooit in een public lobby (tenzij het natuurlijk nodig is voor de glitch).\n- Verkoop je gedupede auto's nooit in een public lobby.\n- Wees voorzichtig als je mensen gaat helpen die nieuw zijn in de glitch wereld.\n- Verander je privacy en op Rockstar Social Club zodat niemand je stats kan bekijken.\n- Dupe met mate, 100 miljoen depositen per dag is erg verdacht.\n- Post nooit je Gamer tag in een openbaar forum! Doe het via een PM.\n- Join geen money lobbies waar mensen moneydroppen, vaak worden die mensen gebanned binnen no-time en jij ook.")
        message.channel.send({embeds:[embed]})
    }
}