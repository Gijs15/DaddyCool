module.exports = {
    name: 'glitchenvoordummies',
    description: 'Krijg basic gta informatie',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setColor("#f1c40f")
        .setTitle("Glitchen voor dummies:")
        .addFields(
        { name: "Alle werkende glitches:", value: "[video](http://tiny.cc/9p8gmz)"},
        { name: "Daily Sell Limit:", value: "Command = `!DailySellLimit`"},
        { name: "Welke auto levert het meeste geld op?", value: "[video](http://tiny.cc/ty8gmz)"},
        { name: "Different targeting mode, inclusief job teleport:", value: "[video](http://tiny.cc/h08gmz)"},
        { name: "Job Teleport (NIEUW):", value: "[video](https://www.youtube.com/watch?v=tWWAb8oUJWo)"},
        { name: "MOC, CEO & Avenger:", value: "[video](https://www.youtube.com/watch?v=lMTfTV9KJ2g&list=PLRqgEsO4U_pz_VB0jTpiN7-TfY0CqbyM2&index=2)"},
        { name: "Dirty Dupes:", value: "[video](https://www.youtube.com/watch?v=PEdjf-3ZZqE&list=PLRqgEsO4U_pz_VB0jTpiN7-TfY0CqbyM2&index=4)"},
        { name: "Anti idle kick glitch:", value: "[video](https://www.youtube.com/watch?v=41zIRAJSNMI&list=PLRqgEsO4U_pz_VB0jTpiN7-TfY0CqbyM2&index=8)"}
        )
        message.channel.send({embeds:[embed]})
    }
}