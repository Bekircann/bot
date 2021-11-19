const Discord = require('discord.js');
exports.run = async(client, message) => {
      const mrk = new Discord.MessageEmbed()
    .setAuthor('Sağlık ekipleri yolda!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824564221525360640/PoliticalEmptyCirriped-size_restricted.gif`)
    return message.channel.send(mrk);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara112','112'],
  permLevel: 0
};

exports.help = {
  name: 'ambulans',
  description: '',
  usage: ''
};