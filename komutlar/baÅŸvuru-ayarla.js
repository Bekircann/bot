const Discord = require('discord.js');
const db = require('nrc.db');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                          .setTitle("Doğru Kullanım:")
                                          .addField("Yardım Menüsü", `
                                          ╔══════════════════════════════════════╗
                                          ║
                                          ║  **•** \`g!başvuru-ayar başvuruyap-kanal\` ➡ **Başvuru kanalını ayarlarsınız.**
                                          ║  **•** \`g!başvuru-ayar başvurulog-kanal #kanal\` ➡ **Başvuru log kanalını ayarlarsınız.**
                                          ║  **•** \`g!başvuru-ayar başvurugiden-kanal #kanal\` ➡ **Başvuruların gideceği kanalı ayarlarsınız.**
                                          ║  **•** \`g!başvuru-ayar yetkili @rol\` ➡ **Yetkili rolünü ayarlarsınız.**
                                          ║
                                          ╚══════════════════════════════════════╝
                                          \`\`\`𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚\`\`\`
                                          `)
                                          .setColor(message.guild.me.displayColor)
                                          )
  if(args[0] === "başvuruyap-kanal"){
    if(db.has(`başvuru-ekle_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!başvuru-ayar sıfırla**")
    let başvuruekle = message.mentions.channels.first();
    if(!başvuruekle) return message.channel.send("Lütfen kanal seçin")
    db.set(`başvuru-ekle_${message.guild.id}`, başvuruekle.id)
    message.channel.send("başvuru-ekle kanalı başarıyla ayarlandı")
  }
   if(args[0] === "başvurulog-kanal"){
     if(db.has(`başvuru-log_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!başvuru-ayar sıfırla**")
     let başvurulog = message.mentions.channels.first();
     if(!başvurulog) return message.channel.send("Lütfen kanal seçiniz.")
     db.set(`başvuru-log_${message.guild.id}`, başvurulog.id)
     message.channel.send("başvuru-log kanalı başarıyla ayarlandı")
  }
   if(args[0] === "başvurugiden-kanal"){
     if(db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!başvuru-ayar sıfırla**")
     let basvurukanal = message.mentions.channels.first();
     if(!basvurukanal) return message.channel.send("Lütfen kanal seçin.")
     db.set(`basvuruk_${message.guild.id}`, basvurukanal.id)
     message.channel.send("Başvuru kanalı başarıyla ayarlandı")}
  if(args[0] === "yetkili"){
    if(db.has(`byetkili_${message.guild.id}`)) return message.channel.send("Yetkili zaten ayarlanmış.")
    let yetkilirol = message.mentions.roles.first();
    if(!yetkilirol) return message.channel.send("Lütfen rol seçin.")
    db.set(`byetkili_${message.guild.id}`, yetkilirol.id)
    message.channel.send("Başarıyla ayarlandı.")
  }
   if(args[0] === "sıfırla"){
     if(!db.has(`başvuru-ekle_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`başvuru-log_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Rol önceden ayarlanmamış")
     db.delete(`basvuruk_${message.guild.id}`)
     db.delete(`başvuru-log_${message.guild.id}`)
     db.delete(`başvuru-ekle_${message.guild.id}`)
     db.delete(`byetkili_${message.guild.id}`)
     message.channel.send("Başarıyla sıfırlandı.")
     

   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['başvuruayar','başvuruayarla'],
  permLevel: 0,
};

exports.help = {
  name: 'başvuru-ayar', 
  description: "başvuru List Ayarları",
  usage: 'başvuruayarla'
};