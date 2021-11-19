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
.setAuthor(`${client.user.username} | Bot Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}botbilgi** \n-> Botun bilgilerini gösterir.
 **${prefix}bug-bildir** \n-> Bota bug varsa onu bildirirsiniz.
 **${prefix}davet** \n-> Botun davet linkini atar.
 **${prefix}medya** \n-> Bot yapımcısının sosyal medya hesaplarını gösterir.
 **${prefix}ping** \n-> Botun pingini gösterir.
 **${prefix}yapımcıyı-çağır** \n-> Yapımcıyı çağırırsınız.
 **${prefix}shard** \n-> Botun shard bilgilerini gösterir.
 **${prefix}yapımcı** \n-> Botun yapımcısını gösterir.
 **${prefix}yenilikler** \n-> Botdaki yenilikleri gösterir.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bot'],
    permLevel: 0
}

exports.help = {
    name: 'bot',
    description: 'Bot Yardım menüsü.',
    usage: 'bot'
}