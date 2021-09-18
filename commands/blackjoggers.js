module.exports = {
    name: 'blackjoggers',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Black Joggers:")
        .setDescription("1) Host the MOC mission called Work dispute.\n2) Go to your apartment.\n3) Blow yourself up next to your apartment door.\n4) You should just be able to freely walk inside.\n5) Save the outfit and quit")
        message.channel.send({embeds:[embed]})
    }
}