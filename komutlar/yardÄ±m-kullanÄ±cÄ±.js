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
.setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **${prefix}afk** \n-> Afk olursunuz.
 **${prefix}avatar** \n-> Etiketlediğin kişinin veya botun ya da senin profil fotoğrafını gösterir.
 **${prefix}deprem** \n-> Son 10 günün deprem bilgilerini gösterir.
 **${prefix}corona** \n-> Corona bilgilerini gösterir.
 **${prefix}kullanıcı-bilgi** \n->  İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.
 **${prefix}randompp** \n-> Botun olduğu sunuculardan rasgele birinin pp'ni atar.
 **${prefix}rol-bilgi** \n-> Belirtilen rol hakkında bilgi verir.
 **${prefix}roller** \n-> Sunucudaki tüm rolleri gösterir.
 **${prefix}sonmesaj** \n-> Son mesajınızı gösterir.
 **${prefix}sunucu-resmi** \n-> Sunucu resmini gösterir.
 **${prefix}sunucu-bilgi** \n-> Sunucu hakında bilgi verir.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};