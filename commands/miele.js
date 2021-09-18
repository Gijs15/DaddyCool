module.exports = {
    name: 'miele',
    description: 'miele',
    execute(client, message, args, Discord) {
		const replies = ["https://i.imgur.com/y2yrRjO.png", "https://i.imgur.com/VP3ffhF.png", "https://i.imgur.com/pB4oEoy.png", "https://i.imgur.com/UqYkpU8.png"] 
       	message.replytext = Math.floor((Math.random() * replies.length) + 0); 
     	message.channel.send(replies[message.replytext]); 
    }
}