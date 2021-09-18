module.exports = {
    name: 'gtaracing',
    description: 'Krijg informatie over gta racing',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setTitle("Gta Racing Kanaal")
        .setDescription("Gebruik dit kanaal om andere mensen te vinden waarmee je kunt racen!\nVoor overige GTA zaken moet je gewoon naar <#723940638759845988> / <#850467043429449748> gaan.")
        .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    }
}