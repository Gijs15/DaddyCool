module.exports = async (Discord, client, messageDelete) => {

    	await Discord.Util.delayFor(900);
        const fetchedLogs = await messageDelete.guild.fetchAuditLogs({
    limit: 6,
    type: 'MESSAGE_DELETE'
  }).catch(() => ({
    entries: []
  }));
         
    const auditEntry = fetchedLogs.entries.find(a =>
    a.target.id === messageDelete.author.id &&
    a.extra.channel.id === messageDelete.channel.id &&
    Date.now() - a.createdTimestamp < 20000
  );
         
    const executor = auditEntry ? auditEntry.executor.tag : 'Een Bot / Hijzelf';
    const DeleteEmbed = new Discord.MessageEmbed()
    .setTitle("Verwijderd Bericht")
    .setColor("#fc3c3c")
    .addField("Author", messageDelete.author.tag, true)
    .addField("Verwijderd door", executor, true)
    .addField("Kanaal", `<#${messageDelete.channel.id}>`, true)
    .addField("Bericht", messageDelete.content || "Foto / Embed")
    .setFooter(`Bericht ID: <#${messageDelete.channel.id}> | Author ID: ${messageDelete.author.id}`)
         
  	const DeleteChannel = messageDelete.guild.channels.cache.find(x => x.name === "berichten-logs");
  	DeleteChannel.send({embeds:[DeleteEmbed]});
}
