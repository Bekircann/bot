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
.setAuthor(`${client.user.username} | Godzilla Cafe Yardım Menüsü`)
 .setDescription(`
 **${prefix}beyazliste** \n-> Beyaz listeye kişi eklersin.
 **${prefix}karalisteliste** \n-> Kara listedeki kullanıcıları gösterir.
 **${prefix}karaliste** \n-> Kara listeye kişi eklersin.
 **${prefix}pingg**\n->  Botun pingini gösterir.
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
  name: 'sağip',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};