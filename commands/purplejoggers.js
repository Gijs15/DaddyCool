module.exports = {
    name: 'purplejoggers',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Purple Joggers:")
        .setDescription("1) Start the Rockstar Created Versus called Crooked Cop.\n2) Set Clothing to themed.\n3) While in character selection set the clothing theme to insects.\n4) You should be a purple insect.\n5) When the job has started Open the Interaction Menu go to Style> Illuminated Clothing and hold it for 20-30 seconds.\n6) Now scroll up to Auto show aircraft helmet and hold that for 20-30 seconds.\n7) Now scroll down to Illuminated Clothing again this time hold it for 30-40 seconds.\n8) Without closing the interaction menu wait until you get kicked.\n9) Once back in freemode save the outfit in an Ammunation")
        message.channel.send({embeds:[embed]})
    }
}