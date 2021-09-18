module.exports = {
    name: 'helpgta',
    description: 'help gta',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help gta:")
    .setDescription("**Commands:**\n`Godmode`, `GlitchenVoorDummies`, `Blacklist`, `Blacklistlist`, `HighEnd`, `HighEndList`, `DailySellLimit`, `Petergriffin`, `WerkendeGlitches`, `BesteAuto`, `JobTeleport`, `Uitlegmods`, `Customkenteken`, `Savewizard`, `CayoPericoReplay`, `GlitchVeilig`, `TireSmokeGlitch`, `DirtyDupe`, `WekelijkseUpdate`")
    .setColor("#f1c40f")
    .setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
    message.channel.send({embeds:[embed]})
    }
}