module.exports = {
    name: 'werkendeglitches',
    description: 'Krijg informatie over alle werkende glitches',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Alle werkende glitches:")
      .setDescription("http://tiny.cc/9p8gmz")
      .setColor("YELLOW")
    message.channel.send({embeds:[embed]})
    }
}