module.exports = {
    name: 'helpregels',
    description: 'help regels',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help regels:")
    .setDescription("**Commands:**\n`Regel1`, `Regel2`, `Regel3`, `Regel4`, `Regel5`, `Regel6`, `Regel7`, `Regel8`, `Regel9`, `Regels`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}