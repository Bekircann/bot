const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
exports.run =  async (client, message, args) => {

    const cezali = db.get(`mutedrol_${message.guild.id}`)
    const yetkili = db.get(`muteyetkili_${message.guild.id}`)
    const logch = db.get(`mutelog_${message.guild.id}`)

    const mutedrol = message.guild.roles.cache.get(cezali)
    const muteyetkili = message.guild.roles.cache.get(yetkili) 
    const log = message.guild.channels.cache.get(logch)
    if (!mutedrol) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Sunucuda Muted Rolรผ Ayarlanmamฤฑล! \`g!mute-rol ayarla @mutedrol\``).setColor('BLUE'));

    if (!muteyetkili) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Sunucuda Mute Yetkili Rolรผ Ayarlanmamฤฑล! \`g!mute-yetkili ayarla @rol\``).setColor('BLUE'));
    if (!log) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Sunucuda Ayarlฤฑ Mute Log Kanalฤฑ Bulununmuyor! \`g!mute-log ayarla #kanal\``).setColor('BLUE'));

    if (!message.member.roles.cache.find(r => r.id === muteyetkili.id)) return message.reply(new Discord.MessageEmbed().setTitle('Narcos').setDescription(` Komutu Kullanmak ฤฐรงin Yeterli Yetkiye Sahip Deฤilsin!`).setColor('BLUE')).then(mesaj => setTimeout(() => {mesaj.delete()}, 3000))

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Lรผtfen Bir Kullanฤฑcฤฑ Belirt \`g!mute @kullanฤฑcฤฑ [sรผre] [sebep]\``).setColor('BLUE'));

    var time = args[1]  
    if (!time) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Lรผtfen Bir Sebep Belirt \`g!mute @kullanฤฑcฤฑ [sรผre] [sebep]\``).setColor('BLUE'));

    const sebep = args.slice(2).join(" ")
    if (!sebep) return message.reply(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` Lรผtfen Bir Sebep Belirt \`g!mute @kullanฤฑcฤฑ [sรผre] [sebep]\``).setColor('BLUE'));

    message.channel.send(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(`<@${user.id}> Adlฤฑ Kiลi Susturuldu\n\n Susturan Yetkili ${message.author}\nSebep  \`${sebep}\`\n Sรผre  \`${time}\``).setColor('BLUE'));

    log.send(new Discord.MessageEmbed().setTitle('๐ฎ๐๐๐๐๐๐๐ ๐ช๐๐๐').setDescription(` <@${user.id}> Adlฤฑ Kiลi Susturuldu\n\n Susturan Yetkili ${message.author}\nSebep  \`${sebep}\`\nSรผre  \`${time}\``).setColor('BLUE'));

    const member = message.guild.member(user);

   try {
        await (member.roles.add(mutedrol.id))
    } catch (e){

        console.log(e)
        message.channel.send('Rol verme ile alakalฤฑ bir sorun oluลtu lรผtfen tekrar dene')
    }
    setTimeout(function () {

        member.roles.remove(mutedrol.id)

    }, ms(args[1]));

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'Belirttiฤiniz Kullanฤฑcฤฑnฤฑn Rolรผnรผ Alฤฑr.',
  usage: 'mute'
};