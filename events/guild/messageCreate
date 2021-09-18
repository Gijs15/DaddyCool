module.exports = (Discord, client, message) => {
    
        
    // Messages die geen commands zijn:
    //    
    // Altijd verwijderen:
    //
    
    const words = message.content.toLowerCase().split(' ');
    if(words.includes('channel.') || words.includes('disabled.')) {
    	 message.delete()
    }
    
    //
    // Reageren op berichten:
    //
    
    if(words.includes('mogguh') || words.includes('mogguh!') || words.includes('mogge') || words.includes('mogge!')) {
        if (message.author.bot) return;
    message.channel.send("Mogguh! :wave:")
    }
    
    if(words.includes('gepatched') || words.includes('gepatcht') || words.includes('gepatchet') || words.includes('gepatchd') || words.includes('gepatch') || words.includes('patched') || words.includes('patcht')) {
        if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setDescription("Gepatched is hij Gepatched? Dit soort vragen verdienen eigenlijk geen antwoord, als je mijn kanaal kent dan weet je dat ik altijd Gepatched in de titel van mijn video vermeld als een Glitch het niet meer doet. Sterker nog ik haal hem zelfs uit mijn playlist met werkende glitches die zich op mijn kanaal bevindt. Dus nu de vraag aan jou: staat er Gepatched in de titel of niet? :smile:")
    .setColor("#f1c40f")
    .setFooter("I am a bot and this action was performed automatically")
    message.channel.send({embeds:[embed]})
  	}
    
    if(words.includes('traden') || words.includes('trade') || words.includes('trade?') || words.includes('traden?')) {
        if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setTitle("Regel 5:")
    .setDescription("**Traden is verboden op onze server, want als je niet trade kun je ook niet gescammed worden...:wink: Jullie mogen wel geven ontvangen of ruilen. Maar Traden is verboden!**")
    .setColor("YELLOW")
    .setFooter("I am a bot and this action was performed automatically")
    message.author.send({embeds:[embed]})
    }
    
    if(words.includes('gescammed') || words.includes('gescamt') || words.includes('scammer') || words.includes('scammed')) {
        if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setDescription("Als je gescammed bent dan kunnen / gaan wij er helaas niets aan doen. Het is al vaak vermeld dat het compleet eigen risico is. Staffleden zullen er niets aan doen.")
    .setColor("#f1c40f")
    .setFooter("I am a bot and this action was performed automatically")
    message.channel.send({embeds:[embed]})
  }
    
    if(message.content.toLowerCase() === "<:gevuldekoek:874423535311945778>") {
        if (message.author.bot) return;
  	message.channel.send('<:gevuldekoek:874423535311945778>')
	}
        
    if(message.content.toLowerCase() === "issi") {
        if (message.author.bot) return;
    message.delete()
  	message.channel.send('<:issi:728525630811144242>')
    }  
    
    if(words.includes('joe')) {
        if (message.author.bot) return;
    message.channel.send(":wave:")
  	}
    
    if(words.includes('<:hond:850796823207608350>')) {
    if (message.author.bot) return;
    message.channel.send("<:hond:850796823207608350>")
  	}
    
    //
    // Foto + Video kanalen tekst verwijderen:
    //
    
    if (message.channel.id === "878258899701088267" || message.channel.id === "734756847638020116" || message.channel.id === "728928815249883146" || message.channel.id === "796453832354824221") {
    if (message.attachments.size <= 0) {
    message.delete();
    message.author.send("Het kanaal waar je zojuist in probeerde te typen, staat ingesteld op alleen-foto's, dit houdt in dat alle tekst in dat kanaal automatisch wordt verwijderd.")
    }
    }
    
    //
    // Reageren met emoji als er iets wordt geplaatst in het kanaal:
    //
    
    if (message.channel.id === "796453832354824221") {
    message.react('😂');
    }
    if (message.channel.id === "744297089076428951" || message.channel.id === "878258899701088267" || message.channel.id === "734756847638020116" || message.channel.id === "728928815249883146" || message.channel.id === "803653217308246077") {
    message.react('👍');
    }
    
    const prefix = '!';
    if(!message.content.startsWith(prefix)) return;
    
    
    //
    // Handler:
    //
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);
    if(command) command.execute(client, message, args, Discord);
}
