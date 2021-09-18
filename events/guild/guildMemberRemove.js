module.exports = (Discord, client, member) => {
    
  const serverStats = {
  guildID: '723937891939778621',
  totalUsersID: '724002415774400533',
  memberCountID: '724002414058799417',
  botCountID: '724002412519620648',
};
    
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.cache.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.cache.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    
}
