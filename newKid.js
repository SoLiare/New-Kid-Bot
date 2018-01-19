const Discord = require("discord.js");

const botNewKid  = new Discord.Client();

const TOKEN = "Mzk3NDAzNTIzNTA1MDYxODg5.DSwqbQ.Q5MNmQlUJ1zV2dN-iPCd2CTBF9M";

botNewKid.on("ready", () => {
    console.log(":neutral_face:");
});

botNewKid.on("message", message => {
    if(message.author.equals(botNewKid.user)) return;
    else {
        if(message.isMentioned(botNewKid.user)) {
            message.channel.sendMessage(":neutral_face:");
        }
    }
});

botNewKid.login(TOKEN);