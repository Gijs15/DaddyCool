module.exports = {
    name: 'coloredduffelbags',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("This is how to get colored duffel bags without Husky jobs and without director mode. The steps are the exact same for all bags.")
        .setDescription("Bags die je kunt krijgen:\n- Yellow\n- Vault drills big con Blue\n- Noose outfit big con Camo\n- Infiltration suits Silent and sneaky Jet black\n- Part 2 of Gruppe sechs big con\n1) Select the outfit you want the duffel bag on.\n2) Select one of the listed setups.\n3) Deliver the first Bag as normal.\n4) For the second one parachute into the garage (using a helicopter or an oppressor Mk2).\n5) After that you might lose your helmet to fix this go outside the arcade and reselect your outfit.\n6) Go to any ammunation and purchase the Israel chute bag.\n7) Equip it and make your way over to the mask store.\n8) Parachute in front of the mask store At this point he should take off the parachute and you should have the Duffel bag.\n9) To save it get back in your vehicle.\n10) Parachute into the mask store and spam right dpad.\n11) After crashing you should be inside the mask store menu.\n12) Click X or Square to save it.\n13) Select a different outfit and switch back to your duffel bag")
        message.channel.send({embeds:[embed]})
    }
}