const superagent = require('superagent')

module.exports = {
    name: 'kat',
    description: 'Krijg een foto van een kat',
    async execute(client, message, args, Discord) {
        
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#f1c40f")
    .setTitle("Hier is je kat!")
    .setFooter("Het kan soms gebeuren dat er geen foto komt, als dit gebeurt moet je het command gewoon nog een keer typen")
    .setImage(body.file) 
    message.channel.send({embeds:[embed]})
    }
}