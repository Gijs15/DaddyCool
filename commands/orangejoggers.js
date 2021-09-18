module.exports = {
    name: 'orangejoggers',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Orange Joggers:")
        .setDescription("1) Get invited to the Rockstar Created Versus called Crooked Cop.\n2) Tell your friend to set the clothing style to Themed.\n3) Once in character selection tell your friend to set the theme to Insects.\n4) You should be an orange insect.\n5) When the job has started Open the Interaction Menu go to Style > Illuminated Clothing and hold it for 20-30 seconds.\n6) Now scroll up to Auto show aircraft helmet and hold that for 20-30 seconds.\n7) Now scroll down to Illuminated Clothing again this time hold it for 30-40 seconds.\n8) Without closing the interaction menu wait until you get kicked.\n9) Once back in freemode save the outfit in an Ammunation")
        message.channel.send({embeds:[embed]})
    }
}