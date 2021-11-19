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
 **${prefix}çekiliş-yap** \n-> Çekiliş başlatır.
 **${prefix}reroll** \n-> Çekilişi yeniden çeker.
 **${prefix}çekiliş-bitir** \n-> Çekilişi bitirir.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['çekiliş-yardım'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'çekiliş-yardım', 
    description: 'Botun Çekiliş Komut Listesini Gösterir!',
    usage: 'çekiliş'
};