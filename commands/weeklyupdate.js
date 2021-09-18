module.exports = {
    name: 'weeklyupdate',
    description: 'wekelijkse gta update',
    execute(client, message, args, Discord) {
        
        if(!message.member.permissions.has("BAN_MEMBERS")) return;
		let embed = new Discord.MessageEmbed()
      	.setTitle(":small_red_triangle_down: Weekly bonus from 16 - 22 Sep :small_red_triangle_down:")
    	.setThumbnail("https://imgur.com/Af6ZCGo.png")
      	.addFields(
       	{ name: "Podium vehicle:", value: "- Principe Lectro" },
       	{ name: "New Content <:nieuw:877913784260374538>:", value: "- Jester RR - Place top 3 in street races for 5 days in a row to Claim Prize Ride" },
       	{ name: "Prize Ride <:prize:877914747494858752>:", value: "- Pfister Growler, Win 8 Sprint races to Claim Prize Ride" },
       	{ name: '**TRIPLE** <:gta_money:872783306087862272> & <:gta_rp:872783100084629584>: ', value: "- Adversary Mode - Hasta La Vist\n- Biker Sell Missions (Weed, Document, Cash)" },
       	{ name: '**DOUBLE** <:gta_money:872783306087862272> & <:gta_rp:872783100084629584>: ', value: "- Bike Races"},
        { name: ":one: :zero: :zero: % off", value: "- All Bicycles"},
        { name: ":five: :one: % off", value:"- Counterfeit Cash Factory, Open Road Businesses\n- Weed Farm, Open Road Businesses\n- Document Forgery Office, Open Road Businesses\n- Supplies, Open Road Businesses "},
       	{ name: ":four: :zero: % off", value: "- Shitzu Hakuchou Drag (GTA$ 585,600)\n- Maxwell Vagrant (GTA$ 1,328,400 / 996,300)\n- Pegassi Vortex (motorcycle)} (GTA$ 213,600)\n- MTL Dune (GTA$ 780,000 / 831,000)\n- All Clubhouses\n- Renovations Clubhouses"},
       	{ name: ':three: :zero: % off:', value: "- Vulcar Warrener HKR (GTA$ 882,000 / 661,500)" },
       	{ name: "Twitch Prime Bonuses <:twitch:872785498022768690>:", value: "- 80% off Vapid Flash GT (GTA$ 335,000)\n- 35% off Obey Tailgater S (GTA$ 971,750 / 728,812.5)"},
       	{ name: 'Time Trial <:gta_timetrial:872785128529727551>: ', value: '[Route 68](https://youtu.be/tYVXew_nE5Y), Par Time of 01:19:00' },
       	{ name: 'RC Bandito Time Trial <:gta_timetrial:872785128529727551>:', value: '[Cypress Flats](https://www.youtube.com/watch?v=gIrzfrG1jKU), Par Time 01:30:00'},
      	)
    	.setColor("#f1c40f")
    	.setFooter('DaddyCoolNL Official Discord Server', 'https://i.imgur.com/Gx49s1V.jpg')
     	 message.channel.send({embeds:[embed]})

        let embed2 = new Discord.MessageEmbed()
        .setTitle("Jester RR - Place top 3 in street races for 5 days in a row to Claim Prize Ride")
        .setImage("https://i.imgur.com/tNEJUrn.png")
        .setColor("#f1c40f")
  		message.channel.send({embeds:[embed2]})
        
        /*
       let embed4 = new Discord.MessageEmbed()
        .setDescription("Ik heb je een pm gestuurd met de huidige Weeklyupdate!")
        .setFooter("Als je pm's hebt uitstaan dan werkt dit niet")
        .setColor("#f1c40f")
  		message.channel.send({embeds:[embed4]})
        */
        
    }
}