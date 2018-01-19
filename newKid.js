const Discord = require("discord.js");

const botNewKid  = new Discord.Client();

const TOKEN = "token";

botNewKid.on("ready", () => {
    console.log(":neutral_face:");
});

botNewKid.on("message", message => {
    if(message.author.equals(botNewKid.user)) return;
    
    if(message.isMentioned(botNewKid.user)) {
        message.channel.sendMessage(":neutral_face:");
    }
});

botNewKid.login(TOKEN);