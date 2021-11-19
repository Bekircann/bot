const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = ``

exports.run = (client, message) => {
  if(message.author.id !== "696061560912740513") if(message.author.id !== "775797087606014013") return message.channel.send("Çok yakında...");
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor('BLUE')
 .setAuthor(`${client.user.username} | Nsfw Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}anal** -> __Anal Nsfw Atar.__
 **${prefix}4k** -> __4K Nsfw Atar.__
 **${prefix}ass** -> __Ass Nsfw Atar.__
 **${prefix}pgif** -> __Pgif Nsfw Atar.w__
 **${prefix}hentai** -> __Hentai Nsfw Atar.__
 **${prefix}pussy** -> __Pussy Nsfw Atar.__
 **${prefix}thigh** -> __Thigh Nsfw Atar.__`)
 .setFooter(`Godzilla Cafe`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};