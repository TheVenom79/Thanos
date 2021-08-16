//hello
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on ('message', message => {
    if (message.content.startsWith(`${prefix}spam `)) {
        for (let i = 0; i < 5; i++) {
        message.channel.send(`oof`);
        }
    } 
    if (message.content === `${prefix}hello`) {
        message.channel.send('Jai hind dosto.');
    } else if (message.content.includes (`${prefix}rank`)) {
        message.channel.send('tujha aai cha.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (message.content === `${prefix}bot`) {
        message.send('Thats my name')
    }else if (message.content.includes(`ello`)) {
        return message.reply('nikal idhar se')
    }else if (message.content.includes(`lol`)) {
        return message.reply('abbe kitni baar bolu lal hai')
    }else if (message.content.includes(`hanos`)) {
        return message.reply('I AM INEVITABLE')
    }else if (message.content === `yo`) {
        return message.reply('nikal idhar se')
    }else if (message.content === `yoyo`) {
        return message.reply('nikal idhar se')
    }else if (message.content === `hi`) {
        return message.reply('nikal idhar se')
    }else if (message.content === `${prefix}rickroll`) {
        return message.channel.send('https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983')
    }else if (message.content.includes(`GM`)) {
        return message.reply('Jaake dhoop sek')
    }else if (message.content.includes(`gm`)) {
        return message.reply('Jaake dhoop sek')
    }else if (message.content.includes(`Gm`)) {
        return message.reply('Jaake dhoop sek');  
    }});
    
client.login(token)