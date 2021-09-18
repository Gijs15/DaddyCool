module.exports = {
    name: 'invisiblearms',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setTitle("Invisible arms, Male & Female, Stick forever")
        .setDescription("1) Go to a clothing store\n2) Purchase the scuba suit and save it as an outfit\n3) Purchase a body suit and have it equipped (Doesn't matter what kind)\n4) Make your way over to the telescopes on the beach\n5) While having the bodysuit equipped do the telescope glitch and select the scuba suit [When you walk away your head should be glitched]\n6) Make your way over to the tops section at the vespucci beach masks store and buy your favourite vest\n7) Go into the water (Without using a car. A bike is fine though) and take the easy way out\n8) You should spawn in with no arms and now just save the outfit")
        .setFooter("These stick after death and don't go away after 20 seconds like others do.")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
    }
}