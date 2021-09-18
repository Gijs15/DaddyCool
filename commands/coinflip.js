module.exports = {
    name: 'coinflip',
    description: 'Krijg een random coinflip',
    execute(client, message, args, Discord) {
		let random = (Math.floor(Math.random() * Math.floor(2)));
    	if(random === 0) {
      	message.channel.send('Kop!');
    	}
    		else {
      		message.channel.send('Munt!');
    	}
    }
}