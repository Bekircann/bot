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
.setAuthor(`${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
 **${prefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
 **${prefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
 **${prefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
 **${prefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
 **${prefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
 **${prefix}spam-koruma** \n-> Spam koruma sistemini açar.
 **${prefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.
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
  name: 'koruma-sistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};