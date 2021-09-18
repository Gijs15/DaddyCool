module.exports = {
    name: 'helpgctf',
    description: 'helpgctf',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help Gctf:")
    .setDescription("**Commands:**\n`GctfKanaal`, `Gctf1seater`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}