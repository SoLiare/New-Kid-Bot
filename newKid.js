const Discord = require('discord.js');
const botNewKid  = new Discord.Client();

botNewKid.on('ready', () => {
    console.log(':neutral_face:');
});

botNewKid.on('message', message => {
    if(message.content === 'Hi'){
        message.reply(':slight_smile:');
    }
});

botNewKid.login('Mzk3NDAzNTIzNTA1MDYxODg5.DSwqbQ.Q5MNmQlUJ1zV2dN-iPCd2CTBF9M');