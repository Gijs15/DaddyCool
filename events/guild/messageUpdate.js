module.exports = async (Discord, client, oldMessage, newMessage, message) => {
    
   	if (newMessage.guild.id != "723937891939778621")
    return
    
    if (newMessage.author.bot) {
		return;
	}

	if (newMessage.content === oldMessage.content) {
		return;
	}
    
    await Discord.Util.delayFor(900);
        
    const fetchedLogs = await newMessage.guild.fetchAuditLogs({
    limit: 6,
    type: 'MESSAGE_UPDATE'
  }).catch(() => ({
    entries: []
  }));
        
    const auditEntry = fetchedLogs.entries.find(a =>
    a.target.id === newMessage.author.id &&
    a.extra.channel.id === newMessage.channel.id &&
    Date.now() - a.createdTimestamp < 20000
  );
    
    const executor = auditEntry ? auditEntry.executor.tag : 'Bot / Hijzelf';    
	const MessageLog = client.channels.cache.find(x => x.name === "berichten-logs");;
	const embed = new Discord.MessageEmbed()
	.setTitle("Geëdit bericht")
	.addField("Author", newMessage.author.tag)
	.addField("Kanaal", `<#${newMessage.channel.id}>`, true)
	.addField('Oud bericht:', oldMessage.content)
	.addField('Nieuw bericht:', newMessage.content)
	.setFooter(`Bericht ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`)
	.setColor('ORANGE')
	MessageLog.send({embeds:[embed]})
}
