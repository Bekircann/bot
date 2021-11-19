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
    if (!mutedrol) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Sunucuda Muted Rolü Ayarlanmamış! \`g!mute-rol ayarla @mutedrol\``).setColor('BLUE'));

    if (!muteyetkili) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Sunucuda Mute Yetkili Rolü Ayarlanmamış! \`g!mute-yetkili ayarla @rol\``).setColor('BLUE'));
    if (!log) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Sunucuda Ayarlı Mute Log Kanalı Bulununmuyor! \`g!mute-log ayarla #kanal\``).setColor('BLUE'));

    if (!message.member.roles.cache.find(r => r.id === muteyetkili.id)) return message.reply(new Discord.MessageEmbed().setTitle('Narcos').setDescription(` Komutu Kullanmak İçin Yeterli Yetkiye Sahip Değilsin!`).setColor('BLUE')).then(mesaj => setTimeout(() => {mesaj.delete()}, 3000))

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Lütfen Bir Kullanıcı Belirt \`g!mute @kullanıcı [süre] [sebep]\``).setColor('BLUE'));

    var time = args[1]  
    if (!time) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Lütfen Bir Sebep Belirt \`g!mute @kullanıcı [süre] [sebep]\``).setColor('BLUE'));

    const sebep = args.slice(2).join(" ")
    if (!sebep) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` Lütfen Bir Sebep Belirt \`g!mute @kullanıcı [süre] [sebep]\``).setColor('BLUE'));

    message.channel.send(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`<@${user.id}> Adlı Kişi Susturuldu\n\n Susturan Yetkili ${message.author}\nSebep  \`${sebep}\`\n Süre  \`${time}\``).setColor('BLUE'));

    log.send(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(` <@${user.id}> Adlı Kişi Susturuldu\n\n Susturan Yetkili ${message.author}\nSebep  \`${sebep}\`\nSüre  \`${time}\``).setColor('BLUE'));

    const member = message.guild.member(user);

   try {
        await (member.roles.add(mutedrol.id))
    } catch (e){

        console.log(e)
        message.channel.send('Rol verme ile alakalı bir sorun oluştu lütfen tekrar dene')
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
  description: 'Belirttiğiniz Kullanıcının Rolünü Alır.',
  usage: 'mute'
};