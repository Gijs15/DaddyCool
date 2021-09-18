module.exports = {
    name: 'mededeling',
    description: 'Krijg de laatste mededeling',
    execute(client, message, args, Discord) {
        if(!message.member.permissions.has("BAN_MEMBERS")) return;
        let embed = new Discord.MessageEmbed()
      .setTitle("Background patch:")
      .setDescription("**Patch Notes**:\n• Updates players mugshots more often to load in properly\n• Patches GCTF glitch workaround involving Test Track\n• Patches solo dupe glitch involving MOC and Auto Shops")
      .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
        
    let embedd = new Discord.MessageEmbed()
      .setTitle("Rip Adversary modes!")
      .setDescription("According to new article R* posted, modes like Parachuting modes, Target Assault Races, Versus missions and TONS of Adversary Modes are seemingly vaulted or removed from GTAOnline.\n\u200b\nThey will be removed to make space for further updates and improve player matchmaking!\n\u200b\nOnly Adversary Modes available now are:\n• Bunker Modes\n• Deadline\n• Diamond Caisno Modes\n• Hasta La Vista\n• Hunting Pack Remix\n• Missile Base Modes\n• Sumo Remix")
      .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embedd]})
    }
}