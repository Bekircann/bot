const Discord = require('discord.js');

exports.run = (client, message) => {
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); } 
  let zulapng = "https://cdn.discordapp.com/attachments/895219506476105738/897904356773482576/godzilla-vs-kong-movie-8k-2560x1600.jpg"
    var destedencikanlar = [
        "M4A1 **Megatronik Desen**",
        "M4A4 **Cehnnem Susturucu**",
        "M4A1 **Kabus Anahtarlık**",
        "M4A4 **Grafiti Desen**",
        "M4A1 **Ejder Desen**",
        "M4A1 **Köpek Balığı Anahtarlık**",
        "Kar98 **Köpek Balığı Desen**",
        "Kar98 **Grafiti Desen**",
        "Kar98 **Cehennem Lazer**",
        "Kar98 **Grafiti Anahtarlık**",
        "Kar98 **Megatronik Desen**",
        "Kar98 **Kabus Üst Eklenti**",
        "Kar98 **Oyuncak Desen**",
        "AWP **Sultan Desen**",
        "AWP **Megatronik Desen**",
        "AWP **Oyuncak Desen**",
        "AWP **Oyuncak Anahtarlık**",
        "AWP **Ekmek Anahtarlık**",
        "AWP **Kabus Desen**",
        "MPT-76 **Sultan Desen**",
        "MPT-76 **Kabus Anahtarlık**",
        "MPT-76 **Raptor Desen**",
        "MPT-76 **Raptor Anahtarlık**",
        "MPT-76 **Samuray Desen**",
        "MPT-76 **Şanlı Türkiye Deseni**",
        "MPT-76 **Beşiktaş Desen**",
        "M468 **Beşiktaş Desen**",
        "M468 **Fenerbahçe Desen**",
        "M468 **Galatasaray Desen**",
        "M468 **Kabus Desen**",
        "M468 **Megatronik Desen**",
        "M468 **Cehnnem Susturucu**",
        "AUG A3 **Cehnnem Desen**",
        "AUG A3 **Ejder Destesi**",
        "AUG A3 **Terminatör Desen**",
        "AUG A3 **Terminatör Anahtarlık**",
        "AUG A3 **Z.L.C Desen**",
        "AUG A3 **Horoz Desen**",
        "AUG A3 **Gümüş Desen**",
        "M6 LWRC **Megatronik Desen**",
        "M6 LWRC **Kabus Desen**",
        "M6 LWRC **Sultan Desen**",
        "M6 LWRC **Altın Desen**",
        "M6 LWRC **Raptor Desen**",
        "M6 LWRC **Grafiti Desen**",
        "M6 LWRC **Horoz Desen**",
        "DSR1 **Megatronik Desen**",
        "DSR1 **Kabus Desen**",
        "DSR1 **Raptor Desen**",
        "DSR1 **Altın Desen**",
        "DSR1 **Sultan Desen**",
        "DSR1 **Ejder Desen**",
        "Bora 12 **Kabus Desen**",
        "Bora 12 **Altın Desen**",
        "Bora 12 **Megatronik Desen**",
        "Bora 12 **Ejder Desen",
        "Bora 12 **Grafiti Desen**",
        "Bora 12 **Horoz Desen**",
        "Bora 12 **Korsan Desen**",
        "M93R **Grafiti Desen**",
        "M93R **Horoz Desen**",
        "M93R **Köpek Balığ Desen**",
        "M93R **Truva Desen**",
        "M93R **Zehir Desen**",
        "Desert Deagle **Megatronik Desen",
        "Desert Deagle **Altın Desen**",
        "Desert Deagle **Ejder Desen**",
        "Desert Deagle **Osmanlı Desen**",
        "Desert Deagle **Grafiti Desen**",
        "Desert Deagle **Horoz Desen**",
        "Desert Deagle **Korsan Desen**",
        "Desert Deagle **Köpek Balığı Desen**",
        
  
    ]
    var destedencikanlar = destedencikanlar[Math.floor(Math.random(1) * destedencikanlar.length)]
    const embed  = new Discord.MessageEmbed()
    .setImage("https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/products/images/000/024/678/big/platin-deste.jpg")
    .setAuthor('𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚', zulapng)
    .setDescription(`${destedencikanlar}`)
    .setFooter(`Desteyi açan (${message.author.username}) Unutma Bunlar Sadece Bir Simülatör Gerçek hesabına Gelmez`)
    .setColor("RANDOM")
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zuladesteaç'],
  permLevel: 0,
  kategori: "Oyun"
};
exports.help = {
  name: 'desteaç',
  description: 'Zula Destesi Açama Simülasyonu',
  usage: 'desteaç'
}
