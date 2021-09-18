module.exports = {
    name: 'spammij',
    description: 'Laat de bot je volspammen',
    execute(client, message, args, Discord) {
  		const randomfact = require('../data/randomfact.json');
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
       	message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
        message.author.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`)
		
        let embed = new Discord.MessageEmbed()
        .setTitle("Ik heb je 10 (nutteloze) feitjes gestuurd!")
        .setFooter("als je pm's hebt uitstaan dan word dit bericht niet afgeleverd!")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
    }
}