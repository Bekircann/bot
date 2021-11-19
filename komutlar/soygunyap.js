const Discord = require('discord.js');

const CrewSoygun = [
  "52 TL Soydun",
  "31 TL Soydun",
  "tüühh be polis geldi gaç!",
  "6 TL  Soydun",
  "436 TL  Soydun",
  "643 TL  Soydun",
  "531 TL Soydun!",
  "213 TL Soydun",
  "2.234 TL Soydun",
  "3.456 TL Soydun",
  "2.765 TL Soydun",
  "9.324 TL Soydun",
  "24.768 TL Soydun",
  "31.234 TL Soydun",
  "234.876 TL Soydun",
  "453.345 TL Soydun",
  "654.865 TL Soydun",
  "734.763 TL Soydun",
  "931.573 TL Soydun",
  "311.645 TL Soydun",
  "Büyük vurgun yaptın toplam 1.000.0000 TL wwOOOOww",
];

exports.run = function(client, message) {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const soygun = CrewSoygun[Math.floor(Math.random() * CrewSoygun.length)];
  message.channel.send(
  
  "**Soygunun yapılacağı mekan seciliyor..**"
  
  ).then(
  function(i){
    i.edit("**mekan bulundu.**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.MessageEmbed()
      .setTitle('**Soygunu yaptın ve şimdi harcama zamanı** :D')
    .setDescription('')
      .addField('**Bankadan soyduğun para miktarı :**',soygun)
    .setColor('RED')
    
    
    )
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['soyuncu','soygun-yap'],
  permLevel: 0 
};

exports.help = {
  name: 'soygunyap',

  description: 'Soygun Yaparsınız',
    kategori: 'eğlence',
  usage: 'soygunyap' 
}