module.exports = {
    name: 'helpcoolracing',
    description: 'help coolracing',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help coolracing:")
    .setDescription("**Commands:**\n`CrlMuziek`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}