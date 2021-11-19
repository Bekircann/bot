const Discord = require('discord.js');
exports.run = async(client, message) => {
      const mrk = new Discord.MessageEmbed()
    .setAuthor('Hacının Şalgamı, içen bilir!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824562686100111380/tenor_8.gif`)
    return message.channel.send(mrk);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hacı','hacınınşalgamı'],
  permLevel: 0
};

exports.help = {
  name: 'hacının-şalgamı',
  description: '',
  usage: ''
};