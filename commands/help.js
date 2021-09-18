module.exports = {
    name: 'help',
    description: 'help',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Alle Commands:")
      .setDescription("Gebruik altijd een ! voordat je het commando uitvoert `(!<commando>)`")
        .addField("Regels", "`!helpregels`")
        .addField('Gta:', "`!helpgta`")
        .addField("Gta Kleding Glitches:", "`!helpkledingglitch`")
        .addField('Gctf:', '`!helpgctf`')
        .addField('Socials:', '`!helpsocials`')
        .addField('CoolRacing:', '`!helpcoolracing`')
        .addField('Informatie:', '`!helpinformatie`')
        .addField('Fun:', '`!helpfun`')
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
      message.channel.send({embeds:[embed]})
    }
}