const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `> • [g!kullanıcı](Link): **Kullanıcı yardım menüsünü gösterir.**\n > • [g!moderasyon](Link): **Moderasyon yardım menüsünü gösterir.**\n > • [g!kayıt-sistemi](Link): ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [g!koruma-sistemi](Link): ** Koruma sistemi yardım menüsünü gösterir.**\n > • [g!logo-sistemi](Link): ** Logo sistemi yardım menüsünü gösterir.**\n > • [g!çekili-şsistemi](Link): ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • [g!eğlence](Link): ** Eğlence yardım menüsünü gösterir.**\n > • [g!başvuru-sistemi](Link): ** Başvuru sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")

  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=849214555052834827&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/g7dWfHD6) • [Web Site](https://dcbotlar.xyz) •")
  .setImage("https://cdn.discordapp.com/attachments/893776673034608644/893784566375022643/standard.gif")
  .setFooter("𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆", message.author.avatarURL())
  .setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}