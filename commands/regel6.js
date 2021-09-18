module.exports = {
    name: 'regel6',
    description: 'Serverregel nummer 6',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Regel 6:")
      	.setDescription("**Als je vragen hebt, stel deze dan in #❓discord-vragen⛔geen-gta⛔. Gelieve ons niet via DM benaderen!**")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}