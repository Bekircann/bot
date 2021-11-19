const Discord = require ("discord.js");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const egehanss = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}alev** \n-> Alev şeklinde logo yapar.
 **${prefix}arrow** \n-> Ok şeklinde logo yapar.
 **${prefix}basit** \n-> Basit logo yapar.
 **${prefix}bubble** \n-> Bubble şeklinde logo yapar.
 **${prefix}bubble2** \n-> Bubble2 şeklinde logo yapar.
 **${prefix}comic** \n-> Comic şeklinde logo yapar.
 **${prefix}cool** \n-> Cool şeklinde logo yapar.
 **${prefix}discord** \n-> Discord şeklinde logo yapar.
 **${prefix}elmas** \n-> Elmas şeklinde logo yapar.
 **${prefix}gold** \n-> Altın şeklinde logo yapar.
 **${prefix}graffiti** \n-> Graffiti şeklinde logo yapar.
 **${prefix}green** \n-> Yeşil şeklinde logo yapar.
 **${prefix}kalp** \n-> Kalp şeklinde logo yapar.
 **${prefix}kırmızı** \n-> Kırmızı şeklinde logo yapar.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logo-sistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};