module.exports = {
    name: 'dailyselllimit',
    description: 'Krijg informatie over de gta daily sell limit',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setTitle("Uitleg over de Daily Sell Limit:")
		.addFields(
        { name: "Aanbevolen auto verkoop patroon:", value: "***Safe:***\n - 2 auto's per 2 uur in het echt\n- 8 auto's per 30 uur in het echt\n***Unsafe:***\n- 3 auto's binnen 2 uur in het echt\n- Meer dan 8 auto's per 30 uur in het echt"},
        { name: "Hoe de daily sell limit werkt:", value: "De Daily Sell Limit is een systeem van Rockstar om de verkoop van het aantal Personal Vehicles te limiteren. Deze limiet werkt door het bijhouden van statistieken, deze statistieken worden elke keer dat jij een mod shop bezoekt opnieuw opgevraagd. Sommige statistieken zijn:\n- Op welke tijd auto's zijn verkocht\n- Het totaal aantal auto's verkocht in een bepaalde tijd\n- Het Player Exploit Level"},
        { name: "Daily Sell Limit Bericht:", value: "Als je de Daily Sell Limit hebt dan krijg je een [melding](https://i.imgur.com/WDUDguV.png) als je in de Los Santos Customs bent"},
        { name: "Hoe auto's worden ingedeeld:", value: "***Gekochte auto:***\n- Elke auto waar je voor hebt betaald via een website\n- Een duplicatie hiervan\n- Kan verkocht worden zonder wachttijd bij Los Santos Customs\n***Gestolen auto:***\n- Elke auto die je van de straat hebt gehaald zonder ervoor te betalen\n- Een duplicatie hiervan\n- 48 minuten wachttijd bij het verkopen hiervan\n- Telt niet voor de Daily Sell Limit\n***Personal Vehicle:***\n- Elke auto waarop een tracker zit of die opgeslagen is in een garage\n- De verkoop telt voor de Daily Sell Limit\n- Bij het customizen van een auto bij Benny's naar een custom variant word er meteen een tracker op geplaatst."},
        { name: "Exploit Levels:", value: "Op [deze foto](https://i.imgur.com/MHutw7g.png) zijn alle exploit levels te zien.\nUitleg van de foto:\nNO LEVEL <------------> 100 (due to tresholds it is 30 or 40)\n dit betekend dat je bij dit level maximaal 100 auto's *kunt* verkopen, maar je moet onder 30 of 40 blijven."}
        )
        .setColor("#f1c40f")
        .setThumbnail('https://i.imgur.com/Gx49s1V.jpg')
        message.author.send({embeds:[embed]})
        
		let embedd = new Discord.MessageEmbed()
    	.addFields(
    	{ name: "Dupe Detect:", value: "- Dupe Detect tracks de laatste 30 auto's die je hebt gebruikt\n- Als een auto met een custom kenteken als dupe is gedetecteerd, word het hele kenteken als dupe gemarkeerd\n- Je krijgt de Daily Sell Limit message nadat de 2e dupe is gedetecteerd, de Daily Sell Limit is dan 1 auto per 30 uur\n- Dupe detect is voor elk karakter anders (1e en 2e karakter)\n- Als je al een hoge Exploit level hebt, dan zorgt dupe detect ervoor dat de prijs van elke auto sale omlaag gaat. Dit kan gaan totdat de waarde maar 2% is\n- Je kunt uit dupe detect komen door alle dupe detected auto's weg te doen\n- Tijdelijk stoppen met dupen"},
    	{ name: "Overig:", value: "- Als je  perongeluk 3 auto's in 2 uur verkoopt, stop dan 30 uur met het verkopen van auto's\n- Cap Recovery is de tijd die je moet doorbrengen voordat je Exploit level omlaag gaat, in deze tijd mag je geen auto's verkopen\n- Momenteel is de Cap Recovery tijd 60 uur"},
    	)
    	.setColor("#f1c40f")
    	message.author.send({embeds:[embedd]})
        
        let embeddd = new Discord.MessageEmbed()
        .setDescription("Ik heb je een pm gestuurd met alle informatie over de Daily Sell Limit!")
        .setFooter("als je pm's hebt uitstaan dan word dit bericht niet afgeleverd!")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embeddd]})
    }
}