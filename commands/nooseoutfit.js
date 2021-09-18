module.exports = {
    name: 'nooseoutfit',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
		.setTitle("**Voorbereidingen:** \nNOOSE text met helm, wees de host.\nNOOSE text zonder helm, wees de 2e persoon die de lobby joined.\nPOLICE text met helmet, wees de 3e persoon die de lobby joined.\nPOLICE text zonder helm, wees de 4e persoon die de lobby joined.")
        .setDescription("**STAPPEN:** \n1) Make sure your character isn’t wearing a saved outfit. For safety I wore only a t-shirt, jeans and shoes - no accessories, hats or glasses.\n2) Start The Big Con heist finale with Gruppe Sechs as the entry disguise and NOOSE as the exit disguise (genius, I know...). Exit and buyer don’t matter since we won’t actually be completing the heist.\nYou **WILL NOT** lose your progress doing this, so no worries.\n3) Proceed as normal until just before you get to the laundry room to change disguises.\n**YOU MUST HAVE REMAINED UNDETECTED**.\n4) When standing next to the disguise, press your contextual button to initiate the disguise change animation. Immediately after that, hold your interaction menu button.\n4.5) If your interaction menu doesn’t appear then quick restart and try again.\n5) Go to Style and then Illuminated Clothing. Cycle between options for 10-15 seconds.\n5.5) (Optional) Close the interaction menu fully then repeat step 5 to make sure the game initiated a cloud save.\n6) After finishing step 5 you need to go to your platform’s dashboard with the game running in the background. Wait exactly 2 minutes before going back into the game.")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embed]})
        
        let embedd = new Discord.MessageEmbed()
        .setDescription("7) Press your continue button on the prompt saying you’ve been kicked for inactivity. You should load back into a public session with the outfit on.\n7.5) If you didn’t spawn with the outfit then try again making sure you followed every step. It took me 2 tries on my first attempt but I’ve helped friends who got it on their first try so don’t panic.\n**Here’s where things may diverge.**\nIf you spawn with just the outfit then you’re good to go and can save it at any clothes store.\nIf you spawn with a parachute over the outfit **OR** can’t access clothing stores because the game thinks you’re wearing a duffle bag then follow these next steps:\n8) Go to the mask store and use any air vehicle to jump out at a high altitude and deploy your chute. Land as close as possible to the rack with the tops on it and enter the clothing menu before the animation for removing the parachute completes.\n9) Save the outfit, exit, save again when the parachute is off and you’re good to go")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embedd]})
    }
}