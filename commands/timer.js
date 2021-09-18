const ms = require('ms');

module.exports = {
    name: 'timer',
    description: 'zet een timer',
    execute(client, message, args, Discord) {
        
  let Timer = args[0];
  if(isNaN(Timer)) return message.reply("Je moet een geldig getal invoeren")
  if (ms(Timer) > 2147483647) return message.reply("Dit getal is te groot.\nMaximaal getal = `2147483647`")
  if(ms(Timer) < 1) return message.reply("Dit getal is te klein")

  if(!args[0]){
    return message.channel.send(":x: " + "| Voer een tijdsperiode in gevolgd door \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Voer een tijdsperiode in gevolgd door \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer gestart voor: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` De timer is afgelopen!, het duurde: ${ms(ms(Timer), {long: true})}`)
  }, ms(Timer));
    }
}