const Discord = require('discord.js');
exports.run = async(client, message) => {
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mükemmel dans ediyorsun!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/893195701763309608/893865406211707000/5d78ced645d2a023a0d38cf4.webp`)
    return message.channel.send(vatan);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dans','danset'],
  permLevel: 0
};

exports.help = {
  name: 'dans-et',
  description: '',
  usage: ''
};