module.exports = {
    name: 'godmode',
    description: 'Krijg informatie over godmode',
    execute(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setColor("#f1c40f")
        .setTitle("Godmode Glitch:")
        .addFields(
        { name: "Playstation Job Links (verschillend):", value: "[1](https://socialclub.rockstargames.com/job/gtav/9C4s_Kl-nUaydp1dkyMRrg) [2](https://socialclub.rockstargames.com/job/gtav/e86OYJscgkuyJFENfoHVjA) [3](https://socialclub.rockstargames.com/job/gtav/7hp5mp1gCEWD41ndFMgERw) [4](https://socialclub.rockstargames.com/job/gtav/PgIlWpT5XEyaq3hKEcxuVA) [5](https://socialclub.rockstargames.com/job/gtav/8OcP0hM2jUekRHChTQWSCA)"},
        { name: "Xbox Job Links (verschillend):", value: "[1](https://socialclub.rockstargames.com/job/gtav/06SsjJ4K_UmPMzob-5eXlQ) [2](https://socialclub.rockstargames.com/job/gtav/AXkd3bvEaUiFexPM8WFdog)"},
        { name: "Steps:", value: "1: Set hide options to show all after bookmarking job and restarting game.\n2: Walk up to yellow circle in penthouse in front of phone.\n3: Walk to the right side of the circle, about half in the circle and half out, wait till you see Press right on the D-Pad to access phone services,.\n4: Press right on the d-pad to go into the phone.\n5: Go down to limousine services and select it twice to go to LSIA.\n6: Wait till your character puts the phone down, count to 3-4 and press right on the D-Pad to enter the job.\nYou’re aiming to press it right before the screen goes black.\nBoom you’re god mode"},
        { name: "Some extra tips:", value: "-If you hit it and you’re outside but you keep falling then coming back up, go to the water behind the race track and swim up it then jump out\n- If you see yourself falling before you see the limo after trying to hit it then you probably didn’t hit it.\n- If you’re completely frozen, you didn’t hit it.\n-	To unfreeze yourself go to the criminal enterprise starter pack, then go to view all properties, click on the last one on the bottom row, then click on the link up the top, wait till it loads then back out and you’ll be unfrozen. you won’t be god mode but now you can re-attempt from inside the same session without having to leave."},
        )
        message.channel.send({embeds:[embed]})
    }
}