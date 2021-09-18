module.exports = {
    name: 'gtafoto',
    description: 'Krijg een random gta foto',
    execute(client, message, args, Discord) {
		const images = require('../data/gtafoto.json')
        const image = Math.floor(Math.random() * images.length);
        
        let embed = new Discord.MessageEmbed()
      	.setTitle('Hier is je GTA foto!')
    	.setColor("#f1c40f")
      	.setFooter('Mogelijk gemaakt door Gijs#0001')
      	.setImage(String([images[image]]))
    	message.channel.send({embeds:[embed]})
    }
}