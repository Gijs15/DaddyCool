module.exports = {
    name: 'jobteleport',
    description: 'Informatie job teleport',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Job teleport:")
      .setDescription("http://tiny.cc/h08gmz")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}