module.exports = {
    name: 'doneer',
    description: 'Krijg de doneer linkjes',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Paypal:")
      .setDescription("https://streamlabs.com/daddycoolnl")
      .setColor("048dd4")
    message.channel.send({embeds:[embed]})
    
    let embedd = new Discord.MessageEmbed()
      .setTitle("Ideal:")
      .setDescription("http://tiny.cc/ytktmz")
      .setColor("cc0066")
    message.channel.send({embeds:[embedd]})
    }
}