const Discord = require('discord.js');
const db = require('nrc.db');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');


	if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                          .setTitle("Doğru Kullanım:")
                                          .addField("Soru Ayarlama Menüsü", `
                                          ╔══════════════════════════════════════╗
                                          ║
                                          ║  **•** \`${ayarlar.prefix}soru-ayar 1 (sorunuz) \` ➡ **Soru 1 Ayarlarsınız**
                                          ║  **•** \`${ayarlar.prefix}soru-ayar 2 (sorunuz) \` ➡ **Soru 2 Ayarlarsınız**
                                          ║  **•** \`${ayarlar.prefix}soru-ayar 3 (sorunuz) \` ➡ **Soru 3 Ayarlarsınız**
                                          ║  **•** \`${ayarlar.prefix}soru-ayar 4 (sorunuz) \` ➡ **Soru 4 Ayarlarsınız**
                                          ║  **•** \`${ayarlar.prefix}soru-ayar 5 (sorunuz) \` ➡ **Soru 5 Ayarlarsınız**
                                          ║
                                          ╚══════════════════════════════════════╝
                                          \`\`\`𝙂𝙤𝙙𝙯𝙞𝙡𝙡𝙖 𝘾𝙖𝙛𝙚\`\`\`
                                          `)
                                          .setColor(message.guild.me.displayColor)
                                          )



  if(args[0] === "1") {
  if(db.has(`soru1_${message.guild.id}`)) return message.channel.send("Soru 1 Zaten Ayarlanmış.")
  if(!args.slice(1).join(" ")) return message.channel.send("Bir soru yaz.")
  db.set(`soru1_${message.guild.id}`, args.slice(1).join(" "))
  return message.channel.send("Başarıyla ayarlandı.")
      }


      if(args[0] === "2") {
        if(db.has(`soru2_${message.guild.id}`)) return message.channel.send("Soru 2 Zaten Ayarlanmış.")
        if(!args.slice(1).join(" ")) return message.channel.send("Bir soru yaz.")
        db.set(`soru2_${message.guild.id}`, args.slice(1).join(" "))
        return message.channel.send("Başarıyla ayarlandı.")
            }


            if(args[0] === "3") {
                if(db.has(`soru3_${message.guild.id}`)) return message.channel.send("Soru 3 Zaten Ayarlanmış.")
                if(!args.slice(1).join(" ")) return message.channel.send("Bir soru yaz.")
                db.set(`soru3_${message.guild.id}`, args.slice(1).join(" "))
                return message.channel.send("Başarıyla ayarlandı.")
                    }

                    if(args[0] === "4") {
                        if(db.has(`soru4_${message.guild.id}`)) return message.channel.send("Soru 4 Zaten Ayarlanmış.")
                        if(!args.slice(1).join(" ")) return message.channel.send("Bir soru yaz.")
                        db.set(`soru4_${message.guild.id}`, args.slice(1).join(" "))
                        return message.channel.send("Başarıyla ayarlandı.")
                            }

                            if(args[0] === "5") {
                                if(db.has(`soru5_${message.guild.id}`)) return message.channel.send("Soru 5 Zaten Ayarlanmış.")
                                if(!args.slice(1).join(" ")) return message.channel.send("Bir soru yaz.")
                                db.set(`soru5_${message.guild.id}`, args.slice(1).join(" "))
                                return message.channel.send("Başarıyla ayarlandı.")
                                    }
            
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['soru-ayar'],
    permLevel: 0
};

exports.help = {
    name: 'soru-ayar',
    description: 'ayarlama',
 }