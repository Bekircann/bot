const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mrk = args.slice(0).join(' ');
    if (mrk.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    if (mrk.includes("oç")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("göt")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("mal")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("aq")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("sg")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("amk")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("ananı sik iyim")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("piç")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("orospu çocuğu")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("orospu")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("oruspu")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla küfür yasak!'));
    if (mrk.includes("https://")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla link yasak!'));
    if (mrk.includes("http://")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla link yasak!'));
    if (mrk.includes(".com")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla link yasak!'));
    if (mrk.includes("discord.gg")) return message.reply(
      new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setDescription('bu komutla link yasak!'));
  message.delete();
  message.channel.send(mrk);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazdır', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};