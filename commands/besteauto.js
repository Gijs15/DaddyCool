module.exports = {
    name: 'besteauto',
    description: 'Krijg informatie over de beste auto',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Beste auto:")
      .setDescription("http://tiny.cc/ty8gmz")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}