const Discord = require('discord.js');
exports.run = async(client, message) => {
      const mrk = new Discord.MessageEmbed()
    .setAuthor('İtfaiye ekipleri yolda!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824562972214951957/tenor_9.gif`)
    return message.channel.send(mrk);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara110','110'],
  permLevel: 0
};

exports.help = {
  name: 'itfaiye',
  description: '',
  usage: ''
};