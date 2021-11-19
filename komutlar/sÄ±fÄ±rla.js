const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Sıfırlama Komutu")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer sıfırlanama işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		} else {
			message.reply('Sıdırlama işlemi iptal edildi!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sıfırla'],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'sıfırla-kanal', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'sıfırla'
}
