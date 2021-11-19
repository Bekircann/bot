const Discord = require('discord.js');
exports.run = async(client, message) => {
      const mrk = new Discord.MessageEmbed()
    .setAuthor('Polis geliyor, kaç!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824564030437588992/yAp9n9.gif`)
    return message.channel.send(mrk);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara155','155'],
  permLevel: 0
};

exports.help = {
  name: 'polis',
  description: '',
  usage: ''
};