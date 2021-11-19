const Discord = require("discord.js");

var Jimp = require('jimp');

exports.run = async (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.startTyping();

    var user = message.mentions.users.first() || message.author;

   

    if (!message.guild) user = message.author;

   

Jimp.read(user.displayAvatarURL({format: "png"}), (err, image) => {

    image.resize(310, 325)

    Jimp.read("https://cdn.discordapp.com/attachments/492705577441689604/494582135286530050/t.png", (err, avatar) => {

        avatar.resize(310, 325)

        image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);

        setTimeout(function() {

            message.channel.send(new Discord.MessageAttachment(`./img/snip/${client.user.id}-${user.id}.png`));

        }, 1000);

      message.channel.stopTyping();

    });

});

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

  };

  

  exports.help = {

    name: 'tr',

    description: 'tr',

    usage: 'tr'

  };