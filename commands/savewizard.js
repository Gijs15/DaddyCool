module.exports = {
    name: 'savewizard',
    description: 'Krijg uitleg over savewizard',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Uitleg over Savewizard:")
        .addFields(
        { name: "Algemeen:", value: "Savewizard is een programma die je kunt kopen voor zo’n 55-70 euro. Met dit programma krijg je toegang om modded saves op jouw originele save te zetten, voor gta kun je een zo genaamde peyote save er op zetten. Met deze save heb je toegang tot frozen money. Maar je kunt bijvoorbeeld ook zelf modded autos aanpassen met behulp van save editor, dan krijg je de autos in director mode en dan kan je ze online brengen (rot klus). Je kunt dan zelf kleuren maken en nog veel meer. Je kunt ook modded outfits maken, zoals hele speciale met toffe logos.\n" },
        { name: "Savewizard is niet alleen voor Gta!", value: "Wat veel mensen verkeerd begrijpen is dat savewizard voor meer dan duizenden games en niet alleen voor gta is.\n"},
        { name: "Kan ik iemand op mijn Savewizard laten zodat hij ook frozen money kan doen?", value: "Het antwoord hier op is ja! Dat kan inderdaad, als je savewizard koopt krijg je een key deze zogeheten key is ook de toegang tot je account. Dus als iemand jouw key heeft, dan kan hij jou van je eigen Savewizard aftrappen zodat je hier niet meer in kan.\n"},
        { name: "Kun je ook gebouwen kopen tijdens frozen money?", value: "Het antwoord hierop is: Ja! Dit kan wel alleen slaan ze niet op, dus heeft het weining nut om dit te doen. Het beste is deluxos kopen en verkopen. Houd wel rekening met de Daily Sell Limit!"},
        )
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}