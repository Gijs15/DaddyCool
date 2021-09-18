module.exports = {
    name: 'petergriffin',
    description: 'Krijg informatie over de peter griffin job',
    execute(client, message, args, Discord) {
		let embed = new Discord.MessageEmbed()
      	.setTitle("Peter Griffin:")
    	.setDescription("Peter Griffin is een afk job playlist. Je kunt je console gewoon aanlaten en dan krijg je vanzelf xp.\nZorg er wel voor dat je controller niet uitvalt!")
      	.addFields(
      	{ name: "Job link Ps4:", value: "[Ps4 link](https://socialclub.rockstargames.com/job/gtav/s05CDPtw1kuKUv0KEOdxNQ)"},
      	)
      	.setColor("#f1c40f")
    	message.channel.send({embeds:[embed]})
    }
}