module.exports = {
    name: 'paramedicoutfit',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Paramedic Outfit:")
        .setDescription("\n1) Start or get invited to Act 1 Setup.\n2) Make sure you're on the paramedic outfit team and select your favourite outfit.\n3) After loading in blow up the ambulance.\n4) Tell your friend to click A or X to continue.\n5) You have to turn you controller off when you see 'continuing' change to 'Downloading' in the bottom right.\n6) Whenever you hear yourself going up the elevator turn your controller on.\n7) If you have no minimap tell your friend to leave and to start and invite only session.\n8) Now you make your way over to an ammunation.\n9) Purchase an earpiece {If you have them all bought just equip one.\n10) Join the friend that's in an invite only and save the outfit")
        .setFooter("Sometimes the ammunation won't be open and that happens because you messed up somewhere during the timing parts so just retry")
        message.channel.send({embeds:[embed]})
    }
}