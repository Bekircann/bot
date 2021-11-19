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
.setAuthor(`${client.user.username} | Moderasyon Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}mod-log #kanal** \n-> Mod-log ayarlar.
 **${prefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
 **${prefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
 **${prefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
 **${prefix}unban @kullanıcı** \n-> Etketlediğiniz kullanıcının banını açar.
 **${prefix}ban sebep ID** \n-> Belirtiğiniz ıd deki  kullanıcının neden banlandığını gösterir.
 **${prefix}küfürengel** \n-> Küfür engel açar/kapatır.
 **${prefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
 **${prefix}reklamengel** \n-> Reklam engel açar/kapatır.
 **${prefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
 **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
**${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
 **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['mod','moderasyon'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Botun Moderasyon Komut Listesini Gösterir!',
    usage: 'moderasyon'
};
