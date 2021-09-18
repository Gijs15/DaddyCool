module.exports = {
    name: 'tanjoggers',
    description: 'Kledingglitch',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/Gx49s1V.jpg")
        .setColor("#f1c40f")
        .setTitle("Tan Joggers:")
        .setDescription("1) Go to the clothing store closest to Legion Square.\n2) Set your spawn location to last location.\n3) Register as a CEO and select the outfit style as 'Warlord'.\n4) Start up the Rockstar Created Survival called 'Legion Square Survival'.\n5) Run over to the clothing store but be quick.\n6) Throw two Sticky Bombs onto the door and quit through the phone.\n7) You will either spawn in as your own outfit if so skip to 9).\n8) If you spawn in as the Warlord keep switching sessions until you're your own outfit.\n9) Run into the store and to the cashier and click right dpad so the clothes menu shows up.\n10) You will get kicked off it.\n11) Retire as a CEO and save the outfit")
        message.channel.send({embeds:[embed]})
    }
}