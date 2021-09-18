module.exports = {
    name: 'redjoggers',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Red Joggers:")
        .setDescription("1) Get invited to the MOC mission called Work Dispute.\n2) Go over to your apartment.\n3) Blow yourself up next to the apartment door.\n4) You should be able to freely walk inside now.\n5) Save the outfit and quit")
        message.channel.send({embeds:[embed]})
    }
}