const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, Argüman) => {
const crew = Number(Argüman[0]);

  const crewHata = new MessageEmbed()
    .setColor("#7f0000")
    .setTitle("Hata!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());

  const crewBaşarılı = new MessageEmbed()
    .setColor("#007f00")
    .setTitle("Başarılı!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      crewHata.setDescription("Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmanız gerekmektedir.");
      Mesaj.channel.send(crewHata).then(msg => msg.delete({ timeout: 5000}));
      
    } else {
      if (!crew) {
        crewHata.setDescription("Bir sayı belirtiniz.");
        Mesaj.channel.send(crewHata).then(msg => msg.delete({ timeout: 5000}));
      } else {
        if (crew < 101) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(crew);
        }
        if (crew > 100 && crew < 200) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 100);
          });
        }
        if (crew == 200) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 200 && crew < 300) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 200);
          });
        }
        if (crew == 300) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 300 && crew < 400) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 6000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 300);
          });
        }
        if (crew == 400) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 400 && crew < 500) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 7000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 400);
          });
        }
        if (crew == 500) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 500 && crew < 600) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 8000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 500);
          });
        }
        if (crew == 600) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 600 && crew < 700) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 5900}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 600);
          });
        }
        if (crew == 700) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 700 && crew < 800) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 10000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 700);
          });
        }
        if (crew == 800) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 800 && crew < 900) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 11000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 800);
          });
        }
        if (crew == 900) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 900 && crew < 1000) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(crew - 900);
          });
        }

        if (crew == 1000) {
          crewBaşarılı.setDescription(`${crew} Adet mesajı sildim!`);
          Mesaj.channel.send(crewBaşarılı).then(msg => msg.delete({ timeout: 13000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (crew > 1000) {
          crewHata.setDescription("Malesef en fazla 1000 mesaj silebiyom");
          Mesaj.channel.send(crewHata).then(msg => msg.delete({ timeout: 5000}));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Temizle", "sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: "sil"
};//CrewCode