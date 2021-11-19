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
.setAuthor(`${client.user.username} | Başvuru Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}başvuru-ayar** \n-> Başvuru ayarlarını yaparsınız.
 **${prefix}başvuru-onay** \n-> Başvuru yapan birinin başvurusunu onaylarsınız.
 **${prefix}başvuru-reddet** \n-> Başvuru yapan birinin başvurusunu reddedersiniz.
 **${prefix}başvuru** \n-> Başvuru yaparsınız.
 **${prefix}soru-ayar** \n-> Başvuru sorularınız ayarlarsınız.
`)
.setFooter('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚')
.setTimestamp()
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['başvuru-sistemi','başvuruyardım'],
    permLevel: 0
}

exports.help = {
    name: 'başvuru-sistemi',
    description: 'Başvuru Yardım menüsü.',
    usage: 'başvur-sistemi'
}