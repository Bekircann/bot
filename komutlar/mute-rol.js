const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Yetkin Yok');
    if (args[0] === 'ayarla' || args[0] === 'sıfırla') {

        if (args[0] === 'ayarla') {

            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            if (!rol) return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`Geçerli bir rol etiketleyin \`g!mute-rol ayarla @rol\` `).setColor('BLUE'));

            await db.set(`mutedrol_${message.guild.id}`, `${rol.id}`)

            message.channel.send(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`Mute rolü ayarlandı! Sıfırlamak için \`g!mute-rol sıfırla @kullanıcı\``).setColor('BLUE'));

        } else if (args[0] === 'sıfırla') {

                if (db.fetch(`mutedrol_${message.guild.id}`)) {

                    await db.delete(`mutedrol_${message.guild.id}`)

                    message.channel.send(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`Muted rol başarıyla silindi!`).setColor('BLUE'));


                } else return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`Sunucuda ayarlı mute rolü bulamadım. Ayarlamak için \`g!mute-rol ayarla @rol\` sıfırlamak için \`?mute-rol sıfırla\` `).setColor('BLUE'));

        } 
    } else return message.reply(new Discord.MessageEmbed().setTitle('𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆').setDescription(`Muted rol ayarlamak için \`g!mute-rol ayarla @rol\` sıfırlamak için \`?mute-rol sıfırla\` `).setColor('BLUE'));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute-rol'],
  permLevel: 0
};

exports.help = {
  name: 'muted-rol',
  description: 'Belirttiğiniz Kullanıcının Rolünü Alır.',
  usage: 'muted-rol'
};