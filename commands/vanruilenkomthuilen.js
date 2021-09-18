module.exports = {
    name: 'vanruilenkomthuilen',
    description: 'van ruilen komt huilen waarschuwing',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Waarschuwing!")
      	.setDescription("Als je wilt ruilen dan mag dat op deze server, echter als je dan toch gescammed word is het niet aan ons om daar iets mee te doen. Je doet het op je eigen risico! Maar als jij iemand scammed, dan is de kans zeer klein dat iemand anders nog met jou wilt ruilen :wink:.")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}