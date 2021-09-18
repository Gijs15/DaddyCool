module.exports = {
    name: 'helpkledingglitch',
    description: 'help kledingglitch',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help kledingglitch:")
    .setDescription("**Commands:**\n`KledingGlitch`, ~~`InvisibleTorso`~~, `CheckerboardOutfit`, `NooseOutfit`, `InvisibleArms`, `YellowRebreather`, `ColoredDuffelBags`, `BlackJoggers`, `RedJoggers`, `PurpleJoggers`, `OrangeJoggers`, `TanJoggers`, `ParamedicOutfit`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}