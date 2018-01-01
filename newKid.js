const Discord = required('discord.js');
const botNewKid  = new Discord.Client();

botNewKid.on('ready', () => {
    console.log(':neutral_face:');
});

botNewKid.on('message', message => {
    if(message.content === 'Hi @New Kid'){
        message.reply(':slight_smile:');
    }
})