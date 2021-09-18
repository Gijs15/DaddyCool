module.exports = {
    name: 'invisibletorso',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Invisible Torso (GEPATCHED):")
        .setDescription("1. Equip no top and select the peach plate carrier then save the outfit.\n2. Equip the heist coverall outfit with the chemical gas mask and do the telescope glitch to transfer to the mask onto the outfit you just saved then save the outfit.\n3. Select the outfit through the interaction menu and start titan of a job.\n4. In ammu-nation go to the gear table and equip an earpiece then go the vending machine and buy a soda.\n5. Change the shoe on the outfit and save the outfit then equip the heist coverall outfit with the chemical gas mask and do the telescope glitch at the beach to transfer to the mask onto the outfit.\n6. Go back to ammu-nation and save the outfit then pull up the phone and leave the job.\n7. In freemode select the outfit and start titan on a job.\n8. You should now have a fully invisible torso now save it in ammu-nation then leave the job through your phone.\n9. Select the outfit in freemode and you will now have a fully invisible torso")
        message.channel.send({embeds:[embed]})
    }
}