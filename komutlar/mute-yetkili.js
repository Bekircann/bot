const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Yetkin Yok');
    if (args[0] === 'ayarla' || args[0] === 'sıfırla') {

        if (args[0] === 'ayarla') {

            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            if (!rol) return message.reply(new Discord.MessageEmbed().setTitle('Narcos').setDescription(`❌ Geçerli bir rol etiketleyin \`g!mute-yetkili ayarla @rol\` `).setColor('BLUE'));

            await db.set(`muteyetkili_${message.guild.id}`, `${rol.id}`)

            message.channel.send(new Discord.MessageEmbed().setTitle('Narcos').setDescription(` Mute yetkili rol başarıyla ayarlandı! Sıfırlamak için \`g!mute-yetkili sıfırla\` `).setColor('BLUE'));

        } else if (args[0] === 'sıfırla') {

                if (db.fetch(`muteyetkili_${message.guild.id}`)) {

                    await db.delete(`muteyetkili_${message.guild.id}`)

                    message.channel.send(new Discord.MessageEmbed().setTitle('Narcos').setDescription(` Mute yetkili rol başarıyla sıfırlandı!`).setColor('BLUE'));


                } else return message.reply(new Discord.MessageEmbed().setTitle('Narcos').setDescription(` Sunucuda ayarlı mute yetkili bulamadım. Ayarlamak için \`?mute-yetkili ayarla @rol\` sıfırlamak için \`?mute-yetkili sıfırla\` `).setColor('BLUE'));

        } 
    } else return message.reply(new Discord.MessageEmbed().setTitle('Narcos').setDescription(`Mute yetkilisini ayarlamak için \`g!mute-yetkili ayarla @rol\` sıfırlamak için \`?mute-yetkili sıfırla\` `).setColor('BLUE'));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute-yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'mute-yetkili',
  description: 'Belirttiğiniz Kullanıcının Rolünü Alır.',
  usage: 'mute-yetkili'
};