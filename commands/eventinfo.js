module.exports = {
    name: 'eventinfo',
    description: 'Krijg de api latency',
    execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .addFields(
      { name: "Informatie Gta-events hosten:", value: "- In dit kanaal worden Gta events georganiseerd!\n- De events worden georganiseerd door de leden van deze discord server, jij kunt dus ook een event hosten!"},
      { name: "Informatie die wij nodig hebben als jij een event wilt hosten:", value: "- De datum\n- De tijd\n- Het thema\n- Je psn"},
      { name: "Als je een event wilt hosten kun je een stafflid een pm sturen.", value: "**Die t je dan verder!**"}
      )
      .setColor("#f1c40f")
    message.channel.send({embeds:[embed]})
    }
}