const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (!message.guild) return message.author.send('Bu Komutu Sadece CodAre Sunucusunda Kulanabilirsiniz!');

 //Bunu isterseniz açabilirsiniz. Kimselerin kullanacağını belirtirsiniz rollerin adını   if(message.member.roles.some(r=>["Kurucu"].includes(r.name)) ) {  
    let kullanici = args[0];
    if (!kullanici) return message.channel.send(" Banlanan Bir kullanıcının ID'sini belirtmen gerek")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`Bu kullanıcı banlanmamış.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('#FFD100')
.setAuthor('Godzilla Cafe Ban Sorgulama', client.user.avatarURL())
.setDescription(`${user.tag} adlı kullanıcının ban nedeni: \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansorgulama','bansorgu','ban-sorgulama','BANSORGULAMA','ban-sorgu'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgulama',
    description: 'Ban sorgulama yaparsınız',
    usage: 'bansorgulama'
};