const fs = require("fs");
const ms = require("ms")

module.exports = {
    name: 'name',
    description: 'rename iemand',
    execute(client, message, args, Discord, customisation) {
		let newname = args.slice(1).join(' ');
  		let user;
  		let mention = message.mentions.users.first();
  	if (!mention){
    user = message.guild.members.cache.get(args[0])
    if (!user) return message.reply('Je moet iemand taggen of een UserID gebruiken!').catch(console.error);
  }else{
    user = message.guild.members.cache.get(mention)
  }
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send("Done.");
    }
}