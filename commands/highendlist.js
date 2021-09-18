module.exports = {
    name: 'highendlist',
    description: 'Krijg de lijst met de gta high end vehicles',
    execute(client, message, args, Discord) {
		 let embed = new Discord.MessageEmbed()
        .setTitle("Hieronder staat een lijst met alle High End vehicles op alfabet:")
        .setFooter("- Adder\n- Akuma\n- Banshee\n- Bati\n- Bati2 (RR)\n- Bullet\n- Carbonizzare\n- Cheetah\n- Cogcabrio (Cognoscenti Cabrio)\n- Comet\n- Coquette\n- Double (Double T)\n- EntityXF\n- Exemplar\n- Feltzer\n- Hexer\n- Infernus\n- Jb700\n- Monroe\n- Ninef\n- Ninef2 (Cabrio)\n- Rapid GT\n- Rapid GT (Cabrio)\n- Stinger\n- Stinger2 (Stinger GT)\n- Superd (Super Diamond)\n- Surano\n- Vacca\n- Voltic\n- Z-Type")
        .setColor("#f1c40f")
        .setThumbnail('https://i.imgur.com/Gx49s1V.jpg')
        message.author.send({embeds:[embed]})
        
        let embedd = new Discord.MessageEmbed()
        .setDescription("Ik heb je een een pm gestuurd met een lijst van alle High End Vehicles!")
        .setFooter("als je pm's hebt uitstaan dan word dit bericht niet afgeleverd!")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embedd]})
    }
}