const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"ππ€ππ―ππ‘π‘π πΎπππ",
"Godzilla ΓnderliΔinde",
"Her Daim!",
    "ππ€ππ―ππ‘π‘π πΎπππ"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/bekircan_uyar' })
}, 5000);
    console.log(`Godzilla baΕarΔ±yla giriΕ yaptΔ±.`);
}