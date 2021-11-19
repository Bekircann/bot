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
.setAuthor(`${client.user.username} | Yetkili Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}channel-set** \n-> Toplantı kanal ayarlarsınız.
 **${prefix}duyuru** \n-> Duyuru atarsınız.
 **${prefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
 **${prefix}oylama** \n-> Oylama yapar.
 **${prefix}nick** \n-> Kullanıcı isim değiştirme.
 **${prefix}staff-set** \n-> Toplantı rol ayarlarsın.
 **${prefix}sıfırla** \n-> Kanal sıfırlar.
 **${prefix}toplurol ver-al** \n-> Toplu rol alır veya verir.
 **${prefix}toplantı** \n-> Toplantı başlatırsın.
 **${prefix}rolal** \n-> Etiketlediğin kişinin rolünü alır.
 **${prefix}rolver** \n-> Etiketlediğin kişiye rol verir.
  **${prefix}yetkilerim** \n-> Yetkilerini gösterir.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['yetkili'],
    permLevel: 0 
};
  
  exports.help = {
    name: 'yetkili', 
    description: 'Botun Yetkili  Komut Listesini Gösterir!',
    usage: 'yetkili'
};
