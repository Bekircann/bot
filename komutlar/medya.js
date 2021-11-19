const Discord = require('discord.js');

//MADE BY NYDE IF YOU PUBLİSH Bİ YERDE NYDE VURUR YERDEN YERE

exports.run = function(client, message, args) {

	  const a = new Discord.MessageEmbed()
    
    .setColor("0012ff")
    .setTitle("**Godzilla Medya**")
    .setDescription(" Alttaki Linklerden Godzillanın Sosyal Medya Hesplarına Ulaşabilirsin")

const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = a

    const butonmesaj = "İnstagram"

    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components": 

            [

              {

                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": "https://www.instagram.com/bekircan_uyar/"

                    },

                    {

                        "type": 2,

                        "label": "YouTube",

                        "style": 5,

                        "url": "https://www.youtube.com/channel/UC14-Lf9EA5gbcEt43B5PgJQ"

                    },

                    {

                        "type": 2,

                        "label": "Twitter",

                        "style": 5,

                        "url": "https://twitter.com/BekircanUyar"

                    },

                    {

                        "type": 2,

                        "label": "Tik Tok",
                      
                        "style": 5,

                        "url": "https://www.tiktok.com/@beko_1907"

                    },
                  
                    {

                        "type": 2,

                        "label": "Facebook",

                        "style": 5,

                        "url": "https://www.facebook.com/bekircan.uyar.3"

                    }

                ]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })

};

exports.conf = {

  aliases: []

};

exports.help = {

  name: 'medya'

};