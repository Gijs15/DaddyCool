module.exports = {
    name: 'helpinformatie',
    description: 'help informatie',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help informatie:")
    .setDescription("**Commands:**\n`Serverinfo`, `Userinfo`, `Botinfo`, `Badsport`, `NitroPerks`, `Eventinfo`, `Tvfoto`, `Ps4Community`, `VanRuilenKomtHuilen`, `VerschilRuilenTraden`, `GtaRacing`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}