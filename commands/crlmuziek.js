module.exports = {
    name: 'crlmuziek',
    description: 'Krijg de muziek van crl',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Hieronder staat de spotify playlist van de cool racing league:")
      .setDescription("https://open.spotify.com/playlist/6H46s2GA8odO5cb4SVaWA9?si=ooqIVexnSS6CUAeFFnmOAA")
      .setThumbnail('https://i.imgur.com/BOousyC.png')
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}