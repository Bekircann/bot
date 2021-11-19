const db = require('quick.db')
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Yetkin Yok');
    if (args[0] === 'ayarla' || args[0] === 'sıfırla') {

        if (args[0] === 'ayarla') {

            const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            if (!kanal) return message.reply(`Lütfen geçerli bir kanal gir.`)

            await db.set(`mutelog_${message.guild.id}`, `${kanal.id}`)

            const embed = new MessageEmbed()
            .setDescription(`Mute Log Kanalı Ayarlandı\n\n Ayarlanan Kanal <#${kanal.id}>\n Ayarlayan Kişi <@${message.member.id}>`)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Godzilla Cafe')
            message.channel.send(embed)

        } else if (args[0] === 'sıfırla') {

            if (db.fetch(`mutelog_${message.guild.id}`)) { await db.delete(`mutelog_${message.guild.id}`)
            const embed = new MessageEmbed()
            .setDescription(` Mute Log Kanalı Sıfırlandı\n\n Ayarı Sıfırlayan Kişi <@${message.member.id}>`)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Godzilla Cafe')
            message.channel.send(embed)
        
        } else return message.reply('Bu sunucuda ayarlı bir log bulamadım.')
        }

    } else return message.reply(`Log Kanalı Ayarlamak İçin \`g!mute-log ayarla [Kanal ID]\` , Log Kanalını Sıfırlamak İçin \`g!mutelog sıfırla\``)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute-log'],
  permLevel: 0
};

exports.help = {
  name: 'mute-log',
  description: 'Belirttiğiniz Kullanıcının Rolünü Alır.',
  usage: 'mute-log'
};