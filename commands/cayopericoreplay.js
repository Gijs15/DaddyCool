module.exports = {
    name: 'cayopericoreplay',
    description: 'Krijg uitleg over cayo perico replay glitch',
    execute(client, message, args, Discord) {
    		let embed = new Discord.MessageEmbed()
          	.addFields(
        	{ name: "Cayo Perico Heist Replay Glitch:", value: "Deze is net anders dan de normal heist replay glitches, bij deze moet je namelijk niet meteen je game afsluiten." },
         	{ name: "Stappenplan:", value: "1. Finish de heist zoals je hem normaal ook zou doen.\n2. Zodra je (bijvoorbeeld) met je boot ontsnapt krijg je een cutscene dat je boot wegvaart, hierbij moet je nog steeds **niets doen**.\n3. Hierna krijg je een zwart scherm, ook hier nog **niets** doen.\n4. Zodra de 2e cutscene begint (dus na het zwarte scherm) dan sluit je **zo snel mogelijk je game af.**"},
         	{ name: 'Overige dingen:', value: '- De overige heist members hoeven niets te doen.\n- De host kan na het afsluiten zijn game meteen weer opstarten.\n- De host krijgt **geen** geld, de overige heist members wel.'},
       		)
    		.setColor("#f1c40f")
    		message.channel.send({embeds:[embed]})
    }
}