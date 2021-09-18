module.exports = {
    name: 'customkenteken',
    description: 'Krijg uitleg over custom kenteken',
    execute(client, message, args, Discord) {
    	let embed = new Discord.MessageEmbed()
      	.setTitle("Uitleg over hoe je een custom kenteken kunt krijgen:")
      	.setDescription("Je moet de ifruit app gebruiken via je apple/android toestel > Registreer account > Ga naar LSC tab > ga naar kentekenplaten > Meestal de eerste die je maakt en opslaat doet het niet, en zal onderaan opslaan met kleine prullenbak label erop. > Maak een andere en deze zal een kleine V -> ernaast hebben > Ga naar garage en zoek de auto waaraan je de custom plate wilt toevoegen > Ga naar ls customs > Kies je kenteken")
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}