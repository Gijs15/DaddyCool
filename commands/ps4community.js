module.exports = {
    name: 'ps4community',
    description: 'Krijg uitleg over ps4 community -> discord',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Uitleg over de ps4 community:")
      	.setDescription("De ps4 community is helaas weggehaald, deze discord server kun je zien als een vervanging.\nDe community is iets anders dan deze discord server, de regels zijn net wat anders en er zijn andere moderators.\nVoor alle regels, kijk in <#724033499182399649>")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}