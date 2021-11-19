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
.setAuthor(`${client.user.username} | Eğlence Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}adam-asmaca** \n-> Adam asmaca oynarsın.
 **${prefix}ambulans** \n-> Ambulans çağırır.adam-asmaca
 **${prefix}atasözü** \n-> Atasözü söyler.
 **${prefix}atatürk** \n-> Atamızın resmini atar.
 **${prefix}ağla** \n-> Botu ağlatırsın.
 **${prefix}aşk-ölçer** \n-> Aşk ölçer.
 **${prefix}balık-tut** \n-> Balık tutarsın.
 **${prefix}beşlik** \n-> Bi beşlik çakarsın.
 **${prefix}brawl-stars** \n-> Kutu açarsın.
 **${prefix}dans-et** \n-> Dans edersin.
 **${prefix}polis** \n-> Polis çağırır.
 **${prefix}desteaç** \n-> Zula destesi açarsın.
 **${prefix}duello** \n-> Duello atarsınız.
 **${prefix}efkarölç** \n-> Efkar ölçer.
 **${prefix}espiri** \n-> Espiri söyler.
 **${prefix}fbi** \n-> Fbi gifi atar.
 **${prefix}hacının-şalgamı** \n-> Bak baklım nasıl.
 **${prefix}hesapla** \n-> İstediğin işlemi yapar.
 **${prefix}ilginçbilgi** \n-> İlginç bir bilgi gösterir.
 **${prefix}itfaiye** \n-> İtfaiye çağırır.
 **${prefix}kapaklaf** \n-> Kapak bir laf söyler.
 **${prefix}kasaaç** \n-> CS-GO kasası açar.
 **${prefix}panda** \n-> Panda resmi atar.
 **${prefix}piyango** \n-> Piyango çekersin.
 **${prefix}polis** \n-> Polis çağırır.
 **${prefix}sos** \n-> Sos oynarsın.
 **${prefix}soygunyap** \n-> Soygun yapar.
 **${prefix}tkm** \n-> Taş-Kağıt-Makas oynarsın.
 **${prefix}tekerleme** \n-> Tekerleme söyler.
 **${prefix}token** \n-> Botun tokenini gösterir.
 **${prefix}tr** \n-> Türk bayrağı atar.
 **${prefix}wested** \n-> Profilinize wested efekti ekler.
 **${prefix}yazankazanır** \n-> Arkadaşınla beraber yazan kaznır oynarsın.
 **${prefix}yazdır** \n-> İstediğin yazıyı yazdırır.
 **${prefix}yazıtura** \n-> Yazı tura atarsın.
 **${prefix}yumruk-at** \n-> Yumruk atar.
 **${prefix}yılbaşı** \n-> Yılbaşına ne kadar zaman kaldığını gösterir.
 **${prefix}zar-at** \n-> Zar atarsın.
 **${prefix}şekerye** \n-> Şeker yersin.
 **${prefix}şifre-oluştur** \n-> Şifre oluşturur.
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
  kategori: "eğlence",
  permLevel: 0
};
  
  exports.help = {
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};