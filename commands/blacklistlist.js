module.exports = {
    name: 'blacklistlist',
    description: 'Krijg de gta blacklist list',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
        .setTitle("Hieronder staat de lijst van alle blacklisted auto's op alfabet")
        .setFooter("- Airbus\n- Airtug\n- Ambulance\n- Asea2 (Snowy)\n- Avenger\n- Avenger2 (Facility cutscene version)\n- Avisa\n- Bandito (RC)\n- Barracks\n- Barracks2 (Semi)\n- Barracks3 (Heist version)\n- Benson\n- Biff\n- Blimp (Atomic)\n- Blimp2 (Xero)\n- Blimp3 (Nightclub advertisement / Pegasus version)\n- Boxville (Water & Power)\n- Boxville2 (GoPostal)\n- Boxville3 (Humane Labs)\n- Boxville4 (Post-OP)\n- Brickade\n- Bulldozer\n- Burrito (Water & Power / Sprunk)\n- Burrito3 (Civilian)\n- Burrito4 (McGill Olsen / Atomic)\n- Burrito5 (Snowy)\n- Bus\n- Buzzard2 (Unarmed)\n- Caddy (Golf)\n- Caddy2 (Rusty)\n- Camper\n- Cargobob3 (Trevor's)\n- Cargobob4 (Covered. Shows up in 'Motor Wars' ADV Mode)\n- Cargoplane\n- Coach (Dashound)\n- Crusader\n- Cutter\n- Dilettante2 (Merryweather Security)\n- Dinghy\n- Dinghy2 (2-seater)\n- Dinghy3 (Heist)\n- Dinghy4 (Yacht)\n- Dinghy5 (Weaponized)\n- Docktug\n- Dump\n- Dune2 (Space Docker)\n- Dune4 (Ramp Buggy with Spoiler)\n- Emperor3 (Snowy)\n- Fbi (FIB Buffalo)\n- Fbi2 (FIB Granger)\n- Firetruck\n- Fixter\n- Flatbed\n- Forklift\n- Frogger2 (FIB / Trevor's)\n- Gburrito (Lost Burrito)\n- Handler\n- Hauler\n- Hauler2 (MOC variant)\n- Insurgent (Pick-Up)\n- Jet (747 Passenger Jet)\n- Jetmax\n- Journey\n- Kraken\n- Kosatka\n- Limo2 (Turreted Limo)\n- Longfin\n- Marquis\n- Mesa2 (Snowy)\n- Mixer\n- Mixer2\n- Monster (The Liberator)\n- Monster2 (Marshall)\n- Mower\n- Mule\n- Mule2 (Ramp, Single Player Heist)\n- Mule3 (Heists Mule)\n- Packer\n- Patrolboat (Weaponized Patrol Boat)\n- Prison Bus\n- Phantom\n- Phantom3 (MOC variant)\n- Police (Police Stanier)\n- Police2 (Police Buffalo)\n- Police3 (Police Interceptor)\n- Police4 (Unmarked Police Stanier)\n- Police Bike\n- Policeoldl (North Yankton Police Rancher XL)\n- Policeold2 (North Yankton Police Esperanto)\n- Police Transporter")
        .setColor("#f1c40f")
        .setThumbnail('https://i.imgur.com/Gx49s1V.jpg')
        message.author.send({embeds:[embed]})
        
        let embedd = new Discord.MessageEmbed()
        .setColor("#f1c40f")
        .setFooter("- Polmav (Police Maverick / Air Ambulance)\n- Pony\n- Pony2 (Smoke On the Water)\n- Pounder\n- Pranger (Park Ranger)\n- Predator (Police)\n- Rancherx12 (Snowy)\n- Rentalbus\n- Rhino (Tank)\n- Riot\n- Ripley\n- Rubble\n- Ruiner3 (The Rusty Ruiner 2000)\n- Rumpo2 (Deludamol)\n- Sadler2 (Snowy)\n- Scrap Truck\n- Seashark\n- Seashark2 (Lifeguard)\n- Seashark3 (Yacht)\n- Sheriff (Sheriff Stanier)\n- Sheriff2 (Sheriff SUV)\n- Skylift\n- Sparrow2 (Active Moon Pool vehicle)\n- Sparrow3 (Stored Moon Pool vehicle, folded propellers)\n- Speeder\n- Speeder2 (Yacht)\n- Squalo\n- Stockade\n- Stockade3 (Snowy Bobcat Security)\n- Stretch Limousine\n- Submersible\n- Suntrap\n- Taco Van\n- Taxi\n- Technical (Pegasus version)\n- Tiptruck (Tipper)\n- Tiptruck2\n- Toro\n- Toro2 (Yacht)\n- Tourbus\n- Towtruck (Large)\n- Towtruck2 (Small)\n- Tractor (The old rusty one)\n- Tractor2 (Farm)\n- Tractor3 (Snowy Farm)\n- Trash (Trashmaster)\n- Trash2 (Heist Trashmaster, Series A - Trash Truck)\n- Tropic\n- Tropic2 (Yacht)\n- Tug\n- Utillitruck (Cherry Picker)\n- Utillitruck2 (Utility Stockade)\n- Utillitruck3 (MOD.0, explosiveless Valkyrie)\n- Vetir\n---------------------------------------------------------------------------------------------------------------------------")
        message.author.send({embeds:[embedd]})
        
        let embeddd = new Discord.MessageEmbed()
        .setDescription("Ik heb je een pm gestuurd met een lijst van alle blacklisted auto's!")
        .setFooter("als je pm's hebt uitstaan dan word dit bericht niet afgeleverd!")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embeddd]})
    }
}