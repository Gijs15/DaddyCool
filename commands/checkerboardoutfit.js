module.exports = {
    name: 'checkerboardoutfit',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Glitch waarmee je de Checkerboard Outfit kunt krijgen:")
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setDescription("1. Load in as your main character and go to an ammunation (select the outfit you want to keep)\n2. Purchase an earpiece\n3. Swap characters (Make sure your second character is a female)\n4. When you load in as your second character go to any clothing store\n5. Purchase the following items:\n6. Pants- Jeans and buy number 38\n7. Tops- Scroll down to no. 38 and buy no. 22\n8. Accesories- Gloves and buy number 4\n**Remove any other accesories**\n9. Shoes- Scroll down to number 13 and buy number 43\n10. Hats- Scroll down to number 2 and buy number 78\n11. Save the outfit (name it something memorable like hjsdgueh) and take The Easy Way Out\n12. Go to creator and create a land race\n13. After testing it go to choose character and delete your second character\n14. Load into story mode and then into an invite only session\n15. Save the outfit that you have equipped\n16. Start the Rockstar Created Versus called Crooked Cop\n17. Make sure the clothing style is set to owned\n18. Select your outfit hjsdgueh and wait for the job to start\n19. Go to Style > Accesories > Gear and left dpad once to get the earpiece\n20. Quit the job and save the outfit :smile:")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
    }
}