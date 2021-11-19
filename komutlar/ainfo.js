const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("0012ff")
.setTitle("<a:Dnce:832550620761292841>           𝑮𝒐𝒅𝒛𝒊𝒍𝒍𝒂 𝑪𝒂𝒇𝒆 𝙆𝙪𝙧𝙖𝙡𝙡𝙖𝙧         <a:KalpGif:832550272462618655>")
.setThumbnail("")
.setDescription(`

**𝐑𝐞𝐤𝐥𝐚𝐦**
<a:raptiye:832550297611141140>  Yetkililerden izin almadan spam veya kendi reklamını (sunucu davetleri, reklamlar vb.) yapmak yasaktır. Buna üyelere DM göndermek de dahildir.

 **𝐊ü𝐟ü𝐫, 𝐀𝐫𝐠𝐨, 𝐇𝐚𝐤𝐚𝐫𝐞𝐭**
<a:raptiye:832550297611141140>  Her kanalda küfür etmek ve argo kullanmak yasaktır. 
<a:raptiye:832550297611141140>  Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

**𝐘𝐞𝐭𝐤𝐢𝐥𝐢𝐥𝐞𝐫 𝐯𝐞 𝐘𝐞𝐭𝐤𝐢**                    <a:dikkat:832550519859707914>
<a:raptiye:832550297611141140>  Yetki istemek yasaktır.
<a:raptiye:832550297611141140>  Yetkili alımları ile ilgili soru sormak yasaktır.
<a:raptiye:832550297611141140>  Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır
<a:raptiye:832550297611141140>  Yetkililere saygılı olun.

**𝐒𝐩𝐚𝐦, 𝐅𝐥𝐨𝐨𝐝, 𝐄𝐭𝐢𝐤𝐞𝐭𝐥𝐞𝐦𝐞**
<a:raptiye:832550297611141140>  Spam yapmak yasaktır. 
<a:raptiye:832550297611141140>  Bir kelimeyi sürekli bir mesajda yazmak yasaktır. 
<a:raptiye:832550297611141140>  Flood yapmak alt alta yazmak yasaktır. 
<a:raptiye:832550297611141140>  Bir üyeyi sürekli @etiketlemek yasaktır.

**𝐃𝐢𝐧, 𝐒𝐢𝐲𝐚𝐬𝐞𝐭, 𝐂𝐢𝐧𝐬𝐞𝐥𝐥𝐢𝐤**
<a:raptiye:832550297611141140>  Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır. 
<a:raptiye:832550297611141140>  Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır. 
<a:raptiye:832550297611141140>  18+ fotoğraflar paylaşmak ve konuşmak Kesinlikle Yasaktır      <a:ElectroAdultContentWarning:833689153828552736>
<a:raptiye:832550297611141140>  Herkese saygılı davran. Hiçbir hakaret, cadı avı, cinsiyet ayrımı,ırkçılık veya nefret söylemi hoş karşılanmaz

<a:alarm:832550520019091507>  Yapılan Bir İşlemde Üyeler KURALLARI Okumuş Sayılır  <a:Sarsiyahverify:832550604239798272>
`)
.setImage("https://cdn.discordapp.com/attachments/827062484182761522/849225984196083722/standard_5.gif")
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'a',
    description: 'davet!',
    usage: '-davet'
  };