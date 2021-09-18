module.exports = {
    name: 'yellowrebreather',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setTitle("How to get the Yellow Rebreather:")
        .addFields(
        { name: "Stappen 1 t/m 7:", value: "1) You (or a friend) has to have the bugstars big con approach for the diamond casino heist ready.\n1.5) It doesn't matter what settings you have on the heist.\n2) On the outfit selection screen select they yellow rebreather.\n3) Ready up and when you spawn outside the arcade open the interaction menu (If it doesn't open throw gas at your feet until you die and quick restart).\n4) Go to Style > illuminated clothing and hold right dpad for 20-30 seconds.\n5) Scroll up to Auto show aircraft helmet and spam rightdpad for 20-30 seconds.\n6) Scroll back down to Illuminated clothing this time hold it for 30-40 seconds.\n7) Once finished DO NOT close the interaction menu but wait to be kicked.\nTip for 7) If you go to your home page you get kicked faster." },
    )
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
        
        let embedd = new Discord.MessageEmbed()
        .setColor("#f1c40f")
        .setDescription("8) After you get kicked accept the alert and 2 things can happen:\n[1] You load in with the outfit Perfect! Save it and you're good to go\n[2] You load into story mode, that is also perfect. Start an invite only session and save the outfit.\nOptional 9) To transfer it onto other outfits select the outfit you just saved. Do the telescope glitch and select the outfit you want it on.")
        .addFields(
        { name: "Reasons why you might not have it:", value: "1) Your friend got kicked before you. So tell your friend to move around\n2)	You closed the interaction menu.\n3) You didn't hold the options long enough)"},
        )
        message.channel.send({embeds:[embedd]})
    }
}