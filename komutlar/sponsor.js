const Discord = require("discord.js")

const {MessageButton} = require("discord-buttons") 

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 
.setTitle("") 
.setDescription(`Malesef Sponsor Yok :(
`) 

.setColor("PURPLE") 

const b1 = new MessageButton() 

.setStyle("url")

.setLabel("Discord")

.setURL("https://discord.com/invite/ZAqdAG2Hjs")

const b2 = new MessageButton() 

.setStyle("url")

.setLabel("Site")

.setURL("https://discord.com/api/oauth2/authorize?client_id=893191791254319194&permissions=8&scope=bot")

message.channel.send({ embed: embed, 

buttons: [b1, b2] 

}) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "sponsor" 

}