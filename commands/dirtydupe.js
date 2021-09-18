module.exports = {
    name: 'dirtydupe',
    description: 'Krijg de ping van de bot',
    execute(client, message, args, Discord) {
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Dirty Dupes")
        .addFields(
        { name: "Korte uitleg:", value: "**Verkoop nooit dirty dupes!**\nEen dirty dupe is een dupe waarbij de auto die je geduped hebt, het zelfde kenteken heeft als de auto die je gebruikt hebt om te dupen. Dit betekent dus dat er dan meerdere auto's zijn met hetzelfde kenteken, en als je dan een van deze auto's probeert te verkopen. Dan heeft Rockstar het al enorm snel in de gaten dat het een dupe is.\n Als je een dirty dupe toch verkoopt, dan kun je een Single Vehicle Sell Limit krijgen. Dit kun je tijdelijk krijgen of tot 9 maanden, dat ligt aan je exploit level (meer informatie over exploit level vind je met !dsl). Elke keer dat je de Daily Limit aantikt, dan stijgt je expoit level met 2, totdat je een RepeatCapOffender bent. "},
        { name: "Attempt to Clean your Dupes through iFruit", value: "- Attempt to Place customized license plate order on iFruit first if you think you may be undetected still.\n- Do not sell the vehicle in LSC until you have a Cusomized Plate on it or a unique generic plate (different than any other car in your inventory)\n- I would keep a good assortment of plates (just in case they are looking for x number of a certain vehicle hash in inventory) You are allowed up to 30 plates.\n- You can start building up a stock of plates on legit vehicles in the event that we find an iFruit bypass.\n- **When using ifruit: Do not overwrite or delete plates currently equipped on any vehicles. This will cause a false positive and restrict the plate options for any vehicles that have the deleted plate installed.**"}
            )
        .setColor("#f1c40f")
        message.author.send({embeds:[embed]})
          
        let embedd = new Discord.MessageEmbed()
        .addFields(
        { name: "Recommended Reduping Steps (Clean your Dirty's)", value: "1. Have at least 1 custom plate through iFruit.\n 2. Take a known dupe without a Custom plate and drive it around. Pull up iFruit again and check if the custom plate option is available. If available, make a purchase and process the order. You must wait until you receive a notification on your phone before the order can be fufilled at LSC.\n 3. If you have tried everything and a custom plate is not available. I would store this vehicle in a specific spot/garage that you can remember. ex Ceo Garage 3 level 3\n 4. When you've gone through all of your inventory, sell 6 or 7 of the vehicles you successfully changed the plate on. Don't forget about the Daily Limit.\n 5. Use a current duplication glitch found in the glitches section. I would start buying Elegy RH8's to replace the previous non-custom plate cars from step 3. Then do the duplication."}
        )
        .setColor("#f1c40f")
        message.author.send({embeds:[embedd]})
        
        let embeddd = new Discord.MessageEmbed()
        .setDescription("Ik heb je een pm gestuurd met informatie over Dirty Dupes!")
        .setFooter("als je pm's hebt uitstaan dan word dit bericht niet afgeleverd!")
        .setColor("#f1c40f")
        message.channel.send({embeds:[embeddd]})
    }
}