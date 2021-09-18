module.exports = {
    name: 'verschilruilentraden',
    description: 'Verstuurd het verschil tussen ruilen en traden',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Verschil tussen ruilen & traden")
      .setDescription("Even een algehele mededeling/uitleg.  Voor zowel de oude members als alle nieuwe die gaan komen van de community op ps4. Bij ons in de <#724033499182399649> staat dat traden verboden is. Dit om de volgende simpele reden.\nMensen die traden met onbekenden komen er regelmatig achter dat ze genaaid zijn. Het werd voor ons een dagtaak om klagende mensen over zgn scammers te woord te staan. Wij hebben echter ook gewoon een leven, en willen dat graag zo houden. Dus als jullie auto's willen ruilen, alleen weggeven of alleen ontvangen dan is dat helemaal prima. Maar kom aub nooit aan met dat je gescamt bent. Niemand is namelijk verplicht om iets terug te geven. Hopelijk is het zo duidelijk wat er bedoeld wordt met niet traden. Wens iedereen veel plezier met het weggeven van hun auto's!")
      .setFooter("Gestuurd in Mededelingen door een beheerder")
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}