const moment = require('moment')

module.exports = {
    name: 'botinfo',
    description: 'Krijg informatie over de bot',
    execute(client, message, args, Discord) {
    var botEmbed = new Discord.MessageEmbed() 
    .setColor(`#f1c40f`)
    .setTitle(`Bot Info`) 
    .setThumbnail(client.user.displayAvatarURL()) 
	.setDescription(`**Algemeen**\n**Gebruikersnaam:** ${client.user.username}\n**Tag:** ${client.user.tag}\n**ID:** ${client.user.id}\n**Gemaakt op:** ${moment(client.user.createdAt).format("DD-MM-YYYY [om] HH:mm")}\n**Eigenaar:** Gijs#0001\n\u200b\n**Stats**\n**Servers:** ${client.guilds.cache.size}\n**Channels:** ${client.channels.cache.size}\n**Gebruikers:** ${client.users.cache.size}`) 
    message.channel.send({embeds:[botEmbed]}) 
    }
}