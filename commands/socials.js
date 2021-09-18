module.exports = {
    name: 'socials',
    description: 'Krijg informatie over de socials',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Socials:")
      .setDescription("https://linktr.ee/DaddyCoolNL")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}