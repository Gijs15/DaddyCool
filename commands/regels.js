module.exports = {
    name: 'regels',
    description: 'Krijg de serverregels',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setDescription("Welkom bij de **DaddyCoolNL Official Discord Server**. Deze server heeft een paar regels om het overzichtelijk en netjes te houden.\nDeze regels kun je vinden in <#724033499182399649>.\nElke regel heeft ook een apart command, regel 1 -- > !regel1")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
    }
}