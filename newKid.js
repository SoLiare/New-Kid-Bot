const Discord = require("discord.js");

const botNewKid  = new Discord.Client();

const TOKEN = "";

const prefix = "!";

botNewKid.on("ready", () => {
    console.log(":neutral_face:");
});

botNewKid.on("message", message => {
    if(message.author.equals(botNewKid.user)) return;
    
    if(message.isMentioned(botNewKid.user)) {
        message.channel.sendMessage(":neutral_face:");
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "reasontolive") {
        message.channel.sendMessage("kyman");
    }

    if(command === "tired") {
        message.channel.sendMessage({files: ["https://media1.giphy.com/media/3M4NpbLCTxBqU/giphy.gif"]});
    }

    if(command === "thanks") {
        message.channel.sendMessage(":slight_smile:");
    }
});

botNewKid.login(TOKEN);