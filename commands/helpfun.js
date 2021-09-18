module.exports = {
    name: 'helpfun',
    description: 'help fun',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help fun:")
    .setDescription("**Commands:**\n- `Bier`\n- `Koffie`\n- `Miele`\n- `Gans`\n- `Eend`\n- `Topic`\n- `CoinFlip`\n- `DadJoke`\n- `Hond`\n- `Kat`\n- `SpamMij`\n- `RandomFact`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}