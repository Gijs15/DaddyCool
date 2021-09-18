const superagent = require('superagent')

module.exports = {
    name: 'hond',
    description: 'Krijg een foto van een hond',
    async execute(client, message, args, Discord) {
		
    const { body } = await superagent
    .get("http://random.dog/woof.json");

    const embed = new Discord.MessageEmbed()
    .setColor("#f1c40f")
    .setTitle("Hier is je hond!")
    .setFooter("Het kan soms gebeuren dat er geen foto komt, als dit gebeurt moet je het command gewoon nog een keer typen")
    .setImage(body.url)
    message.channel.send({embeds:[embed]})
   // message.channel.send({embed})
    }
}