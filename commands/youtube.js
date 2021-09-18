module.exports = {
    name: 'youtube',
    description: 'Krijg de youtube link van daddycoolnl',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Youtube link:")
      .setDescription("https://www.youtube.com/channel/UCqT5-DmDgR1ld6dulxKkGCg")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}