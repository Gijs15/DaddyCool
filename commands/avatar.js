module.exports = {
    name: 'avatar',
    description: 'Krijg de avatar',
    async execute(client, message, args, Discord) {
        
	let msg = await message.channel.send("Generating avatar...");
  	let target = message.mentions.users.first() || message.author;

  	await message.channel.send({files: [
    {
      attachment: target.displayAvatarURL(),
      name: "avatar.png"
    }
  ]});

  msg.delete();
    }
}
